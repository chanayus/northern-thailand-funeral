import { useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import PulseButton from "../../components/PulseButton"

const Panel8 = ({ setTimelinePoint }) => {
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const playHandle = () => {
    videoRef.current.play()
    setIsPlay(true)
  }

  return (
    <div className="w-full min-h-screen relative">
      <video
        src="/video/4.8.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        loop
        disablePictureInPicture
        className={`w-full h-full object-cover object-bottom absolute ${isPlay ? "" : "opacity-0"} duration-1000`}
        ref={videoRef}
      />
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[90%] left-[34.5%]">
            <PulseButton title="Click" dark handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
      <img src="/images/section4/4.8/4.8.webp" alt="4.8-bg" />
    </div>
  )
}

export default Panel8
