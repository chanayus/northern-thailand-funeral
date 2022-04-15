import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"

import { BgMusicContext } from "../pages/_app"
import Castle from "./Castle"
import PageTimeline from "./PageTimeline"
import { useRouter } from "next/router"

const Hud = () => {
  const exclude = ["/", "/section5"]
  const [visible, setVisible] = useState(false)
  const [end, setEnd] = useState(false)
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
    <>
      <div
        className={`duration-1000 relative z-50 ${!exclude.includes(router.pathname) && visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <PageTimeline />
      </div>
      <div
        className={`duration-1000 relative z-40 ${!exclude.includes(router.pathname) && visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className={`fixed  translate-x-[-50%] translate-y-[-50%]  ${
            end ? "left-1/2 top-1/2  duration-[1500ms]" : "md:left-[95.5%] md:top-[91%] left-[93%] top-[87%] duration-[1500ms]"
          } z-30 `}
        >
          <Castle setEnd={setEnd} end={end} />
        </motion.div>
      </div>
      <div
        className={`duration-1000 relative z-50 ${!exclude.includes(router.pathname) && visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
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
    </>
  )
}

export default Hud
