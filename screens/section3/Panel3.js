import { AnimatePresence, motion } from "framer-motion"
import styled, { keyframes } from "styled-components"
import { useEffect, useRef, useState } from "react"

import PulseButton from "../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Panel3 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const [count, setCount] = useState(0)
  const [dropping, setDropping] = useState(false)
  const [dropped, setDropped] = useState(false)
  const router = useRouter()
  const itemRef = useRef(null)
  const dot1 = useRef(null)
  const dot2 = useRef(null)
  const dot3 = useRef(null)
  const water1 = useRef(null)
  const water2 = useRef(null)
  const water3 = useRef(null)

  useEffect(() => {
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "510% center",
        end: "+=10%",
        ease: "none",
        onEnter: () => setTimelinePoint(5),
        onLeaveBack: () => setTimelinePoint(4),
      },
    })
    anim.fromTo(".text-content", { opacity: 0 }, { opacity: 1, duration: 4 })
    return () => {
      anim.kill()
      setDropping(false)
      setDropped(false)
    }
  }, [])

  const dropVariant = {
    animate: {
      y: [0, -190, 0],
      opacity: 1,
      rotate: [0, -60, -45],
      transition: {
        duration: 3,
      },
    },
  }

  const countHandle = (element, water) => {
    setCount(count + 1)
    element.style.opacity = 0
    element.style.pointerEvent = "none"
    water.style.opacity = 1
    setTimeout(() => (water.style.opacity = 0), 500)
  }

  const droppedHandle = () => {
    if (dropping && dropped !== true) {
      setDropped(true)
    }
  }

  const dotClass = "w-5 h-5 z-40 relative rounded-full cursor-pointer drop-shadow-[0_0_5px_rgba(255,255,255,1)] duration-1000"
  return (
    <div className="w-full h-full relative overflow-hidden" ref={itemRef.current}>
      <div className="absolute duration-1000 top-[42%] left-[20%]">
        <Dot delay={0} ref={dot1} className={`${dotClass}`} onClick={() => countHandle(dot1.current, water1.current)}></Dot>
        <img
          ref={water1}
          src="/images/section3/3.3/water.gif"
          alt=""
          className="z-30 top-[-5px] left-[-100%] absolute min-w-[100px] opacity-0 duration-500"
        />
      </div>
      <div className="absolute duration-1000 top-[25%] left-[33%]">
        <Dot delay={0.5} ref={dot2} className={`${dotClass}`} onClick={() => countHandle(dot2.current, water2.current)}></Dot>
        <img
          ref={water2}
          src="/images/section3/3.3/water.gif"
          alt=""
          className="z-30 top-[-5px] left-[-100%] absolute min-w-[100px] opacity-0 duration-500"
        />
      </div>
      <div className="absolute duration-1000 top-[32%] left-[72%]">
        <Dot delay={0.25} ref={dot3} className={`${dotClass}`} onClick={() => countHandle(dot3.current, water3.current)}></Dot>
        <img
          ref={water3}
          src="/images/section3/3.3/water.gif"
          alt=""
          className="z-30 top-[-5px] left-[-100%] absolute min-w-[100px] opacity-0 duration-500"
        />
      </div>

      <AnimatePresence>
        {count >= 3 && !dropped ? (
          <motion.img
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={!dropping ? { opacity: 1 } : "animate"}
            onAnimationComplete={() => droppedHandle()}
            variants={dropVariant}
            src="/images/section3/3.3/pot.webp"
            alt=""
            key={"pot"}
            className="absolute w-[8vw] max-w-[120px] bottom-[3.5vh] left-[69.5%] z-30 bg-contain"
          />
        ) : (
          dropped && (
            <motion.img
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src="/images/section3/3.3/pot-broke.webp"
              alt=""
              key={"pot-broke"}
              className="absolute w-full h-full z-30"
            />
          )
        )}
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {!dropping && count >= 3 && (
          <div className="absolute w-[8vw] max-w-[120px] bottom-[9vh] left-[70.5%] z-30 bg-contain cursor-pointer">
            <PulseButton title="Click" handle={() => setDropping(true)} />
          </div>
        )}
      </AnimatePresence>

      <img src="/images/section3/3.3/border.webp" alt="" className="absolute w-full h-full z-20" />
      <img src="/images/section3/3.3/bg.webp" alt="" className="absolute w-full h-full" />
      <img
        src="/images/section3/3.3/wall.webp"
        alt=""
        className={`absolute w-full h-full z-10 duration-[1500ms] ${count >= 3 ? "" : "translate-y-[50%]"} `}
      />
      <div className="absolute z-30 top-[42%] 2xl:right-[11%] lg:right-[7%] md:right-[5%] right-[11%] max-w-[40vw] text-content">
        <h2 className="text-[8.5vmin] font-bold mb-0 ml-[5vw] header-font leading-[1.15]">พิธีสังคหะ</h2>
        <p className="text-[clamp(9px,2.3vmin,1.3rem)] leading-tight whitespace-nowrap">
          หลังจากที่นำศพออกจากบ้าน ให้นำน้ำส้มป่อยใว่ไว้ในหม้อดิน <br />
          ใช้ใบหนาดจุ่มน้ำส้มป่อยแล้วพรมให้ทั่วบ้าน เป็นการไล่วิญญาณ <br />
          ให้ออกจากบ้าน จากนั้นเมื่อพรมน้ำส้มป่อยจนถึงหน้าบ้าน <br />
          ให้โยนหม้อดินลงพื้นให้แตก เพื่อป้องกันไม่ให้วิญญาณกลับมาเข้าบ้านอีก
        </p>
      </div>
      {dropped && (
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center z-30 absolute right-[10%] bottom-[5%] w-[clamp(135px,16vw,160px)] h-[clamp(35px,10vh,55px)] bg-white border border-[#000] rounded-xl"
          onClick={() => router.replace("/section4", "/", { shallow: true, scroll: false })}
        >
          <img src="/images/section3/next.svg" alt="next" className="w-full h-[90%] invert" />
        </Button>
      )}
    </div>
  )
}

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
`

const Dot = styled.button`
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  animation: ${scale} 2s linear infinite ${(props) => props.delay}s;
`

const Button = styled(motion.button)`
  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #fff;
    border-radius: 0.75rem;
    z-index: -99999 !important;
    border: 1px solid #000;
  }
`

export default Panel3
