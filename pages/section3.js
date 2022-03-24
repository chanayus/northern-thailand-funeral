import { useEffect, useRef } from "react"

import Panel1 from "../screens/section3/Panel1"
import Panel2 from "../screens/section3/Panel2"
import Panel3 from "../screens/section3/Panel3"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import gsap from "gsap/dist/gsap"
import { motion } from "framer-motion"
import { useContext } from "react"

const Section3 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const boxRef = useRef(null)

  const { setTimelinePoint } = useContext(TimelineContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    const sections = gsap.utils.toArray(".panel")
    gsap.to(sections, {
      xPercent: -200,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        end: "+=1000%",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center relative">
        <h1 className="text-6xl">Section 3</h1>
        <motion.div ref={boxRef} className="w-full h-full absolute">
          <motion.div drag onDrag={(e) => console.log(e.x, e.y)} dragConstraints={boxRef} className="w-20 h-20 bg-red-500"></motion.div>
        </motion.div>
      </div>
      <div className="scroll-container max-w-screen h-screen flex bg-blue-500 hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-500 border border-black flex justify-center items-center">
          <Panel1 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center">
          <Panel2 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-500 border border-black flex justify-center items-center">
          <Panel3 setTimelinePoint={setTimelinePoint} />
        </div>
      </div>
    </>
  )
}

export default Section3
