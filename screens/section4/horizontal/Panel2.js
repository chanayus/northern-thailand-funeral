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
        trigger: "body",
        start: "120% center",
        end: "+=100%",
        scrub: true,
        onEnter: () => setTimelinePoint(7),
        onLeaveBack: () => setTimelinePoint(6),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-screen h-screen relative">
      <div className="w-[52%] h-[3px] absolute -z-10 top-[34.4%] left-[25%] flex">
        <div className={`w-[65%] h-full bg-black rounded duration-1000 origin-left ${cut && "rotate-[10deg] opacity-0"}`}></div>
        <div className={`w-[35%] h-full bg-black rounded duration-1000 origin-right ${cut && "rotate-[-20deg] opacity-0"}`}></div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {!cut && (
          <div className="absolute top-[30%] left-[57%]  z-20">
            <PulseButton title="Cut" handle={() => setCut(true)} dark={false} />
          </div>
        )}
      </AnimatePresence>
      <h2 className="text-[8vmin] mb-0 header-font text-black absolute left-[38%] top-[25%]">ตัดขาดผัว-เมีย</h2>
      <p className="absolute text-[2.6vmin] leading-tight left-[42.5%] top-[40%]">
        นำสะตวง (จะมี ปั้นรูปคน ดอกไม้ ธูป ข้าวสาร) วางไว้หน้าโลงศพ <br />
        จากนั้นนำด้ายสีดำผูกสะตวงโยงมาผูกที่คอ สามี/ภรรยา ของผู้ตาย
        <br />
        อาจารย์จะสวดทำพิธีและตัดด้ายให้ขาด ถือเป็นการตัดขาดจากกัน <br />
        หลังจากนี้ห้ามสามี/ภรรยา ของผู้เสียชีวิตไปเผาศพที่ป่าช้า
      </p>
      <img src="/images/section4/horizon/4.2/content.webp" alt="" className="w-full h-full object-contain" />
    </div>
  )
}

export default Panel2
