import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel7 = ({ setTimelinePoint }) => {
  const textRef = useRef()
  const wrapRef = useRef()
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "10% center",
        end: "+=70%",
        onEnter: () => setTimelinePoint(11),
        onLeaveBack: () => setTimelinePoint(10),
      },
      duration: 0.25,
      ease: "none",
    })
    anim.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })
    return () => anim.kill()
  }, [])
  return (
    <div className="w-full min-h-screen h-full relative" ref={wrapRef}>
      <div className="absolute z-10 top-[28%] left-[33%]" ref={textRef}>
        <h2 className="text-[8.5vmin] absolute top-[-50%] left-[-20%] font-bold mb-0 mr-[5vw] whitespace-nowrap header-font leading-[1.15]">พิธีทักสัปเหร่อ</h2>
        <p className="text-[clamp(9px,2.3vmin,1.4rem)] leading-tight whitespace-nowrap">
          อาจารย์ : อ้าว ไปไหนมาหล่ะ <br />
          สัปเหร่อ : ไปเผาศพมาที่ป่าช้า ร้อน ไหม้ไปหมด อย่าให้มีซ้ำอีกเลย <br />
          อาจารย์ : อย่าไปให้มีอีกเลย แล้วเอาอะไรมาขาย <br />
          สัปเหร่อ : เอาพลั่ว เอาเสียมมาขาย
          <br />
          อาจารย์ : เท่าไหร่หล่ะ
          <br />
          สัปเหร่อ : หมื่นนึง <br />
          อาจารย์จะเตรียมหมาก พลู เหล้า 1 ขวด ให้สัปเหร่อ <br /> ถือเป็นการซื้อของคืนมา หลังจากนั้นก็ให้สัปเหร่อเข้าบ้านได้
        </p>
      </div>
      <video
        src="/video/4.7.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        playsInline={true}
        autoPlay
        loop
        disablePictureInPicture
        className="w-full h-full object-cover object-top absolute"
      />
    </div>
  )
}

export default Panel7
