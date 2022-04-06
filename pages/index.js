import { useEffect, useState } from "react"

import { motion } from "framer-motion"
import styled from "styled-components"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  const [gif, setGif] = useState("")

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    setGif("/images/logo.gif")
  }, [])
  return (
    <div className="relative h-[200vh]">
      <video width="100%" height="100%" autoPlay muted loop disablePictureInPicture className="object-bottom w-full h-full object-cover">
        <source src="/video/bg.mp4" type="video/mp4"></source>
      </video>

      <div className="w-full absolute top-[40%] text-center flex justify-center flex-col items-center">
        <h2 className="text-2xl text-black font-bold mb-1 cinzel-font">Scroll</h2>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="60.686"
          height="25.734"
          viewBox="0 0 60.686 25.734"
          initial={{ y: 0 }}
          animate={{ y: 15 }}
          transition={{ duration: 1.75, yoyo: Infinity }}
        >
          <line id="Line_13" data-name="Line 13" x2={27} y2={25} transform="translate(0.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
          <line id="Line_15" data-name="Line 15" x2={27} y2={25} transform="translate(7.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
          <line id="Line_14" data-name="Line 14" x1={26} y2={25} transform="translate(27.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
          <line id="Line_16" data-name="Line 16" x1={26} y2={25} transform="translate(34.34 0.367)" fill="none" stroke="#000" strokeWidth={1} />
        </motion.svg>
      </div>
      <img src={gif} alt="" width="320" className="w-[32vw] min-w-[200px] absolute top-[2%] left-1/2 translate-x-[-50%]" />

      <Start
        className="bg-white border-2 border-[#707070] text-black cinzel-font text-2xl w-[140px] h-[50px] rounded-xl font-bold absolute left-1/2 translate-x-[-50%] xl:bottom-[3%] bottom-[5%]"
        onClick={() => router.replace("/section2", "/", { shallow: true, scroll: false })}
      ></Start>
    </div>
  )
}

const Start = styled.button`
  &::before {
    content: "Start";
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
    border: 2px solid #707070;
  }
`

export default Home
