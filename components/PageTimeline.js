import { AnimatePresence, motion } from "framer-motion"

import { TimelineContext } from "../pages/_app"
import { useContext } from "react"
import { useRouter } from "next/router"

const PageTimeline = () => {
  const exclude = ["/", "/section5"]
  const router = useRouter()
  const { timelinePoint } = useContext(TimelineContext)
  return (
    <AnimatePresence exitBeforeEnter>
      {!exclude.includes(router.pathname) && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.25 }}
          className={`fixed flex left-8 top-1/2 translate-y-[-50%] z-50`}
        >
          <div>
            <div className="h-full">
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 1 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 2 && "bg-white"}`}></div>
            </div>
            <div className="text-center text-3xl">๑</div>
          </div>
          <div className="mx-3">
            <div className="h-full">
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 3 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 4 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 5 && "bg-white"}`}></div>
            </div>
            <div className="text-center text-3xl">๒</div>
          </div>
          <div>
            <div className="h-full">
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 6 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 7 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 8 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 9 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 10 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 11 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 12 && "bg-white"}`}></div>
              <div className={`w-5 h-5 border border-white duration-200 ${timelinePoint >= 13 && "bg-white"}`}></div>
            </div>
            <div className="text-center text-3xl">๓</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default PageTimeline
