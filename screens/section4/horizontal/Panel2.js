import { useEffect, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import PulseButton from "../../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel2 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)
  const [cut, setCut] = useState(false)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: "220% center",
        end: "+=100%",
        scrub: true,
        onEnter: () => setTimelinePoint(7),
        onLeaveBack: () => setTimelinePoint(6),
      },
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-screen h-screen relative">
      <div ref={itemRef}>
        <AnimatePresence exitBeforeEnter>
          {!cut && (
            <div className="absolute lg:top-[27%] top-[22%] left-[57%]  z-20">
              <PulseButton title="Cut" handle={() => setCut(true)} dark={false} />
            </div>
          )}
        </AnimatePresence>
        <h2 className="text-[8.25vmin] mb-0 header-font text-white absolute left-[32%] top-[25%] header-bold">ตัดขาดผัว-เมีย</h2>
        <p className="absolute z-10 text-[clamp(9px,2.7vmin,1.5rem)] leading-tight left-[40.5%] top-[40%]">
          นำสะตวง (จะมี ปั้นรูปคน ดอกไม้ ธูป ข้าวสาร) วางไว้หน้าโลงศพ <br />
          จากนั้นนำด้ายสีดำผูกสะตวงโยงมาผูกที่คอ สามี/ภรรยา ของผู้ตาย
          <br />
          อาจารย์จะสวดทำพิธีและตัดด้ายให้ขาด ถือเป็นการตัดขาดจากกัน <br />
          หลังจากนี้ห้ามสามี/ภรรยา ของผู้เสียชีวิตไปเผาศพที่ป่าช้า
        </p>
        <div className="absolute top-1/2 translate-y-[-50%] w-full max-h-[100vh] h-[55vw]">
          <div className="w-[52.75%] h-[3px] absolute -z-10 top-[34.4%] left-[25%] flex">
            <div className={`w-[65%] h-full bg-black rounded duration-1000 origin-left ${cut && "rotate-[10deg] opacity-0"}`}></div>
            <div className={`w-[35%] h-full bg-black rounded duration-1000 origin-right ${cut && "rotate-[-20deg] opacity-0"}`}></div>
          </div>
          <img src="/images/section4/horizon/4.2/content.webp" alt="" className="w-full h-full object-contain absolute" />
        </div>
      </div>
    </div>
  )
}

export default Panel2
