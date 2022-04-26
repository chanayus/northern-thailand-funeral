import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import PulseButton from "../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useAudio } from "../../hooks/useAudio"

const Panel2 = ({ setTimelinePoint, panelStep }) => {
  const [playing, play] = useAudio("/sound/section3/trigger.mp3", false)

  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)
  const [state, setState] = useState({
    smoke: false,
    light: false,
  })

  useEffect(() => {
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "250% center",
        onEnter: () => setTimelinePoint(4),
        onLeaveBack: () => setTimelinePoint(3),
      },
      ease: "none",
    })

    anim.fromTo(itemRef.current, { opacity: 0 }, { opacity: 1, duration: 0.75 })
    anim.fromTo(".text-panel2", { opacity: 0 }, { opacity: 1, duration: 2.5, delay: 0.5 })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-full h-full" ref={itemRef}>
      <div ref={itemRef}>
        <img src="/images/section3/horizon-1/2.webp" alt="" className="object-contain object-bottom h-full w-full absolute bottom-0" />
        <img src="/images/section3/horizon-1/2-layer2.webp" alt="" className="object-contain object-bottom h-full w-full absolute z-10 bottom-0" />
        {state.light && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ opacity: { duration: 4, repeat: Infinity } }}
            src="/images/section3/horizon-1/light.webp"
            alt="light-effect"
            className="object-contain object-bottom h-full w-full absolute bottom-0 duration-500"
          />
        )}
        {state.smoke && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="/images/section3/horizon-1/smoke.gif"
            alt="smoke-effect"
            className="object-contain object-bottom h-full w-full absolute bottom-0"
          />
        )}
      </div>

      <div
        className={`w-[40%] lg:h-[1.5px] h-[1.25px] bg-white absolute top-[60%] left-0 -z-10 duration-500 delay-1000 ${panelStep < 1 && "opacity-0"}`}
      ></div>

      <AnimatePresence exitBeforeEnter>
        {!state.smoke && (
          <div className="absolute bottom-[6%] left-[39%] translate-x-[-50%] z-20">
            <PulseButton
              title="Click"
              handle={() => {
                play()
                setState({ ...state, smoke: true })
              }}
            />
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {!state.light && (
          <div className="absolute bottom-[6%] left-[60%] translate-x-[-50%]  z-20">
            <PulseButton
              title="Click"
              handle={() => {
                play()
                setState({ ...state, light: true })
              }}
            />
          </div>
        )}
      </AnimatePresence>
      <div className="absolute z-10 top-[10%] xl:right-[12%] right-[6%] max-w-[40vw] text-panel2">
        <h2 className="text-[8.5vmin] font-bold mb-0 header-font leading-tight">ปราสาทศพ</h2>
        <p className="text-[clamp(9px,2.7vmin,1.4rem)] leading-tight whitespace-nowrap">
          หลังจากตานของให้ผู้ตายแล้ว ก็จะนำศพออกจากบ้านขึ้นบนขบวนแห่ <br />
          และตกแต่งด้วยปราสาทศพ คนเรานั้นเมื่อตายไปแล้ว ญาติพี่น้องก็หวังว่า <br />
          ผู้ตายจะได้ไปสูสวรรค์จึงทําปราสาทขึ้นมาครอบตกแต่งโลงศพ <br />
          มีความเชื่อว่าจะผู้ตายจะได้ไปอาศัยอยู่ในปราสาทบนสรวงสวรรค์
        </p>
      </div>
    </div>
  )
}

export default Panel2
