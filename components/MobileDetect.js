import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { isMobile } from "react-device-detect"

const MobileDetect = () => {
  const [visible, setVisible] = useState(null)
  useEffect(() => {
    setVisible(isMobile && window.matchMedia("(orientation: portrait)").matches)

    window.addEventListener(
      "orientationchange",
      (e) => {
        isMobile && !window.matchMedia("(orientation: portrait)").matches ? setVisible(true) : setVisible(false)
      },
      false
    )
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed w-screen h-screen bg-black z-50 flex justify-center items-center bg-[url('/images/rotateBG.webp')] bg-cover "
          key={"Landscape Warning"}
        >
          <h2 className="text-center text-3xl absolute top-[20%] cinzel-font text-light">Rotate Screen to Landscape</h2>
          <div className="">
            <motion.img
              src="/images/iPhone.webp"
              alt=""
              width={180}
              className="w-[50%] mx-auto"
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileDetect
