import { useEffect, useState } from "react"

import Panel1 from "../screens/section3/Panel1"
import Panel2 from "../screens/section3/Panel2"
import Panel3 from "../screens/section3/Panel3"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"), { loading: () => <></> })

const Section3 = () => {
  const [panelStep, setPanelStep] = useState(0)
  gsap.registerPlugin(ScrollTrigger)

  const { setTimelinePoint } = useContext(TimelineContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    const sections = gsap.utils.toArray(".panel")
    const x = -100 * (sections.length - 1)

    const anim = gsap.to(sections, {
      xPercent: x,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section3",
        trigger: ".scroll-container",
        pin: "#pin-section3",
        scrub: 0.5,
        invalidateOnRefresh: true,
        end: "+=1000%",
        anticipatePin: 1,
        pinType: "fixed"
      },
    })
    return () => {
      anim.scrollTrigger.kill()
    }
  }, [])

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section3/header/ก่อนสลาย_"} totalImage={7} section="3" parallaxExclude={[3]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex hide-scrollbar overscroll-none"  id="pin-section3">
        <div className="panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-1.webp')] bg-no-repeat bg-cover relative">
          <Panel1 setTimelinePoint={setTimelinePoint} setPanelStep={setPanelStep} panelStep={panelStep} />
        </div>

        <div className={`panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-2.webp')] bg-no-repeat bg-cover relative`}>
          <Panel2 setTimelinePoint={setTimelinePoint} panelStep={panelStep} />
        </div>

        <div className={`panel w-screen h-screen flex-shrink-0`}>
          <Panel3 setTimelinePoint={setTimelinePoint} />
        </div>
      </div>
    </>
  )
}

export default Section3
