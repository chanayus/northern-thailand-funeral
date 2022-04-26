import { useEffect, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import { Howl } from "howler"
import PulseButton from "../../components/PulseButton"
import { useRouter } from "next/router"

const Panel6 = ({ setTimelinePoint }) => {
  const router = useRouter()
  const [sound, setSound] = useState(new Howl({ src: "/sound/section4/burn1.mp3", volume: 0.2, loop: false, mute: false }))
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const playHandle = () => {
    sound.play()
    videoRef.current.play()
    setIsPlay(true)
  }

  useEffect(() => {
    const stopSound = () =>{
      sound.stop()
    }
    router.events.on('routeChangeStart', stopSound)
    return () => {
      router.events.off('routeChangeStart', stopSound)
    }
  },[])

  const endLoop = () => {
    if (videoRef.current.currentTime > 19) {
      videoRef.current.currentTime = 8
    }
  }

  return (
    <div className="w-full h-screen relative">
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
