import { useEffect, useState } from "react"

import { BgMusicContext } from "./_app"
import { motion } from "framer-motion"
import styled from "styled-components"
import { useContext } from "react"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  const [gif, setGif] = useState("")
  const { playing, play, stop } = useContext(BgMusicContext)

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    setGif("/images/logo.gif")
    playing && stop()
  }, [])
  return (
    <div className="relative h-[200vh]">
      <video
        src="/video/bg.mp4"
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="object-bottom w-full h-full object-cover absolute"
      ></video>

      <div className="relative h-screen w-full flex justify-center items-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 15 }}
          transition={{ duration: 1.5, yoyo: Infinity }}
          className="w-full absolute bottom-[5%] text-center flex justify-center flex-col items-center"
        >
          <h2 className="text-2xl text-black font-bold mb-1 cinzel-font">SCROLL</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="60.686" height="25.734" viewBox="0 0 60.686 25.734">
            <line id="Line_13" data-name="Line 13" x2={27} y2={25} transform="translate(0.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
            <line id="Line_15" data-name="Line 15" x2={27} y2={25} transform="translate(7.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
            <line id="Line_14" data-name="Line 14" x1={26} y2={25} transform="translate(27.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
            <line id="Line_16" data-name="Line 16" x1={26} y2={25} transform="translate(34.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
          </svg>
        </motion.div>
        <motion.img
          src={gif}
          alt=""
          width="320"
          className="w-[55vw] max-w-[780px] mx-auto"
          initial={{ y: -7 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.75, yoyo: Infinity, delay: 3 }}
        />
      </div>

      <Start
        className="bg-white border border-[#707070] text-black cinzel-font text-2xl w-[180px] h-[50px] rounded-xl font-bold absolute left-1/2 translate-x-[-50%] xl:bottom-[3%] bottom-[5%]"
        onClick={() => {
          !playing && play()
          router.replace("/section2", "/", { shallow: true, scroll: false })
        }}
      ></Start>
    </div>
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
