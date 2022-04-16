import { useEffect, useRef } from "react"

import { IsEndContext } from "../pages/_app"
import styled from "styled-components"
import { useContext } from "react"
import { useRouter } from "next/router"

const Castle = ({ setScrollEnd, scrollEnd }) => {
  const router = useRouter()
  const iconRef = useRef()
  const { isEnd } = useContext(IsEndContext)
  const excludePath = ["/", "/section5"]
  const setting = {
    "/section2": { maxHeight: 33.33, minHeight: 0, ratio: 3 },
    "/section3": { maxHeight: 66.66, minHeight: 33.33, ratio: 15 },
    "/section4": { maxHeight: 99.99, minHeight: 66.66, ratio: 9.5 },
  }

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const wheelHandle = (e) => {
      const currentScrollPercent = (window.scrollY / scrollHeight) * 100
      const { ratio } = setting[router.pathname]
      iconRef.current.style.height = `${currentScrollPercent / ratio + setting[router.pathname].minHeight}%` ?? "0%"

      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
      if (router.pathname === "/section4" && bottom) {
        setScrollEnd(true)
        iconRef.current.style.height = "100%"
      } else {
        setScrollEnd(false)
      }
    }
    window.addEventListener("scroll", wheelHandle)
    return () => window.removeEventListener("scroll", wheelHandle)
  }, [router])

  useEffect(() => {
    if (!excludePath.includes(router.pathname)) {
      iconRef.current.style.maxHeight = `${setting[router.pathname].maxHeight}%`
      iconRef.current.style.minHeight = `${setting[router.pathname].minHeight}%`
      iconRef.current.style.height = `${setting[router.pathname].minHeight}%`
    }
  }, [router])

  return (
    <Wrapper
      delay={scrollEnd ? "1s" : "0s"}
      className={`${scrollEnd && !isEnd ? `w-[40vw] h-[40vw]` : "lg:w-[100px] lg:h-[100px] w-[65px] h-[65px]"} transform relative`}
    >
      <div
        className={`w-full bg-[url('/icon/castle.svg')] bg-no-repeat absolute bottom-0 bg-bottom ${
          scrollEnd ? "bg-[length:100%_100%]" : "lg:bg-[length:100px_100px] bg-[length:70px_70px]"
        }`}
        ref={iconRef}
      ></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition-duration: 1.5s;
  transition-delay: ${(props) => props.delay};
`

export default Castle
