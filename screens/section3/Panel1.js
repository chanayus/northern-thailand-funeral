import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Panel1 = ({ setTimelinePoint }) => {
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
        markers: true,
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
    <button
      className="border border-white rounded-xl py-3 text-2xl font-bold w-36"
      onClick={() => router.replace("/section4", "/", { shallow: true, scroll: false })}
      ref={itemRef}
    >
      Next
    </button>
  )
}

export default Panel1
