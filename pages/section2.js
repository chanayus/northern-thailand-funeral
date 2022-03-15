import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import Header from "../screens/section2/header"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const [isNext, setIsNext] = useState(false)
  const router = useRouter()

  useEffect(() => {
    gsap.to("#coffin", { opacity: 0, x: "27.9%", y: "-25%", duration: 0, delay: 0 })

    const coffinLeave = () => {
      gsap.to("#coffin", { x: 0, y: 0 })
      gsap.to("#candle", { left: "22%", top: "75%" })
    }

    const coffinEnterBack = () => {
      gsap.to("#coffin", { x: "27.9%", y: "-25%" })
      gsap.to("#candle", { left: "50%", top: "50%" })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "-50 center",
        end: `+=600 center`,
        scrub: 0.75,
      },
    })
    const coffinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".coffin-container",
        start: "center center",
        end: `+=100%`,
        scrub: 1.5,
        pin: true,
        onEnterBack: () => {
          coffinEnterBack()
          setIsNext(false)
        },
        onLeave: () => {
          coffinLeave()
          setIsNext(true)
        },
      },
    })

    coffinTl.fromTo("#candle", { opacity: 0 }, { opacity: 1 })
    coffinTl.to("#coffin", { opacity: 1 })

    tl.fromTo("#text", { opacity: 0 }, { opacity: 1 })
  }, [])

  return (
    <div className="min-h-screen h-full">
      <div className="w-full h-screen overflow-hidden">
        <Header />
      </div>
      <div className="w-full h-screen relative content-container">
        <div className="flex items-center flex-wrap">
          <img src="/images/section2/hand.png" alt="" id="hand" />
          <div className="text-white mb-48 xl:ml-24 ml-0 z-10  px-3" id="text">
            <h2 className="lg:text-9xl text-7xl font-bold mb-2 header-font">ขอขมาศพ</h2>
            <p className="lg:text-2xl lg:ml-5 ml-0 text-xl leading-tight">
              หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร <br /> ธูปคนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ <br />{" "}
              ขออโหสิกรรมซึ่งกันและกัน หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
            </p>
          </div>
        </div>
        <img src="/images/section2/plate.png" className="w-[100%] max-w-[1500px] absolute bottom-0 right-0" alt="" />
      </div>
      <div className="coffin-container w-full h-screen relative overflow-hidden">
        <AnimatePresence>
          {isNext && (
            <motion.button
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="z-50 absolute bg-gray-300 py-3 t px-10 rounded font-bold right-5 top-1/2"
              onClick={() => router.replace("/section3", "/", { shallow: true, scroll: false })}
            >
              Next
            </motion.button>
          )}
        </AnimatePresence>
        <div className="w-3 h-[160px] translate-y-[-50%] bg-white top-1/2 left-1/2 absolute z-10" id="candle"></div>
        <img src="/images/section2/coffin.png" className="w-full h-full object-cover object-left" id="coffin" alt="" />
      </div>
    </div>
  )
}

export default Section2
