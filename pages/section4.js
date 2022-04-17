import { useEffect, useRef } from "react"

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
import { useContext } from "react"

const HeaderParallax = dynamic(() => import("../components/HeaderParallax"))

const Section4 = () => {
  gsap.registerPlugin(ScrollTrigger)

  const { setTimelinePoint } = useContext(TimelineContext)
  const panel9Ref = useRef(null)

  // Ref for Panel P
  const plateRef = useRef(null)
  const canvasRef = useRef(null)
  const textRef = useRef(null)

  const getMaxWidth = () => {
    const sections = gsap.utils.toArray(".panel")
    let totalWidth = 0
    sections.forEach((section) => {
      totalWidth += section.offsetWidth
    })
    return totalWidth
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0.1)
    const sections = gsap.utils.toArray(".panel")

    getMaxWidth()
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth)

    gsap.to(sections, {
      x: () => `-${getMaxWidth() - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section4",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        end: "+=1500%",
        invalidateOnRefresh: true,
        pinType: "fixed",
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        ease: "none",
        trigger: panel9Ref.current,
        start: "center center",
        end: `+=270%`,
        scrub: 1.3,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pin: true,
        pinType: "fixed",
      },
    })
    tl.fromTo(plateRef.current, { x: "-100%" }, { x: 0, duration: 5 })
    tl.fromTo(canvasRef.current, { x: "100%" }, { x: 0, duration: 5 })
    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 5 })

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

      <div className="scroll-container max-w-screen min-h-screen flex hide-scrollbar overscroll-none" id="#pin-section4">
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
      {/* Panel 9 */}
      <div
        className="bg-[url('/images/section4/4.9/bg.webp')] bg-no-repeat relative bg-center max-w-screen min-h-screen hide-scrollbar overscroll-none panel9"
        ref={panel9Ref}
      >
        <div ref={textRef} className="absolute lg:left-[55%] left-[58%] 2xl:top-[16%] lg:top-[21%] top-[28%] text-black z-20">
          <h1 className="text-black header-font text-[10vmin] lg:mb-3">ตานขันข้าว</h1>
          <p className="text-black text-[clamp(9px,2.2vmin,1.5rem)] ">
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
          className="absolute 2xl:w-full w-[90%] h-full object-contain object-left top-0 left-0 z-10"
        />

        <div className="w-full h-full max-w-[50vw]">
          <img
            ref={canvasRef}
            src="/images/section4/4.9/canvas.webp"
            alt=""
            className="absolute w-full h-full object-contain object-right  top-0 left-0"
          />
        </div>
        {/* <Panel9 setTimelinePoint={setTimelinePoint} wrapRef={panel9Ref} /> */}
      </div>
      <Panel10 setTimelinePoint={setTimelinePoint} />
    </>
  )
}

export default Section4
