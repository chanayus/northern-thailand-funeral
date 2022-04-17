import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel9 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const wrapRef = useRef(null)
  const plateRef = useRef(null)
  const canvasRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        ease: "none",
        trigger: wrapRef.current,
        start: "-25% center",
        end: `+=72.5%`,
        scrub: 1.25,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })
    tl.fromTo(plateRef.current, { x: "-100%" }, { x: 0, duration: 5 })
    tl.fromTo(canvasRef.current, { x: "100%" }, { x: 0, duration: 5 })
    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1 })
    return () => {
      tl.kill()
    }
  }, [wrapRef.current, canvasRef.current, textRef.current])
  return (
    <div className=" relative w-full h-screen  bg-[url('/images/section4/4.9/bg.webp')]" ref={wrapRef}>
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

      <div className="w-full h-full">
        <img
          ref={canvasRef}
          src="/images/section4/4.9/canvas.webp"
          alt=""
          className="absolute w-full h-full object-contain object-right  top-0 left-0"
        />
      </div>
    </div>
  )
}

export default Panel9
