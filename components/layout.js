import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Scroller from "./Scroller"
import dynamic from "next/dynamic"
import gsap from "gsap/dist/gsap"
import { useRouter } from "next/router"

const Dust = dynamic(() => import("./Dust"), { loading: () => <></> })
const MobileDetect = dynamic(() => import("./MobileDetect"), { loading: () => <></> })
const Hud = dynamic(() => import("./Hud"), { loading: () => <></> })

export default function Layout({ children }) {
  gsap.registerPlugin(ScrollTrigger)
  const router = useRouter()
  const pageIncludes = ["/section2", "/section3", "/section4"]
  const wrapperRef = useRef()
  let scrollbar = useRef()

  // useEffect(() => {
  //   const wrapper = wrapperRef.current
  //   scrollbar.current = Scrollbar.init(wrapper, { damping: 0.075, delegateTo: document, alwaysShowTracks: true })

  //   scrollbar.current.setPosition(0, 0)
  //   scrollbar.current.track.xAxis.element.remove()

  //   ScrollTrigger.scrollerProxy(wrapper, {
  //     scrollTop(value) {
  //       if (arguments.length) {
  //         scrollbar.current.scrollTop = value
  //       }
  //       return scrollbar.current.scrollTop
  //     },
  //   })

  //   scrollbar.current.addListener(ScrollTrigger.update)

  //   ScrollTrigger.defaults({ scroller: wrapperRef.current })

  //   return () => {
  //     if (scrollbar.current) {
  //       scrollbar.current.destroy()
  //       scrollbar.current = null
  //     }
  //   }
  // }, [router])
  return (
    <>
      <AnimatePresence exitBeforeEnter>{pageIncludes.includes(router.pathname) && <Hud />}</AnimatePresence>
      <MobileDetect />
      <Scroller>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            onScroll={(e) => console.log(e)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            key={router.pathname}
            className="overflow-x-hidden relative"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Scroller>
      <Dust />
    </>
  )
}
