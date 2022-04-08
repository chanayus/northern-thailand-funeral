import Panel1 from "../screens/section3/Panel1"
import Panel2 from "../screens/section3/Panel2"
import Panel3 from "../screens/section3/Panel3"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"
import { useEffect } from "react"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"), { loading: () => <></> })

const Section3 = () => {
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
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        end: "+=1000%",
        anticipatePin: 1,
        pinSpacing: "margin"
      },
    })
    return () => {
      anim.scrollTrigger.kill()
    }
  }, [])

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section3/header/ก่อนสลาย_"} totalImage={7} section="3" parallaxExclude={[2, 7]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-1.jpg')] bg-no-repeat bg-cover relative">
          <Panel1 setTimelinePoint={setTimelinePoint} />
        </div>

        <div className={`panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-2.jpg')] bg-no-repeat bg-cover relative`}>
          <Panel2 setTimelinePoint={setTimelinePoint} />
        </div>

        <div className={`panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center`}>
          <Panel3 setTimelinePoint={setTimelinePoint} />
        </div>
      </div>
    </>
  )
}

export default Section3
