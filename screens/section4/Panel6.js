import { useEffect, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import { Howl } from "howler"
import PulseButton from "../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Panel6 = ({ setTimelinePoint }) => {
  const router = useRouter()
  const wrapRef = useRef()
  const [sound, setSound] = useState(new Howl({ src: "/sound/section4/burn1.mp3", volume: 0.2, loop: false, mute: false }))
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const playHandle = () => {
    sound.play()
    videoRef.current.play()
    setIsPlay(true)
  }

  const stopSound = () => {
    sound.fade(0.2, 0, 750)
    setTimeout(() => sound.stop(), 750)
  }

  useEffect(() => {
    router.events.on("routeChangeStart", stopSound)
    return () => {
      router.events.off("routeChangeStart", stopSound)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "center center",
        end: "+=70%",
        onLeave: () => stopSound(),
      },
      duration: 0.25,
      ease: "none",
    })

    return () => anim.kill()
  }, [])

  const endLoop = () => {
    if (videoRef.current.currentTime > 19) {
      videoRef.current.currentTime = 8
    }
  }

  return (
    <div className="w-full h-screen relative" ref={wrapRef}>
      <video
        src="/video/burn.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        loop
        playsInline={true}
        disablePictureInPicture
        className={`w-full h-full object-cover bottom-0 object-bottom absolute ${isPlay ? "" : "opacity-0"}`}
        ref={videoRef}
        onTimeUpdate={() => endLoop()}
      />
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[64%] left-[12.5%]">
            <PulseButton title="Click" handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
      <img src="/images/section4/4.6/bg.webp" alt="4.6-bg" className="w-full h-full bottom-0 object-cover  object-bottom" />
    </div>
  )
}

export default Panel6
