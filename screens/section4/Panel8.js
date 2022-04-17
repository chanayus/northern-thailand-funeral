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
    <div className="w-full min-h-screen relative">
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        playsInLine="true"
        disablePictureInPicture
        className={`w-full h-full object-cover object-bottom absolute ${isPlay ? "" : "opacity-0"} duration-1000`}
        ref={videoRef}
      >
        <source src="/video/4.8.mp4" type="video/mp4"></source>
      </video>
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[87%] left-[34.5%]">
            <PulseButton title="Click" dark handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
      <img src="/images/section4/4.8/4.8.webp" alt="4.8-bg" className="" />
    </div>
  )
}

export default Panel8
