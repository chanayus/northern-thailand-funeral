import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel4 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "350% center",
        end: "+=50%",
        scrub: true,
        onEnter: () => setTimelinePoint(9),
        onLeaveBack: () => setTimelinePoint(8),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-[200vw] h-screen relative">
      <h1 className="text-center mt-5 text-[12vmin] header-font text-black absolute top-[10px] left-[15px] leading-[0.75]">
        ขบวน <br />
        แห่ศพ
      </h1>
      <img src="/images/section4/horizon/4.4/procession.png" alt="" className="w-full h-full absolute top-0 object-contain" />
    </div>
  )
}

export default Panel4
