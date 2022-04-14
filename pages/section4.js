import Panel1 from "../screens/section4/horizontal/Panel1"
import Panel10 from "../screens/section4/Panel10"
import Panel2 from "../screens/section4/horizontal/Panel2"
import Panel3 from "../screens/section4/horizontal/Panel3"
import Panel4 from "../screens/section4/horizontal/Panel4"
import Panel5 from "../screens/section4/horizontal/Panel5"
import Panel6 from "../screens/section4/Panel6"
import Panel7 from "../screens/section4/Panel7"
import Panel8 from "../screens/section4/Panel8"
import Panel9 from "../screens/section4/Panel9"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"
import { useEffect } from "react"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"))

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger)
  const { setTimelinePoint } = useContext(TimelineContext)

  const getMaxWidth = () => {
    const sections = gsap.utils.toArray(".panel")
    let totalWidth = 0
    sections.forEach((section) => {
      totalWidth += section.offsetWidth
    })
    return totalWidth
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const sections = gsap.utils.toArray(".panel")

    getMaxWidth()
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth)

    gsap.to(sections, {
      x: () => `-${getMaxWidth() - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        end: "+=1500%",
        invalidateOnRefresh: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const panelStyle = "panel h-screen flex-shrink-0 bg-no-repeat bg-cover flex bg-right justify-center items-center m-0 p-0 "

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative ">
        <HeaderParallax path={"/images/section4/header/สลาย_"} totalImage={11} section="4" parallaxExclude={[11]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex hide-scrollbar overscroll-none">
        <div className={`${panelStyle} min-w-[500vw] bg-[url('/images/section4/horizon/bg.webp')] bg-center`}>
          <Panel1 setTimelinePoint={setTimelinePoint} />
          <Panel2 setTimelinePoint={setTimelinePoint} />
          <Panel3 setTimelinePoint={setTimelinePoint} />
          <Panel4 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className={`${panelStyle} w-screen bg-black`}>
          <Panel5 setTimelinePoint={setTimelinePoint} />
        </div>
      </div>
      <Panel6 setTimelinePoint={setTimelinePoint} />
      <Panel7 setTimelinePoint={setTimelinePoint} />
      <Panel8 setTimelinePoint={setTimelinePoint} />
      <Panel9 setTimelinePoint={setTimelinePoint} />
      <Panel10 setTimelinePoint={setTimelinePoint} />
    </>
  )
}

export default Section4
