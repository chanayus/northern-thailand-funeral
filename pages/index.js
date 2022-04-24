import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import { BgMusicContext } from "./_app"
import Head from "next/head"
import Loader from "../components/Loader"
import styled from "styled-components"
import { useContext } from "react"
import { useRouter } from "next/router"

const Home = ({ data }) => {
  const router = useRouter()
  const [gif, setGif] = useState("")
  const [loading, setLoading] = useState()
  const { playing, play, stop } = useContext(BgMusicContext)
  console.log(data)
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
      document.documentElement.style.overflow = "unset"
      setLoading(false)
    }, 4500)

    setGif("/images/logo.gif")
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.detail} />
        <meta property="og:image" content={data.image} />
      </Head>
      <div className="relative h-[200vh]">
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="55.686" height="20.734" viewBox="0 0 60.686 25.734">
                    <line
                      id="Line_13"
                      data-name="Line 13"
                      x2={27}
                      y2={25}
                      transform="translate(0.34 0.367)"
                      fill="none"
                      stroke="#000"
                      strokeWidth={1}
                    />
                    <line
                      id="Line_15"
                      data-name="Line 15"
                      x2={27}
                      y2={25}
                      transform="translate(7.34 0.367)"
                      fill="none"
                      stroke="#000"
                      strokeWidth={1}
                    />
                    <line
                      id="Line_14"
                      data-name="Line 14"
                      x1={26}
                      y2={25}
                      transform="translate(27.34 0.367)"
                      fill="none"
                      stroke="#000"
                      strokeWidth={1}
                    />
                    <line
                      id="Line_16"
                      data-name="Line 16"
                      x1={26}
                      y2={25}
                      transform="translate(34.34 0.367)"
                      fill="none"
                      stroke="#000"
                      strokeWidth={1}
                    />
                  </svg>
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
                onClick={() => {
                  !playing && play()
                  router.replace("/section2", "/", { shallow: true, scroll: false })
                }}
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
export async function getStaticProps() {
  const res = await fetch(`https://northern-thailand-funeral.vercel.app/api/meta`)
  const data = await res.json()
  console.log(res)
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default Home
