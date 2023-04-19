import { AnimatePresence, motion } from "framer-motion"
import { BgMusicContext, IsEndContext } from "../pages/_app"
import { useContext, useEffect, useState } from "react"

import Castle from "./Castle"
import PageTimeline from "./PageTimeline"
import PulseButton from "./PulseButton"
import { useRouter } from "next/router"

const Hud = () => {
  const [visible, setVisible] = useState(false)
  const [scrollEnd, setScrollEnd] = useState(false)
  const { mute, isMute } = useContext(BgMusicContext)
  const { setIsEnd, showCastle, setShowCastle } = useContext(IsEndContext)
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
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2 }  }}>
      <div className={`duration-1000 relative z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <PageTimeline />
      </div>
      <div className={`duration-1000 relative z-40 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div
          onClick={() => scrollEnd && setShowCastle(true)}
          className={`${
            showCastle && scrollEnd ? "opacity-0" : "cursor-pointer"
          } fixed translate-x-[-50%] translate-y-[-50%] z-30 lg:left-[95.5%] lg:top-[91%] md:left-[94.5%] md:top-[88%] left-[93%] top-[87%] duration-[1500ms] `}
        >
          <AnimatePresence exitBeforeEnter>
            {scrollEnd && (
              <div className="absolute left-[-35%] top-[-35%]">
                <PulseButton title={"Click"} dark />
              </div>
            )}
          </AnimatePresence>

          <Castle setScrollEnd={setScrollEnd} scrollEnd={scrollEnd} showCastle={showCastle} />
        </div>
      </div>
      <div className={`duration-1000 relative z-50 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <button onClick={() => mute()} className="fixed top-[2%] right-[1%] z-50">
          <img src={`/icon/${isMute ? "mute" : "sound"}.svg`} alt="" className="w-[3.5vw] h-[3.5vw] max-w-[3rem] max-h-[3rem]" />
        </button>
      </div>
    </motion.div>
  )
}

export default Hud
