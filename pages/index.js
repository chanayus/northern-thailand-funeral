import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { BgMusicContext } from "./_app"
import Loader from "../components/Loader"
import PulseButton from "../components/PulseButton"
import ScrollIcon from "../components/ScrollIcon"
import styled from "styled-components"
import { useContext } from "react"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  const [gif, setGif] = useState("")
  const [loading, setLoading] = useState()
  const [showIntro, setShowIntro] = useState(true)
  const { playing, play, stop } = useContext(BgMusicContext)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    document.documentElement.style.overflow = "hidden"
    playing && stop()
    setLoading(true)
    return () => {
      setLoading(null)
    }
  }, [])

  const onLoadVideo = () => {
    setTimeout(() => {
      setLoading(false)
      document.documentElement.style.overflow = "unset"
    }, 4500)

    setGif("/images/logo.gif")
  }

  const handleIntro = () => {
    !playing && play()
    setShowIntro(false)
  }
  return (
    <>
      <div className={`relative ${showIntro ? "min-h-[100vh]" : "h-[200vh]"} `}>
        <AnimatePresence exitBeforeEnter>
          {loading ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed w-screen bg-black h-screen flex top-0 justify-center items-center z-[70]"
              key={"loader"}
            >
              <Loader />
              <video
                src="/video/bg.mp4"
                width="0%"
                height="0%"
                type={"video/mp4"}
                autoPlay
                muted
                disablePictureInPicture
                className="hidden"
                onLoadedData={() => onLoadVideo()}
              />
            </motion.div>
          ) : showIntro && !loading ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-screen h-screen relative bg-[url('/images/index/bg.webp')] bg-no-repeat bg-cover"
            >
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                src="/images/index/castle.webp"
                alt=""
                className="lg:min-w-[960px] lg:w-[85%] w-[70%] mx-auto"
              />
              <div className="absolute lg:top-[75%] top-[70%] left-1/2 translate-x-[-50%] flex flex-col items-center">
                <h1 className="text-black text-xl cinzel-font mb-[15px] whitespace-nowrap">Best Experienced with sound</h1>
                <PulseButton handle={() => handleIntro()} title="Enter" dark>
                  Enter
                </PulseButton>
              </div>
            </motion.div>
          ) : (
            <motion.div key={"content"} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <video
                src="/video/bg.mp4"
                width="100%"
                height="100%"
                type={"video/mp4"}
                autoPlay
                muted
                loop
                playsInline={true}
                disablePictureInPicture
                className="object-bottom w-full h-full object-cover absolute"
                onLoadedData={() => onLoadVideo()}
              />
              <div className="relative h-screen w-full flex justify-center items-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 15 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  className="w-full absolute bottom-[5%] text-center flex justify-center flex-col items-center"
                >
                  <h2 className="lg:text-2xl text-base text-black font-bold mb-1 cinzel-font">SCROLL</h2>
                  <ScrollIcon />
                </motion.div>

                <motion.img
                  src={gif}
                  alt=""
                  width="320"
                  className="w-[40vw] lg:w-[52vw] max-w-[780px] min-w-[300px] mx-auto"
                  initial={{ y: -7 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.75, repeat: Infinity, repeatType: "reverse", delay: 3 }}
                />
              </div>

              <Start
                className="bg-white border border-[#707070] text-black cinzel-font text-2xl w-[clamp(140px,16vw,180px)] h-[clamp(40px,10vh,50px)] rounded-xl font-bold absolute left-1/2 translate-x-[-50%] xl:bottom-[3%] bottom-[5%]"
                onClick={() => router.replace("/section2", "/", { shallow: true, scroll: false })}
              ></Start>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

const Start = styled.button`
  &::before {
    content: "START";
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -5px;
    right: -5px;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 0.75rem;
    z-index: -99999 !important;
    border: 1px solid #707070;
  }
`

export default Home
