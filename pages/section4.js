import Panel1 from "../screens/section4/horizontal/Panel1"
import Panel2 from "../screens/section4/horizontal/Panel2"
import Panel3 from "../screens/section4/horizontal/Panel3"
import Panel4 from "../screens/section4/horizontal/Panel4"
import Panel5 from "../screens/section4/horizontal/Panel5"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"
import { useEffect } from "react"
import { useRouter } from "next/router"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"))

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger)
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
        invalidateOnRefresh: true,
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

  const panelStyle = "panel w-screen h-screen flex-shrink-0 bg-no-repeat bg-cover flex justify-center items-center m-0 p-0 "

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative ">
        <HeaderParallax path={"/images/section4/header/สลาย_"} totalImage={11} section="4" parallaxExclude={[11]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex hide-scrollbar overscroll-none">
        <div className={`${panelStyle} bg-[url('/images/section4/horizon/bg-1.webp')]`}>
          <Panel1 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className={`${panelStyle} bg-[url('/images/section4/horizon/bg-2.webp')]`}>
          <Panel2 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className={`${panelStyle} bg-[url('/images/section4/horizon/bg-3.webp')]`}>
          <Panel3 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className={`${panelStyle} bg-[url('/images/section4/horizon/bg-4.webp')]`}>
          <Panel4 setTimelinePoint={setTimelinePoint} />
        </div>
        <div className={`${panelStyle} bg-[url('/images/section4/horizon/bg-5.webp')]`}>
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
