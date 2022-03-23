import { useEffect, useRef } from "react"

import Image360 from "../components/Image360"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { motion } from "framer-motion"

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const textRef = useRef()
  const boxRef = useRef(null)

  useEffect(() => {
    // window.scrollTo(0, 0)
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
          inertia: false,
          duration: { min: 0.15, max: 0.15 },
        },
        end: "+=1500%",
      },
    })

    gsap.from("#three", {
      scrollTrigger: {
        trigger: "body",
        start: "40% center",
        end: "+=100%",
        toggleActions: "play complete complete complete",
        scrub: true,
      },
      scale: 0.5,
      duration: 0.25,
      ease: "none",
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hEdzv7D4CbQ"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 border border-black flex justify-center items-center threepage">
          <div id="three">
            <Image360 />
          </div>
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
