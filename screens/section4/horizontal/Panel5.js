import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel5 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "500% center",
        end: "+=50%",
        scrub: true,
        markers: true,
        onEnter: () => setTimelinePoint(10),
        onLeaveBack: () => setTimelinePoint(9),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <h1 className="text-9xl" ref={itemRef}>
      5
    </h1>
  )
}

export default Panel5
