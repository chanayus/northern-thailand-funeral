import { useEffect, useRef, useState } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { motion } from "framer-motion"
import styled from "styled-components"
import { useRouter } from "next/router"

const Panel3 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const [count, setCount] = useState(0)
  const router = useRouter()
  const itemRef = useRef(null)
  const dot1 = useRef(null)
  const dot2 = useRef(null)
  const dot3 = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "250% center",
        end: "+=100%",
        scrub: true,
        onEnter: () => setTimelinePoint(5),
        onLeaveBack: () => setTimelinePoint(4),
      },
      // opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  const countHandle = (element) => {
    setCount(count + 1)
    element.style.opacity = 0
    element.style.pointerEvent = "none"
  }

  const dotClass = "w-5 h-5 rounded-full absolute z-20 cursor-pointer drop-shadow-[0_0_5px_rgba(255,255,255,1)] duration-1000"
  return (
    <div className="w-full h-full relative">
      <Dot ref={dot1} className={`top-[42%] left-[20%] ${dotClass}`} onClick={() => countHandle(dot1.current)}></Dot>
      <Dot ref={dot2} className={`top-[25%] left-[33%] ${dotClass}`} onClick={() => countHandle(dot2.current)}></Dot>
      <Dot ref={dot3} className={`top-[32%] left-[72%] ${dotClass}`} onClick={() => countHandle(dot3.current)}></Dot>
      <img src="/images/section3/3.3/border.webp" alt="" className="absolute w-full h-full z-10" />
      <img src="/images/section3/3.3/bg.webp" alt="" className="absolute w-full h-full" />
      <img
        src="/images/section3/3.3/wall.webp"
        alt=""
        className={`absolute w-full h-full duration-[1500ms] ${count >= 3 ? "" : "translate-y-[50%]"} `}
      />
      <button
        className="flex items-center z-30 absolute right-[10%] bottom-[5%] w-[15vw] min-w-[120px] max-w-[200px]"
        id="next-button"
        onClick={() => router.replace("/section4", "/", { shallow: true, scroll: false })}
      >
        <img src="/images/section3/next.svg" alt="next" className="w-full h-full" />
      </button>
    </div>
  )
}

const Dot = styled.button`
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
`

export default Panel3
