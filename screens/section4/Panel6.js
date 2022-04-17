import { useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import PulseButton from "../../components/PulseButton"

const Panel6 = ({ setTimelinePoint }) => {
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const playHandle = () => {
    videoRef.current.play()
    setIsPlay(true)
  }

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
