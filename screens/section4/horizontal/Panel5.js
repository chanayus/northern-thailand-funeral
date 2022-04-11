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
        onEnter: () => setTimelinePoint(10),
        onLeaveBack: () => setTimelinePoint(9),
      },
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-screen h-screen relative" ref={itemRef}>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/hEdzv7D4CbQ?rel=0"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default Panel5
