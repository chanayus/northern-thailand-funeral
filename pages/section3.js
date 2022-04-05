import { useEffect, useState } from "react"

import HeaderParallax from "../components/HeaderParallax"
import Panel1 from "../screens/section3/Panel1"
import Panel2 from "../screens/section3/Panel2"
import Panel3 from "../screens/section3/Panel3"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { TimelineContext } from "./_app"
import gsap from "gsap/dist/gsap"
import { useContext } from "react"

const Section3 = () => {
  const [step, setStep] = useState(3)
  gsap.registerPlugin(ScrollTrigger)

  const { setTimelinePoint } = useContext(TimelineContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    const sections = gsap.utils.toArray(".panel")
    const x = -100 * (step - 1)

    const anim = gsap.to(sections, {
      xPercent: x,
      ease: "none",
      scrollTrigger: {
        id: "horizontal-section2",
        trigger: ".scroll-container",
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        end: "+=1000%",
      },
    })
    return () => {
      anim.scrollTrigger.kill()
    }
  }, [step])

  return (
    <>
      <div className="w-full h-screen overflow-hidden mx-0 pt-[50.75%] relative">
        <HeaderParallax path={"/images/section3/header/ก่อนสลาย_"} totalImage={7} parallaxExclude={[1, 7]} />
      </div>
      <div className="scroll-container max-w-screen h-screen flex hide-scrollbar overscroll-none">
        <div className="panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-1.jpg')] bg-no-repeat bg-cover relative">
          <Panel1 setTimelinePoint={setTimelinePoint} setStep={setStep} />
        </div>

        {step >= 2 && (
          <div
            className={`panel w-screen h-screen flex-shrink-0 bg-[url('/images/section3/horizon-1/bg-2.jpg')] bg-no-repeat bg-cover relative`}
            id="panel2"
          >
            <Panel2 setTimelinePoint={setTimelinePoint} setStep={setStep} />
          </div>
        )}

        {step >= 3 && (
          <div className={`panel w-screen h-screen flex-shrink-0 bg-red-600 border border-black flex justify-center items-center`} id="panel3">
            <Panel3 setTimelinePoint={setTimelinePoint} />
          </div>
        )}
      </div>
    </>
  )
}

export default Section3
