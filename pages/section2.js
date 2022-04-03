import { AnimatePresence, motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
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
    gsap.to("#coffin", { opacity: 0, x: "27.5%", y: "-25%", duration: 0, delay: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "-50 center",
        end: `+=600 center`,
        scrub: true,
        onEnter: () => setTimelinePoint(1),
        onLeaveBack: () => setTimelinePoint(0),
      },
    })

    const coffinTl = gsap.timeline({
      scrollTrigger: {
        id: "coffin-timeline",
        trigger: ".coffin-container",
        start: "center center",
        end: `+=40%`,
        scrub: true,
        pin: true,
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
    gsap.to("#coffin", { opacity: 1, delay: 1 })
    gsap.to("#coffin", { x: 0, y: 0, delay: 2.5 })
    gsap.to("#candle", { left: "22.5%", top: "75%", delay: 2.5 })
    setIsNext(true)
  }

  useEffect(() => {
    if (candleActivate) {
      ScrollTrigger.getById("coffin-timeline").kill()
      gsap.to("#candle", { opacity: 1, duration: 0 })
    }
  }, [candleActivate])

  return (
    <div className="min-h-screen h-full">
      <div className="w-full overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section2/header/เสีย_"} totalImage={14} parallaxExclude={[1, 13, 14]} />
      </div>
      <div className="w-full min-h-screen relative content-container">
        <div className="flex xl:items-center xl:flex-row flex-col">
          <img src="/images/section2/hand.png" alt="" id="hand" className="max-w-[680px] w-full" />
          <div className="text-white xl:mb-48 2xl:ml-24 md:mb-0 md:w-[90ch] mb-12 ml-0 z-10 px-3 " id="text">
            <h2 className="lg:text-9xl text-8xl font-bold mb-2 header-font">ขอขมาศพ</h2>
            <p className="text-2xl lg:ml-5 ml-0 leading-tight">
              หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร ธูปคนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ
              ขออโหสิกรรมซึ่งกันและกัน หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
            </p>
          </div>
        </div>
        <div className="xl:absolute xl:max-w-[70vw] xl:bottom-0 xl:right-0 xl:translate-y-0 translate-y-[-10vh] w-full flex justify-end">
          <img src="/images/section2/plate.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="coffin-container w-full h-screen relative overflow-hidden">
        <AnimatePresence>
          {isNext && (
            <motion.button
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 3 }}
              className="z-50 absolute bg-gray-300 py-3 t px-10 rounded font-bold right-5 top-1/2"
              onClick={() => router.replace("/section3", "/", { shallow: true, scroll: false })}
            >
              Next
            </motion.button>
          )}
        </AnimatePresence>
        <div className="translate-x-[-50%] translate-y-[-50%] top-[45%] left-1/2 absolute z-10 flex flex-col items-center bg-red-500" id="candle">
          {candleActivate && (
            <Smoke initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <span></span>
              <span></span>
            </Smoke>
          )}
          <div className="w-3 h-[160px] bg-white "></div>
          {!candleActivate && (
            <button className="border border-white rounded-xl py-3 text-2xl font-bold absolute w-36 bottom-[-60%]" onClick={() => candleHandle()}>
              จุดธุป
            </button>
          )}
        </div>
        <img src="/images/section2/coffin.png" className="w-full h-full object-cover object-left" id="coffin" alt="" />
      </div>
    </div>
  )
}

const smokeAnim = keyframes`
  0%{
    transform: translateY(0);
    opacity: 0;
  }
  15%{
    transform: translateY(-10);
    opacity: 1;
  }
  50%{
    transform: translateY(-20px);
    opacity: 0.5;
  }
  100%{
    transform: translateY(-30px);
    opacity: 0.0;
  }
`

const Smoke = styled(motion.div)`
  position: absolute;
  top: -60%;
  display: flex;
  z-index: 1;
  span {
    margin: 0 2px 0px;
    min-width: 8px;
    height: 100px;
    background: red;
    border-radius: 50%;
    animation: ${smokeAnim} 5s linear infinite;
    filter: blur(10px);
  }
`

export default Section2
