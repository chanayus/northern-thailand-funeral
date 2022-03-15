import { useLayoutEffect, useRef } from "react"

import Image360 from "../components/Image360"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { motion } from "framer-motion"

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const textRef = useRef()
  const boxRef = useRef(null)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    const sections = gsap.utils.toArray(".panel")
    gsap.to(sections, {
      xPercent: -400,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (5 - 1),
          duration: { min: 0.01, max: 0.01 },
          delay: 0,
        },
        end: "+=1500%",
      },
    })

    return () => {
      const anim = ScrollTrigger.getById("horizontal-section2")
      if (anim) {
        anim.kill()
      }
    }
  }, [])

  const parallax = (e) => {
    const { pageX, pageY } = e
    const x = (window.innerWidth - pageX) / 200
    const y = (window.innerHeight - pageY) / 200
    textRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative" onMouseMove={(e) => parallax(e)}>
        <h1 className="text-6xl" ref={textRef}>
          Section 3
        </h1>
        <motion.div ref={boxRef} className="w-full h-full absolute">
          <motion.div drag onDrag={(e) => console.log(e.x, e.y)} dragConstraints={boxRef} className="w-20 h-20 bg-red-500"></motion.div>
        </motion.div>
      </div>
      <div className="scroll-container max-w-screen h-screen flex bg-blue-500 hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-500 border border-black flex justify-center items-center">
          <h1 className="text-9xl">1</h1>
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center">
          <h1 className="text-9xl">2</h1>
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 border border-black flex justify-center items-center">
          <Image360 />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-800 border border-black flex justify-center items-center">
          <h1 className="text-9xl">4</h1>
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-900 border border-black flex justify-center items-center">
          <h1 className="text-9xl">5</h1>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-6xl text-white">Content 2</h1>
      </div>
    </>
  )
}

export default Section3
