import { BgMusicContext, IsEndContext } from "../pages/_app"
import { useContext, useEffect, useState } from "react"

import Castle from "./Castle"
import PageTimeline from "./PageTimeline"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const Hud = () => {
  const [visible, setVisible] = useState(false)
  const [scrollEnd, setScrollEnd] = useState(false)
  const { mute, isMute } = useContext(BgMusicContext)
  const { isEnd, setIsEnd } = useContext(IsEndContext)
  const router = useRouter()

  useEffect(() => {
    setVisible(false)
    const eventToggle = () => {
      if (window.scrollY >= window.innerHeight - 150) {
        !visible && setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener("scroll", (e) => eventToggle())

    return () => {
      window.removeEventListener("scroll", (e) => eventToggle())
      setIsEnd(false)
    }
  }, [router])

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={`duration-1000 relative z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <PageTimeline />
      </div>
      <div className={`duration-1000 relative z-40 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div
          className={`fixed  translate-x-[-50%] translate-y-[-50%] z-30  ${
            scrollEnd && !isEnd
              ? `left-1/2 top-1/2 duration-[1500ms]`
              : `lg:left-[95.5%] lg:top-[91%] md:left-[94.5%] md:top-[88%] left-[93%] top-[87%] duration-[1500ms] ${isEnd ? "delay-[250ms]" : ""}`
          }`}
        >
          <Castle setScrollEnd={setScrollEnd} scrollEnd={scrollEnd} />
        </div>
      </div>
      <div className={`duration-1000 relative z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <button onClick={() => mute()} className="fixed top-[2%] right-[1%] z-50">
          <img src={`/icon/${isMute ? "mute" : "sound"}.svg`} alt="" className="w-[4vw] h-[4vw] max-w-14 max-h-14" />
        </button>
      </div>
    </motion.div>
  )
}

export default Hud
