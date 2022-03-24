import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel2 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "175% center",
        end: "+=100%",
        scrub: true,
        markers: true,
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
    <>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/hEdzv7D4CbQ?rel=0"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ref={itemRef}
      />
    </>
  )
}

export default Panel2
