import { useEffect, useRef } from "react"

import { motion } from "framer-motion"
import { useRouter } from "next/router"

const Castle = ({ setScrollEnd, scrollEnd, showCastle }) => {
  const router = useRouter()
  const iconRef = useRef()
  const excludePath = ["/", "/section5"]
  const setting = {
    "/section2": { maxHeight: 33.33, minHeight: 0, ratio: 3 },
    "/section3": { maxHeight: 66.66, minHeight: 33.33, ratio: 15 },
    "/section4": { maxHeight: 99.99, minHeight: 66.66, ratio: 9.5 },
  }

  const animVariant = {
    visible: {},
    animate: {
      y: [0, -15, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }
  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const wheelHandle = (e) => {
      const currentScrollPercent = (window.scrollY / scrollHeight) * 100
      const { ratio } = setting[router.pathname]
      iconRef.current.style.height = `${currentScrollPercent / ratio + setting[router.pathname].minHeight}%` ?? "0%"

      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

      if (router.pathname === "/section4" && bottom) {
        setScrollEnd(true)
        iconRef.current.style.height = "100%"
      } else {
        setScrollEnd(false)
      }
    }
    window.addEventListener("scroll", wheelHandle)
    return () => {
      window.removeEventListener("scroll", wheelHandle)
      setScrollEnd(false)
    }
  }, [router])

  useEffect(() => {
    if (!excludePath.includes(router.pathname)) {
      iconRef.current.style.maxHeight = `${setting[router.pathname].maxHeight}%`
      iconRef.current.style.minHeight = `${setting[router.pathname].minHeight}%`
      iconRef.current.style.height = `${setting[router.pathname].minHeight}%`
    }
  }, [router])

  return (
    <div className={`lg:w-[100px] lg:h-[100px] w-[65px] h-[65px] relative drop-shadow-xl`}>
      <motion.div
        animate={scrollEnd && !showCastle ? "animate" : "visible"}
        transition={"transition"}
        variants={animVariant}
        className={`w-full bg-[url('/icon/castle.svg')] bg-no-repeat absolute bottom-0 bg-bottom lg:bg-[length:100px_100px] bg-[length:70px_70px] `}
        ref={iconRef}
        scrollEnd={scrollEnd ? "true" : "false"}
      ></motion.div>
    </div>
  )
}

export default Castle
