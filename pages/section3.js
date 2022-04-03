import { useEffect, useState } from "react"

import HeaderParallax from "../components/HeaderParallax"
import Panel1 from "../screens/section3/Panel1"
import Panel2 from "../screens/section3/Panel2"
import Panel3 from "../screens/section3/Panel3"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"

const Section3 = () => {
  const [step, setStep] = useState(3)
  gsap.registerPlugin(ScrollTrigger)

  const { setTimelinePoint } = useContext(TimelineContext)

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel")
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: step === 1 ? false : true,
        scrub: 0.5,
        end: "+=1000%",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [step])

  return (
    <>
      <div className="w-full overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section3/header/ก่อนสลาย_"} totalImage={7} parallaxExclude={[1, 7]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex bg-blue-500 hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-red-500 border border-black flex justify-center items-center">
          <Panel1 setTimelinePoint={setTimelinePoint} />
        </div>
        {step >= 2 && (
          <div className="panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center">
            <Panel2 setTimelinePoint={setTimelinePoint} />
          </div>
        )}
        {step >= 3 && (
          <div className="panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center">
            <Panel3 setTimelinePoint={setTimelinePoint} />
          </div>
        )}
      </div>
    </>
  )
}

export default Section3
