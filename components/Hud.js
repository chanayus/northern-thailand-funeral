import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"

import { BgMusicContext } from "../pages/_app"
import Castle from "./Castle"
import PageTimeline from "./PageTimeline"
import { useRouter } from "next/router"

const Hud = () => {
  const exclude = ["/", "/section5"]
  const [visible, setVisible] = useState(false)
  const { mute, isMute } = useContext(BgMusicContext)
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
    }
  }, [router])

  return (
    <div className={`z-50 relative duration-300 ${!exclude.includes(router.pathname) && visible ? "opacity-100" : "opacity-0 pointer-events-none"} `}>
      <PageTimeline />
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="fixed bottom-[1vw] right-[1vw] z-50"
      >
        <Castle />
      </motion.div>
      <motion.button
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        onClick={() => mute()}
        className="fixed top-[2%] right-[1%] z-50"
      >
        <img src={`/icon/${isMute ? "mute" : "sound"}.svg`} alt="" className="w-[4vw] h-[4vw] max-w-14 max-h-14" />
      </motion.button>
    </div>
  )
}

export default Hud
