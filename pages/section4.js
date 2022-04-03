import { useEffect, useRef } from "react"

import HeaderParallax from "../components/HeaderParallax"
import Panel1 from "../screens/section4/horizontal/Panel1"
import Panel2 from "../screens/section4/horizontal/Panel2"
import Panel3 from "../screens/section4/horizontal/Panel3"
import Panel4 from "../screens/section4/horizontal/Panel4"
import Panel5 from "../screens/section4/horizontal/Panel5"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import gsap from "gsap/dist/gsap"
import { motion } from "framer-motion"
import { useContext } from "react"
import { useRouter } from "next/router"

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const boxRef = useRef(null)
  const router = useRouter()

  const { setTimelinePoint } = useContext(TimelineContext)

  useEffect(() => {
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

  return (
    <>
      <div className="w-full overflow-hidden mx-0 pt-[50.75%] relative">
      <HeaderParallax path={"/images/section4/header/สลาย_"} totalImage={11} parallaxExclude={[11]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex bg-blue-500 hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-500 border border-black flex justify-center items-center">
          <Panel1 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center">
          <Panel2 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 border border-black flex justify-center items-center">
          <Panel3 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-Fscreen flex-shrink-0 bg-red-800 border border-black flex justify-center items-center">
          <Panel4 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-900 border border-black flex justify-center items-center">
          <Panel5 setTimelinePoint={setTimelinePoint} />
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <button
          className="border border-white rounded-xl py-3 text-2xl font-bold w-36"
          onClick={() => router.replace("/section5", "/", { shallow: true, scroll: false })}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Section4
