import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import SmoothScrollbar from "smooth-scrollbar"
import gsap from "gsap"
import { useRouter } from "next/router"

export default function Layout({ children, ...rest }) {
  const router = useRouter()
  let $content = useRef()
  let scrollbar = useRef()

  useEffect(() => {
    console.log("coso")
    gsap.registerPlugin(ScrollTrigger)

    const el = $content.current

    scrollbar.current = SmoothScrollbar.init(el, {
      // renderByPixels: false,
      damping: 0.02,
      delegateTo: document,
    })

    scrollbar.current.track.xAxis.element.remove()

    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.current.scrollTop = value
        }
        return scrollbar.current.scrollTop
      },
      scrollLeft(value) {
        if (arguments.length) {
          bodyScrollBar.scrollLeft = value // setter
        }
        return bodyScrollBar.scrollLeft // getter
      },
    })

    scrollbar.current.addListener(ScrollTrigger.update)

    ScrollTrigger.defaults({ scroller: el })

    return () => {
      if (scrollbar.current) {
        setTimeout(() => scrollbar.current.setPosition(0, 0), 750)
        scrollbar.current.destroy()
        scrollbar.current = null
      }
    }
  }, [router])

  return (
    <div data-scrollbar ref={$content} className="h-screen overflow-auto">
      <div>{children}</div>
    </div>
  )
}
