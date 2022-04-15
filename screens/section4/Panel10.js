import { AnimatePresence, motion } from "framer-motion"
import { useContext, useState } from "react"

import HeaderParallax from "../../components/HeaderParallax"
import { IsEndContext } from "../../pages/_app"
import styled from "styled-components"
import { useRouter } from "next/router"

const Panel10 = ({ setTimelinePoint }) => {
  const router = useRouter()
  const [showBg, setShowBg] = useState(false)
  const { setIsEnd } = useContext(IsEndContext)
  return (
    <div className="w-full min-h-screen relative bg-[url('/images/section4/4.10/bg.webp')]">
      <AnimatePresence>
        {!showBg && (
          <Button
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-transparent border border-[#000] text-black header-font text-3xl header-bold w-[180px] h-[50px] rounded-xl font-bold absolute left-1/2 translate-x-[-50%] bottom-[13%] z-[60]"
            onClick={() => {
              setShowBg(true)
              setIsEnd(true)
            }}
            title="ไปสู่สุคติ"
            bg="transparent"
          ></Button>
        )}
      </AnimatePresence>

      <div className={`w-full h-screen overflow-hidden mx-0 pt-[50.75%] duration-1000 ${showBg ? "opacity-100" : "opacity-0"} relative z-40 `}>
        <HeaderParallax path={"/images/section4/4.10/ปราสาทบนสวรรค์_"} section="" totalImage={10} parallaxExclude={[]} />
        <Button
          className="bg-[#FFFDF5] border border-[#000] text-black header-font text-3xl header-bold max-w-[180px] min-w-[140px] w-[20vw] h-[50px] rounded-xl font-bold absolute right-[5%] bottom-[7%] z-50"
          onClick={() => router.replace("/section5", "/", { shallow: true, scroll: false })}
          title="ที่ระลึกงานศพ"
          bg="#FFFDF5"
        ></Button>
      </div>
    </div>
  )
}

const Button = styled(motion.button)`
  &::before {
    content: "${(props) => props.title}";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 100%;
    height: 100%;
    background: ${(props) => props.bg};
    border-radius: 0.75rem;
    z-index: -999 !important;
    border: 1px solid #000;
  }
`

export default Panel10