import { AnimatePresence, motion } from "framer-motion"

import Dust from "./Dust"
import MobileDetect from "./MobileDetect"
import PageTimeline from "./PageTimeline"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <PageTimeline />
      <MobileDetect />
      <Dust />
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
    </>
  )
}
