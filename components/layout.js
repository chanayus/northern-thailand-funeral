import { AnimatePresence, motion } from "framer-motion"

import PageTimeline from "./PageTimeline"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <div>
      <PageTimeline />
      <AnimatePresence exitBeforeEnter>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} key={router.pathname}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
