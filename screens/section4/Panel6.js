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

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <video
        src="/video/burn.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        disablePictureInPicture
        className="object-bottom w-full h-full object-cover absolute"
        ref={videoRef}
        // onLoadedData={() => onLoadVideo()}
      />
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[64%] left-[12.5%]">
            <PulseButton title="Click" handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Panel6
