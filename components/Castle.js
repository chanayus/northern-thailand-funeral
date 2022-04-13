import { useEffect, useRef, useState } from "react"

import styled from "styled-components"
import { useRouter } from "next/router"

const Castle = () => {
  const router = useRouter()
  const iconRef = useRef()
  const pageIncludes = ["/section2", "/section3", "/section4"]

  const setting = {
    "/section2": { maxHeight: 33.33, minHeight: 0, ratio: 3 },
    "/section3": { maxHeight: 66.66, minHeight: 33.33, ratio: 5 },
    "/section4": { maxHeight: 99.99, minHeight: 66.66, ratio: 8.5 },
  }

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const wheelHandle = (e) => {
      const currentScrollPercent = (window.scrollY / scrollHeight) * 100
      const { ratio } = setting[router.pathname]
      if (e.deltaY === 100) {
        iconRef.current.style.height = `${currentScrollPercent / ratio + setting[router.pathname].minHeight}%` ?? "0%"
      } else if (e.deltaY === -100) {
        iconRef.current.style.height = `${currentScrollPercent / ratio + setting[router.pathname].minHeight}%` ?? "0%"
      }
    }

    pageIncludes.includes(router.pathname) && window.addEventListener("wheel", (e) => wheelHandle(e))
    return window.removeEventListener("wheel", (e) => wheelHandle(e))
  }, [router])

  useEffect(() => {
    if (pageIncludes.includes(router.pathname)) {
      iconRef.current.style.maxHeight = `${setting[router.pathname].maxHeight}%`
      iconRef.current.style.minHeight = `${setting[router.pathname].minHeight}%`
      iconRef.current.style.height = `${setting[router.pathname].minHeight}%`
    }
  }, [router])

  return (
    <div className="w-[6vw] h-[6vw] relative " onClick={() => setHeight(height + 1)}>
      <Icon className={`w-full bg-[url('/icon/castle.svg')] bg-no-repeat duration-300 absolute bottom-0`} ref={iconRef}></Icon>
    </div>
  )
}

const Icon = styled.div`
  background-size: 7vw 7vw;
  background-position: bottom;
`

export default Castle
