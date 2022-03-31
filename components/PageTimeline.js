import { AnimatePresence, motion } from "framer-motion"
import { BsSuitDiamond, BsSuitDiamondFill } from "react-icons/bs"

import { TimelineContext } from "../pages/_app"
import styled from "styled-components"
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
          className={`fixed flex left-6 top-1/2 translate-y-[-50%] z-50`}
        >
          <div>
            <div className="h-full">
              {timelinePoint >= 1 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 2 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
            </div>
            <div className="text-center text-3xl">๑</div>
          </div>
          <div className="mx-1">
            <div className="h-full">
              {timelinePoint >= 3 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 4 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 5 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
            </div>
            <div className="text-center text-3xl">๒</div>
          </div>
          <div>
            <div className="h-full">
              {timelinePoint >= 6 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 7 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 8 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 9 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 10 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 11 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 12 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
              {timelinePoint >= 13 ? <DotFill size="1.75rem" /> : <DotBlank size="1.75rem" />}
            </div>
            <div className="text-center text-3xl">๓</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const DotFill = styled(BsSuitDiamondFill)`
  margin-bottom: 10px;
`

const DotBlank = styled(BsSuitDiamond)`
  margin-bottom: 10px;
`
export default PageTimeline
