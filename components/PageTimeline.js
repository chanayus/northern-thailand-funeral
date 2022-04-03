import { AnimatePresence, motion } from "framer-motion"

import { TimelineContext } from "../pages/_app"
import TimelinePoint from "./TimelinePoint"
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
          className={`fixed left-6 top-1/2 translate-y-[-50%] z-50`}
        >
          <img src="/images/timeline.svg" alt="" width="100" className="w-[93px] mx-auto" />
          <div className="flex justify-center ml-[0.5px]">
            <div>
              <div className="h-full overflow-hidden">
                <div className="w-[0.25px] top-[-1px] h-3 bg-white mx-auto"></div>
                <TimelinePoint active={timelinePoint >= 1} />
                <TimelinePoint active={timelinePoint >= 2} />
                <div className="w-[0.25px] top-[-1px] h-full bg-white mx-auto"></div>
              </div>
              <div className="relative">
                <TimelinePoint header={true} />
                <div className="text-center text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">๑</div>
              </div>
            </div>

            <div>
              <div className="h-full overflow-hidden">
                <div className="w-[0.25px] top-[-1px] h-3 bg-white mx-auto"></div>
                <TimelinePoint active={timelinePoint >= 3} />
                <TimelinePoint active={timelinePoint >= 4} />
                <TimelinePoint active={timelinePoint >= 5} />
                <div className="w-[0.25px] top-[-1px] h-full bg-white mx-auto"></div>
              </div>
              <div className="relative">
                <TimelinePoint header={true} />
                <div className="text-center text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">๒</div>
              </div>
            </div>
            
            <div>
              <div className="h-full overflow-hidden">
                <div className="w-[0.25px] top-[-1px] h-3 bg-white mx-auto"></div>
                <TimelinePoint active={timelinePoint >= 6} />
                <TimelinePoint active={timelinePoint >= 7} />
                <TimelinePoint active={timelinePoint >= 8} />
                <TimelinePoint active={timelinePoint >= 9} />
                <TimelinePoint active={timelinePoint >= 10} />
                <TimelinePoint active={timelinePoint >= 11} />
                <TimelinePoint active={timelinePoint >= 12} />
                <TimelinePoint active={timelinePoint >= 13} />
                <div className="w-[0.25px] top-[-1px] h-full bg-white mx-auto"></div>
              </div>
              <div className="relative">
                <TimelinePoint header={true} />
                <div className="text-center text-xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">๓</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageTimeline