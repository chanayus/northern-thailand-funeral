import { useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import PulseButton from "../../components/PulseButton"

const Panel8 = ({ setTimelinePoint }) => {
  const videoRef = useRef()
  const [isPlay, setIsPlay] = useState(false)

  const playHandle = () => {
    videoRef.current.play()
    videoRef.current.playHandle = true
    setIsPlay(true)
  }

  return (
    <div className="w-full h-full min-h-screen relative">
      <video
        src="/video/4.8.mp4"
        type="video/mp4"
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInline={true}
        disablePictureInPicture
        className={`w-full h-screen min-h-screen z-10 object-cover object-bottom absolute ${
          isPlay ? "" : "opacity-0"
        } duration-1000`}
        ref={videoRef}
      />
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[89.25%] left-[34.5%] z-10">
            <PulseButton title="Click" dark handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
      <img src="/images/section4/4.8/4.8.webp" alt="4.8-bg" className="w-full h-full object-cover object-bottom  absolute" />
    </div>
  )
}

export default Panel8
