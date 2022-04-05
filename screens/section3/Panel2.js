import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel2 = ({ setTimelinePoint, setStep }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "175% center",
        end: "+=100%",
        scrub: true,
        onEnter: () => setTimelinePoint(4),
        onLeaveBack: () => setTimelinePoint(3),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-full h-full">
      <img src="/images/section3/horizon-1/2.png" alt="" className="object-contain h-full w-full" ref={itemRef} />
      {/* <button className="border border-white rounded-xl py-1 px-4 text-2xl font-bold absolute top-[20px] right-[30px]" onClick={() => setStep(3)}>
        Next
      </button> */}
    </div>
  )
}

export default Panel2
