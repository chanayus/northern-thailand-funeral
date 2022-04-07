import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import HeaderParallax from "../components/HeaderParallax"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"
import { useRouter } from "next/router"

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const { setTimelinePoint } = useContext(TimelineContext)
  const [isNext, setIsNext] = useState(false)
  const [candleActivate, setCandleActivate] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.to("#coffin", { opacity: 0, scale: 1.75, x: "26%", y: "-44.0%", duration: 0, delay: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "-50 center",
        end: `+=500 center`,
        scrub: 1,
        onEnter: () => setTimelinePoint(1),
        onLeaveBack: () => setTimelinePoint(0),
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
    tl.fromTo("#text", { opacity: 0 }, { opacity: 1 })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const candleHandle = () => {
    setCandleActivate(true)
    setTimelinePoint(2)
    const activeTl = gsap.timeline({
      scrollTrigger: {
        ease: "none",
        id: "coffin-active",
        trigger: ".coffin-container",
        start: "70% 70%",
        end: `+=400%`,
        scrub: 2,
        pin: true,
      },
    })
    activeTl.to("#coffin", { opacity: 1 })
    activeTl.to("#candle-stick", { opacity: 0 })
    activeTl.to("#smoke", { opacity: 0 })
    activeTl.fromTo("#smoke-active", { opacity: 0 }, { opacity: 1 })
    activeTl.to("#coffin", { x: 0, y: 0, scale: 1 })

    setIsNext(true)
  }

  useEffect(() => {
    if (candleActivate) {
      ScrollTrigger.getById("coffin-timeline").kill()
      gsap.to("#candle", { opacity: 1, duration: 0 })
    }
  }, [candleActivate])

  return (
    <div className="min-h-screen h-full relative">
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section2/header/เสีย_"} totalImage={14} parallaxExclude={[1, 13, 14]} />
      </div>

      <div className="w-full h-screen relative content-container">
        <img src="/images/section2/bg1.jpg" alt="bg" className="h-full w-full absolute object-cover object-bottom" />
        <div className="flex xl:items-center">
          <img src="/images/section2/hand.gif" alt="" id="hand" className="w-[40vw] h-[40vw] z-10" />
          <div className="text-white xl:mb-64 2xl:ml-24 md:mb-0 xl:w-[90ch] w-[70ch] xl:mt-0 mt-6 mb-12 ml-0 z-10 px-3" id="text">
            <h2 className="lg:text-9xl text-[10vw] font-bold mb-1 header-font leading-none">ขอขมาศพ</h2>
            <p className="lg:text-2xl text-base lg:ml-5 ml-0 leading-tight">
              หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร ธูปคนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ
              ขออโหสิกรรมซึ่งกันและกัน หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
            </p>
          </div>
        </div>
        <div className="absolute xl:max-w-[70vw] max-w-[60vw] bottom-0 right-0 z-10">
          <img src="/images/section2/plate.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="coffin-container w-full h-screen relative overflow-hidden">
        <img src="/images/section2/bg2.jpg" alt="bg" className="h-full w-full absolute object-cover object-top" />
        <AnimatePresence>
          {isNext && (
            <motion.button
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 3 }}
              className="flex items-center z-40 absolute right-5 top-[10%]"
              onClick={() => router.replace("/section3", "/", { shallow: true, scroll: false })}
            >
              <img src="/images/section2/next.png" alt="" />
              <img src="/icon/back.svg" alt="" className="rotate-[-90deg] w-12" />
            </motion.button>
          )}
        </AnimatePresence>
        <div className="translate-x-[-50%] translate-y-[-50%] top-[45%] left-1/2 absolute z-10 flex flex-col items-center" id="candle">
          <div className="absolute w-[10vw] h-[25vh] xl:top-[-70%] top-[-55%] origin-bottom" id="smoke">
            {candleActivate && (
              <motion.img
                src="/images/section2/smoke.gif"
                alt="smoke"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="invert w-full h-full"
              />
            )}
          </div>
          <img src="/images/section2/candle.png" alt="candle" id="candle-stick" className="w-[90%] max-h-[40vh]" />
          {!candleActivate && (
            <button
              className="border border-black text-black rounded-xl py-2 text-2xl font-bold absolute w-32 bottom-[-40%]"
              onClick={() => candleHandle()}
            >
              จุดธุป
            </button>
          )}
        </div>

        <div className="relative" id="coffin">
          <motion.img
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, yoyo: Infinity }}
            src="/images/section2/light.png"
            className="absolute w-full h-screen object-contain"
            alt=""
          />
          <img src="/images/section2/smoke2.gif" alt="smoke" id="smoke-active" className="absolute w-full h-screen object-contain invert" />
          <img src="/images/section2/coffin.png" className=" w-full h-screen object-contain" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section2
