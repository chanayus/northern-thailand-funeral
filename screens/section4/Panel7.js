import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { Howl } from "howler"
import PulseButton from "../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel7 = ({ setTimelinePoint }) => {
  const textRef = useRef()
  const wrapRef = useRef()
  const [sound, setSound] = useState([])
  const [isPlay, setIsPlay] = useState(false)

  const [converStep, setConverStep] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "10% center",
        end: "+=70%",
        onEnter: () => setTimelinePoint(11),
        onLeaveBack: () => setTimelinePoint(10),
      },
      duration: 0.25,
      ease: "none",
    })
    anim.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })
    return () => anim.kill()
  }, [])

  useEffect(() => {
    console.log(converStep)
    const arr = []
    Array(7)
      .fill(null)
      .map((u, i) => {
        arr.push(
          new Howl({
            src: `/sound/conver/${i + 1}.mp3`,
            volume: 0.15,
            loop: false,
            mute: false,
            onend: () => {
              setConverStep(i + 1)
            },
          })
        )
      })
    setSound(arr)
  }, [])

  useEffect(() => {
    if (converStep > 0 && converStep <= 6) {
      sound[converStep].play()
    }
  }, [converStep])

  const textStyle = "text-[clamp(9px,2.9vmin,1.75rem)] leading-tight whitespace-nowrap"
  return (
    <div className="w-full min-h-screen h-full relative" ref={wrapRef}>
      <div className="flex  absolute top-[15%] left-[30%] ">
        <h2 className="text-[8.5vmin] font-bold mb-0 z-10 whitespace-nowrap header-font leading-[1.15]">พิธีทักสัปเหร่อ</h2>
        <AnimatePresence exitBeforeEnter>
          {!isPlay && (
            <div className="z-10 ml-[3vw]">
              <PulseButton
                title={"Click"}
                icon="ear"
                handle={() => {
                  setIsPlay(true)
                  !isPlay && sound[0].play()
                }}
              >
                Play
              </PulseButton>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute z-10 top-[28%] left-[33%]" ref={textRef}>
        <AnimatePresence exitBeforeEnter>
          {isPlay && converStep >= 0 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-1"
            >
              อาจารย์ : อ้าว ไปไหนมาหล่ะ
            </motion.p>
          )}

          {converStep >= 1 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-2"
            >
              สัปเหร่อ : ไปเผาศพมาที่ป่าช้า ร้อน ไหม้ไปหมด อย่าให้มีซ้ำอีกเลย
            </motion.p>
          )}

          {converStep >= 2 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-3"
            >
              อาจารย์ : อย่าไปให้มีอีกเลย แล้วเอาอะไรมาขาย
            </motion.p>
          )}

          {converStep >= 3 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-4"
            >
              สัปเหร่อ : เอาพลั่ว เอาเสียมมาขาย
            </motion.p>
          )}

          {converStep >= 4 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-5"
            >
              อาจารย์ : เท่าไหร่หล่ะ
            </motion.p>
          )}

          {converStep >= 5 && (
            <motion.p
              exit={{ opacity: 0, y: 40 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${textStyle}`}
              key="text-6"
            >
              สัปเหร่อ : หมื่นนึง
            </motion.p>
          )}
        </AnimatePresence>
        {converStep >= 7 && (
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className={`${textStyle} mt-3`}>
            อาจารย์จะเตรียมหมาก พลู เหล้า 1 ขวด ให้สัปเหร่อ <br /> ถือเป็นการซื้อของคืนมา หลังจากนั้นก็ให้สัปเหร่อเข้าบ้านได้
          </motion.p>
        )}
      </div>

      <video
        src="/video/4.7.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        playsInline={true}
        autoPlay
        loop
        disablePictureInPicture
        className="w-full h-full object-cover object-top absolute"
      />
    </div>
  )
}

export default Panel7
