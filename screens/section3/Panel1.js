import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Panel1 = ({ setTimelinePoint, setStep }) => {
  gsap.registerPlugin(ScrollTrigger)

  const router = useRouter()
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "50% center",
        end: "+=50%",
        scrub: true,
        onEnter: () => setTimelinePoint(3),
        onLeaveBack: () => setTimelinePoint(2),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-full h-full" ref={itemRef}>
      <img src="/images/section3/horizon-1/1.png" alt="" className="object-contain h-full w-full" />
      <div className="absolute z-10 top-[10%] right-[5%] max-w-[40vw]">
        <h2 className="text-[10vmin] font-bold mb-0 header-font">ตานของให้คนตาย</h2>
        <p className="text-[2.6vmin] leading-tight">
          เป็นการส่งข้าวของเครื่องใช้ รถ เงินทอง เสื้อผ้า หมอนผ้าห่มที่นอน เฮือนน้อย <br /> ไปให้ผู้ตาย โดยจะผูกสายสิญจน์ไว้ทั้งหมด และ
          ไปผูกไว้กับโลงศพ <br />
          หลังจากนั้นก็จะทำพิธีตานของให้ผู้ตายไว้ใช้ในโลกหน้า
        </p>
        {/* <button className="border border-white rounded-xl py-1 px-4 text-2xl font-bold" onClick={() => setStep(2)}>
          Next
        </button> */}
      </div>
    </div>
  )
}

export default Panel1
