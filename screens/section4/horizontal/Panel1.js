import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import PulseButton from "../../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useAudio } from "../../../hooks/useAudio"

const Panel1 = ({ setTimelinePoint }) => {
  const [playing, play] = useAudio("/sound/section3/trigger.mp3", false)
  const [dropInArea, setDropInArea] = useState(false)
  const itemRef = useRef(null)
  const textRef = useRef()

  const [state, setState] = useState({
    smoke: false,
    light: false,
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "30% center",
        end: "+=5%",
        onEnter: () => setTimelinePoint(6),
        onLeaveBack: () => setTimelinePoint(5),
      },
      ease: "none",
    })
    anim.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
    anim.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
    anim.scrollTrigger.refresh()
    return () => anim.kill()
  }, [itemRef.current])

  const dropHandle = (info) => {
    const inAreaX = info.offset.x >= 30 && info.offset.x <= 350
    const inAreaY = info.offset.y <= -5 && info.offset.y >= -160

    console.log(info.offset.x, info.offset.y)
    if (inAreaX && inAreaY) {
      setDropInArea(true)
      console.log("in Area ")
    }
  }

  return (
    <div className="w-screen h-screen relative" ref={itemRef}>
      <div className="absolute z-10 top-[10%] left-[58%] translate-x-[-50%] max-w-[40vw] leading-tight" ref={textRef}>
        <h2 className="text-[10vmin] mb-0 header-font font-bold text-black">ข้าว 100 ห่อ</h2>
        <p className="text-[2.6vmin] leading-tight text-black">
          ให้ผู้ร่วมงานนำข้าวเหนียวคนละห่อ ใส่ไว้ในย่ามของผู้ตาย <br />
          จำนวน 100 ห่อ ถือว่าเป็นการส่งข้าวไปให้ผู้ตายกินในภายภาคหน้า <br />
          และยังเชื่อว่าจะทำให้ชาติหน้ามีอายุยืืนนานเป็น 100 ปี
        </p>
      </div>
      <motion.img
        drag={!dropInArea}
        dragMomentum={false}
        dragElastic={0}
        dragSnapToOrigin={!dropInArea}
        initial={{ y: 0 }}
        animate={{ y: -7 }}
        transition={{ y: { duration: 1, repeat: Infinity, repeatType: "reverse" } }}
        onDragEnd={(event, info) => dropHandle(info, event)}
        src="/images/section4/horizon/4.1/rice.png"
        alt=""
        className={`absolute ${
          !dropInArea ? "left-[60%] top-[60%] cursor-grab active:cursor-grabbing" : "lg:left-[72%] lg:top-[48%] left-[69%] top-[46%]"
        } w-[5vw] max-w-[75px] z-20`}
      />

      <AnimatePresence exitBeforeEnter>
        {!state.smoke && (
          <div className="absolute bottom-[40%] left-[39%] translate-x-[-50%] z-20">
            <PulseButton
              title="Click"
              handle={() => {
                play()
                setState({ ...state, smoke: true })
              }}
              dark={true}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {!state.light && (
          <div className="absolute bottom-[40%] left-[55%] translate-x-[-50%]  z-20">
            <PulseButton
              title="Click"
              handle={() => {
                play()
                setState({ ...state, light: true })
              }}
              dark={true}
            />
          </div>
        )}
      </AnimatePresence>

      {state.light && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ opacity: { duration: 4, repeat: Infinity } }}
          src="/images/section4/horizon/4.1/light.webp"
          alt="light-effect"
          className="object-contain object-bottom h-full w-full absolute bottom-0 duration-500"
        />
      )}
      {state.smoke && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/section4/horizon/4.1/smoke.gif"
          alt="smoke-effect"
          className="object-contain object-bottom h-full w-full absolute bottom-0"
        />
      )}
      <AnimatePresence exitBeforeEnter>
        {!dropInArea && (
          <motion.img
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="/images/section4/horizon/4.1/arrow-drag.svg"
            alt=""
            className="absolute top-[2%] left-[61%] w-[10%] h-full object-contain"
          />
        )}
      </AnimatePresence>
      <img src="/images/section4/horizon/4.1/candle.webp" alt="" className="absolute top-0 w-full h-full object-contain" />
      <img src="/images/section4/horizon/4.1/table.webp" alt="" className="w-full h-full object-contain z-10" />
    </div>
  )
}

export default Panel1
