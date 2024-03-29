import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { Howl } from "howler"
import PulseButton from "../components/PulseButton"
import ScrollIcon from "../components/ScrollIcon"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useAudio } from "../hooks/useAudio"
import { useContext } from "react"
import { useRouter } from "next/router"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"))

const Section2 = () => {
  const [playing, play, stop, isMute, mute] = useAudio("/sound/section2/candle.mp3", false, 0.075)
  const [dropSound] = useState(new Howl({ src: "/sound/section2/water-drop.mp3", volume: 0.5, loop: false, mute: false }))
  gsap.registerPlugin(ScrollTrigger)
  const { setTimelinePoint } = useContext(TimelineContext)

  const [candleActivate, setCandleActivate] = useState(false)
  const router = useRouter()
  const [dropWater, setDropWater] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.to("#coffin", { opacity: 0, scale: 1.75, x: "26%", y: "-44.0%", duration: 0, delay: 0 })
    gsap.to("#scroll-text", { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "-50 center",
        end: `+=500 center`,
        onEnter: () => setTimelinePoint(1),
        onLeaveBack: () => setTimelinePoint(0),
        toggleActions: "play pause resume reverse",
      },
    })

    const coffinTl = gsap.timeline({
      scrollTrigger: {
        id: "coffin-timeline",
        trigger: ".coffin-container",
        start: "30% center",
        end: `+=20%`,
        scrub: true,
        pin: false,
        onEnter: () => setTimelinePoint(2),
        onLeaveBack: () => setTimelinePoint(1),
      },
    })

    coffinTl.fromTo("#candle", { opacity: 0 }, { opacity: 1 })
    tl.fromTo("#text", { opacity: 0 }, { opacity: 1, duration: 1 })
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const candleHandle = () => {
    play()
    const activeTl = gsap.timeline({
      scrollTrigger: {
        ease: "none",
        id: "coffin-active",
        trigger: ".coffin-container",
        start: "65% 60%",
        end: `+=350%`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        pinType: "fixed",
      },
    })
    activeTl.fromTo("#scroll-text", { opacity: 1, duration: 1 }, { opacity: 0 })
    activeTl.to("#coffin", { opacity: 1 })
    activeTl.to("#candle-stick", { opacity: 0 })
    activeTl.to("#smoke", { opacity: 0 })
    activeTl.fromTo("#smoke-active", { opacity: 0 }, { opacity: 1 })
    activeTl.to("#coffin", { x: 0, y: 0, scale: 1 })
    activeTl.to("#next-button", { opacity: 1 })

    setCandleActivate(true)
    setTimelinePoint(2)
  }

  const waterDropHandle = () => {
    dropSound.play()
    setDropWater(true)
  }

  return (
    <div className="min-h-screen h-full relative">
      <img src="/images/section2/bg.webp" alt="bg" className="h-full w-full fixed object-cover object-top top-0" />
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section2/header/เสีย_"} section="2" totalImage={15} parallaxExclude={[3, 15]} />
      </div>
      <div className="w-full h-screen relative content-container">
        <div className="flex xl:items-center">
          <div className="relative">
            <AnimatePresence exitBeforeEnter>
              {!dropWater && (
                <div className="absolute z-20 right-[20%] top-[20%]">
                  <PulseButton handle={() => waterDropHandle()} title="Click" />
                </div>
              )}
            </AnimatePresence>

            <img src={`/images/section2/hand.${dropWater ? "gif" : "webp"}`} alt="" id="hand" className="w-[40vw] h-[40vw] z-10" />
          </div>
          <div className="text-white xl:mb-64 2xl:ml-24 md:mb-0 xl:w-[90ch] w-[70ch] xl:mt-0 mt-6 mb-12 ml-0 z-10 px-3" id="text">
            <h2 className="lg:text-9xl text-[10vw] font-bold mb-1 header-font leading-none">ขอขมาศพ</h2>
            <p className="lg:text-2xl text-base lg:ml-5 ml-0 leading-tight whitespace-nowrap">
              หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร <br />
              ธูป คนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ <br />
              ขออโหสิกรรมซึ่งกันและกัน หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
            </p>
          </div>
        </div>
        <div className="absolute xl:max-w-[70vw] max-w-[60vw] bottom-0 right-0 z-10">
          <img src="/images/section2/plate.webp" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="coffin-container w-full h-screen relative overflow-hidden">
        <div id="next-button" className="absolute right-5 top-[15%] opacity-0 z-40">
          <motion.button
            initial={{ opacity: 0.3, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex items-center w-[10vw] min-w-[100px] max-w-[160px]"
            onClick={() => {
              mute()
              setTimeout(() => stop(), 500)
              router.replace("/section3", "/", { shallow: true, scroll: false })
            }}
          >
            <img src="/images/section2/next.svg" alt="next" className="w-full h-full" />
          </motion.button>
        </div>

        <div className="translate-x-[-50%] translate-y-[-50%] top-[45%] left-1/2 absolute z-10 flex flex-col items-center" id="candle">
          <div className="absolute w-[10vw] h-[25vh] xl:top-[-70%] top-[-55%] origin-bottom" id="smoke">
            {candleActivate && (
              <motion.img
                src="/images/section2/smoke.gif"
                alt="smoke"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              />
            )}
          </div>
          <img src="/images/section2/candle.png" alt="candle" id="candle-stick" className="w-[80%] max-h-[40vh]" />
          {!candleActivate && (
            <button
              className="border z-10 border-white text-white rounded-xl py-2 text-2xl font-bold absolute w-32 bottom-[-40%]"
              onClick={() => candleHandle()}
            >
              จุดธุป
            </button>
          )}

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 15 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            id="scroll-text"
            className="w-full invert absolute bottom-[-40%] text-center flex justify-center flex-col items-center"
          >
            <h2 className="lg:text-2xl text-base text-black font-bold mb-1 cinzel-font">SCROLL</h2>
            <ScrollIcon />
          </motion.div>
        </div>

        <div className="relative" id="coffin">
          <motion.img
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            src="/images/section2/light.webp"
            className="absolute w-full h-screen object-contain"
            alt=""
          />
          <img src="/images/section2/smoke2.gif" alt="smoke" id="smoke-active" className="absolute w-full h-screen object-contain invert" />
          <img src="/images/section2/coffin.webp" className=" w-full h-screen object-contain" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section2
