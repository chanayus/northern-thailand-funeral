import { useEffect, useRef } from "react"

import Image360 from "../../../components/Image360"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel3 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: "520% center",
        end: "+=100%",
        scrub: true,
        onEnter: () => setTimelinePoint(8),
        onLeaveBack: () => setTimelinePoint(7),
      },
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-screen h-screen relative" ref={itemRef}>
      <div className="w-[70%] h-[90%] min-h-[90%] mx-auto flex flex-col mt-5 ">
        <div className="z-10 w-full h-full">
          <Image360 />
        </div>
        <h1 className="text-center mt-[1vh] text-[10vmin] header-font font-bold text-white">พิธีผัดตาสิน</h1>
      </div>
    </div>
  )
}

export default Panel3
