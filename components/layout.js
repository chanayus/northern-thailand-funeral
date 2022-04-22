import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import dynamic from "next/dynamic"
import { useRouter } from "next/router"

const Dust = dynamic(() => import("./Dust"), { loading: () => <></> })
const MobileDetect = dynamic(() => import("./MobileDetect"), { loading: () => <></> })
const Hud = dynamic(() => import("./Hud"), { loading: () => <></> })

export default function Layout({ children }) {
  const router = useRouter()
  const pageIncludes = ["/section2", "/section3", "/section4"]
  const [previousRoute, setPreviousRoute] = useState("")

  useEffect(() => {
    previousRoute === "" && setPreviousRoute(router.pathname)
    if (router.pathname === "/" && previousRoute === "/section5") {
      router.reload()
    }
    setPreviousRoute(router.pathname)
    return () => {}
  }, [router.pathname])
  return (
    <>
      <AnimatePresence exitBeforeEnter>{pageIncludes.includes(router.pathname) && <Hud />}</AnimatePresence>
      <AnimatePresence exitBeforeEnter>{router.pathname !== "/section5" && <MobileDetect />}</AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <motion.div
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
      <Dust />
    </>
  )
}
