import { useEffect, useRef, useState } from "react"

import styled from "styled-components"
import { useRouter } from "next/router"

const Castle = ({ setEnd, end }) => {
  const router = useRouter()
  const iconRef = useRef()
  const pageIncludes = ["/section2", "/section3", "/section4"]

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
        setEnd(true)
        iconRef.current.style.height = "100%"
      } else {
        setEnd(false)
      }
    }

    if (pageIncludes.includes(router.pathname)) {
      window.addEventListener("scroll", wheelHandle)
    }
    return () => {
      window.removeEventListener("scroll", wheelHandle)
    }
  }, [router])

  useEffect(() => {
    if (pageIncludes.includes(router.pathname)) {
      iconRef.current.style.maxHeight = `${setting[router.pathname].maxHeight}%`
      iconRef.current.style.minHeight = `${setting[router.pathname].minHeight}%`
      iconRef.current.style.height = `${setting[router.pathname].minHeight}%`
    }
  }, [router])

  return (
    <Wrapper delay={end ? "1s" : "0s"} className={`${end ? "w-[40vw] h-[40vw]" : "w-[6vw] h-[6vw]"} transform relative`}>
      <Icon
        className={`w-full bg-[url('/icon/castle.svg')] bg-no-repeat absolute bottom-0`}
        size={end ? "100% 100%" : "100px 100px"}
        ref={iconRef}
        duration={end ? "1.5s" : "1s"}
        delay={end ? "4s" : "4s"}
      ></Icon>
    </Wrapper>
  )
}

const Icon = styled.div`
  background-size: ${(props) => props.size};
  background-position: bottom;

  transition: background-size 1s ease 0.25s;
`

const Wrapper = styled.div`
  transition-duration: 1.5s;
  transition-delay: ${props => props.delay};
`

export default Castle
