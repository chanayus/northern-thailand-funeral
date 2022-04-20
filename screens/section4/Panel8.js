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
        className={`w-full h-screen min-h-screen z-20 object-cover object-bottom absolute ${isPlay ? "" : "opacity-0"} duration-1000`}
        ref={videoRef}
      />
      <AnimatePresence>
        {!isPlay && (
          <div className="absolute top-[89.25%] left-[34.5%] z-20">
            <PulseButton title="Click" dark handle={() => playHandle()} />
          </div>
        )}
      </AnimatePresence>
      <div className={`absolute z-20 top-[40%] left-[62.5%] duration-[1500ms] ${isPlay ? "" : "opacity-0"}`}>
        <h1 className="text-black header-font text-[10vmin] leading-none">การก่อไฟ ตั้งน้ำ</h1>
        <p className="text-black text-[clamp(9px,2.35vmin,1.5rem)]">
          ก่อไฟเพื่อให้แสงสว่างกับวิญญาณผู้ตาย และ ตั้งน้ำไว้ให้ <br />
          วิญญาณผู้ตายนำไปใช้ในโลกหน้า โดยจะต้องก่อไฟ และ <br />
          ตั้งน้ำที่หน้าบ้านของผู้ตายเป็นเวลา 3 คืน นับจากวันเผา
        </p>
      </div>
      <img src="/images/section4/4.8/4.8.webp" alt="4.8-bg" className={`w-full h-full object-cover object-bottom z-10 duration-[1500ms] absolute ${isPlay ? "opacity-0" : ""}`} />
    </div>
  )
}

export default Panel8
