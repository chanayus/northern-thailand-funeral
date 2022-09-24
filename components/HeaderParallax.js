import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import Loader from "./Loader"
import styled from "styled-components"
import { useRouter } from "next/router"

const HeaderParallax = ({ totalImage = 0, parallaxExclude, path, section = "", loader = true }) => {
  const [imgLoaded, setImgLoaded] = useState(0)
  const itemsRef = useRef([])
  const router = useRouter()

  itemsRef.current = []

  const imageIndex = new Array(totalImage).fill("").map((_, i) => i + 1)

  const parallax = (e) => {
    const { pageX, screenY } = e
    const x = (window.innerWidth - pageX) / 50
    const y = (window.innerHeight - screenY) / 50
    itemsRef.current.map((ele, index) => {
      if (!parallaxExclude.includes(index + 1)) {
        ele.style.transition = "0.175s"
        ele.style.transform = `translateX(${x / (index + 1)}px) translateY(${y / (index + 1)}px)`
      }
    })
  }

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  useEffect(() => {
    if (section !== "") {
      document.documentElement.style.overflow = imgLoaded === totalImage || router.asPath !== "/" ? "unset" : "hidden"
    }
  }, [imgLoaded])

  return (
    <div className="w-full h-full duration-1000" onMouseMove={(e) => parallax(e)}>
      <AnimatePresence exitBeforeEnter>
        {imgLoaded < totalImage && router.asPath === "/" && loader && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed w-screen bg-black h-screen flex top-0 justify-center items-center z-50"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      {(imgLoaded === totalImage || router.asPath !== "/") && section !== 4 && (
        <Img
          src={`${path}0.gif`}
          ref={addToRefs}
          className={`w-full h-full object-cover will-change-transform`}
          zIndex={imageIndex.length + 1}
          draggable={false}
          width={"100%"}
          height={"100%"}
          alt="img-header"
        />
      )}
      {imageIndex.map((value, index) => (
        <Img
          src={`${path}${index}.${index === 0 ? "gif" : "webp"}`}
          ref={addToRefs}
          className={`w-full h-full object-cover ${index === 0 && "hidden"} will-change-transform duration-[0.175s]`}
          key={index}
          zIndex={imageIndex.length - value}
          draggable={false}
          width={"100%"}
          height={"100%"}
          alt="img-header"
          onLoad={() => setImgLoaded(imgLoaded + 1)}
        />
      ))}
    </div>
  )
}

const Img = styled.img`
  user-select: none;
  position: absolute;
  top: 0;
  object-fit: fill;
  z-index: ${(props) => props.zIndex};
  @media (max-width: 1536px) {
    object-fit: fill;
  }
`

export default HeaderParallax
