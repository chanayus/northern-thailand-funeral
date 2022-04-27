import { useContext, useRef, useState } from "react"

import Panel1 from "../screens/section4/horizontal/Panel1"
import Panel10 from "../screens/section4/Panel10"
import Panel2 from "../screens/section4/horizontal/Panel2"
import Panel3 from "../screens/section4/horizontal/Panel3"
import Panel4 from "../screens/section4/horizontal/Panel4"
import Panel5 from "../screens/section4/horizontal/Panel5"
import Panel6 from "../screens/section4/Panel6"
import Panel7 from "../screens/section4/Panel7"
import Panel8 from "../screens/section4/Panel8"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import useIsomorphicEffect from "../hooks/useIsomorphic"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"))

const Section4 = () => {
  const [scrollTween, setScrollTween] = useState()

  const { setTimelinePoint } = useContext(TimelineContext)
  const panel9Ref = useRef(null)

  // Ref for Panel 9
  const plateRef = useRef(null)
  const canvasRef = useRef(null)
  const textRef = useRef(null)

  useIsomorphicEffect(() => {
    window.scrollTo(0, 0)
    gsap.registerPlugin(ScrollTrigger)
    const sections = gsap.utils.toArray(".panel")
    const horizonScroll = gsap.to(sections, {
      xPercent: () => -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        end: () => `+=${sections[0].offsetWidth+200}`,
        invalidateOnRefresh: true,
      },
    })

    const tl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        trigger: panel9Ref.current,
        start: "center center",
        end: `+=270%`,
        scrub: 1.3,
        anticipatePin: 1,
        pin: true,
        pinType: "fixed",
        onEnter: () => setTimelinePoint(13),
        onLeaveBack: () => setTimelinePoint(12),
      },
    })

    tl.fromTo(canvasRef.current, { x: "100%" }, { x: 0, duration: 5 })
    tl.fromTo(plateRef.current, { x: "-120%" }, { x: 0, duration: 5 })
    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 5 })

    setScrollTween(horizonScroll)
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const panelStyle = "panel h-screen flex-shrink-0 bg-no-repeat flex m-0 p-0 "

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative ">
        <HeaderParallax path={"/images/section4/header/สลาย_"} totalImage={11} section="4" parallaxExclude={[11]} />
      </div>

      <div className="scroll-container max-w-screen min-h-screen flex hide-scrollbar overscroll-none" id="#pin-section4">
        <div className={`${panelStyle} min-w-[500vw] w-screen bg-[url('/images/section4/horizon/bg.webp')] bg-left bg-[length:500vw_100%]`}>
          <div className="basis-[100vw] h-full ">
            <Panel1 setTimelinePoint={setTimelinePoint} />
          </div>
          <div className="basis-[100vw] h-full">
            <Panel2 setTimelinePoint={setTimelinePoint} />
          </div>
          <div className="basis-[100vw] h-full">
            <Panel3 setTimelinePoint={setTimelinePoint} />
          </div>
          <div className="basis-[200vw] h-full">
            <Panel4 setTimelinePoint={setTimelinePoint} scrollTween={scrollTween} />
          </div>
          <div className="basis-[100vw] h-full">
            <Panel5 setTimelinePoint={setTimelinePoint} scrollTween={scrollTween} />
          </div>
        </div>
      </div>

      <Panel6 setTimelinePoint={setTimelinePoint} />
      <Panel7 setTimelinePoint={setTimelinePoint} />
      <Panel8 setTimelinePoint={setTimelinePoint} />
      {/* Panel 9 */}
      <div
        className="bg-[url('/images/section4/4.9/bg.webp')] bg-cover will-change-transform bg-no-repeat relative bg-center max-w-screen min-h-screen hide-scrollbar overscroll-none panel9"
        ref={panel9Ref}
      >
        <div ref={textRef} className="absolute 2xl:left-[58%] left-[53%] 2xl:top-[16%] lg:top-[21%] top-[28%] text-black z-20">
          <h1 className="text-black header-font text-[10vmin] lg:mb-3">ตานขันข้าว</h1>
          <p className="text-black text-[clamp(10px,2.4vmin,1.75rem)] ">
            เป็นการจัดอาหารที่ผู้ตายชอบ นำมาถวายกับพระสงฆ์ <br />
            ในเช้าวันรุ่งขึ้นหลังจากวันเผา เพื่อเป็นการอุทิศส่วนบุญ <br />
            ส่วนกุศลให้กับวิญญานของผู้ตาย โดยผู้ที่จะมาตานขันข้าว <br />
            จะต้องเป็นลูก ๆ หลาน ๆ ญาติของผู้ตายเท่านั้น ห้ามไม่ให้ <br />
            สามี หรือ ภรรยาของผู้ตายทำ เพราะถือว่าบุญจะส่งไปไม่ถึง <br />
            และจะต้องทำต่อเนื่องไปอีก 2 วัน
          </p>
        </div>
        <img
          ref={plateRef}
          src="/images/section4/4.9/plate.webp"
          alt=""
          className="absolute 2xl:w-[95%] w-[80%] h-full object-contain object-left top-0 left-0 z-10 will-change-transform"
        />

        <div className="w-full h-full max-w-[50vw]">
          <img
            ref={canvasRef}
            src="/images/section4/4.9/canvas.webp"
            alt=""
            className="absolute w-full h-full object-contain object-right top-0 left-0 will-change-transform"
          />
        </div>
      </div>
      <Panel10 setTimelinePoint={setTimelinePoint} />
    </>
  )
}

export default Section4
