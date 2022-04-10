import { useEffect, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import PulseButton from "../../components/PulseButton"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"
import styled from "styled-components"

const Panel1 = ({ setTimelinePoint, panelStep, setPanelStep }) => {
  gsap.registerPlugin(ScrollTrigger)

  const [step, setStep] = useState(0)
  const itemRef = useRef(null)

  const lineStyle = "duration-500 -z-10 translate-x-[-50%] absolute lg:h-[1.5px] h-[1.25px]"

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "50% center",
        end: "+=50%",
        scrub: true,
        onEnter: () => setTimelinePoint(3),
        onLeaveBack: () => setTimelinePoint(2),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-full h-full " ref={itemRef}>
      <img src="/images/section3/horizon-1/1.png" alt="" className="object-contain h-full w-full" />

      <Line
        width={step < 1 ? "0%" : "100%"}
        direction={"right"}
        className={`${lineStyle} w-[25vw] max-w-[300px] top-[43.5%] left-[61%] rotate-[10.5deg]`}
      ></Line>
      <Line width={step < 2 ? "0%" : "100%"} direction={"right"} className={`${lineStyle} w-[35vw] top-[43%] left-[35%] -rotate-[6deg]`}></Line>
      <Line width={step < 3 ? "0%" : "100%"} direction={"left"} className={`${lineStyle} w-[18vw] top-[62.5%] left-[22.5%] rotate-[63deg]`}></Line>
      <Line width={step < 4 ? "0%" : "100%"} direction={"left"} className={`${lineStyle} w-[45vw] top-[65.5%] left-[52.5%] -rotate-[18deg]`}></Line>

      <AnimatePresence exitBeforeEnter>
        {step === 0 && (
          <div className="absolute top-[33%] left-[64%]" key="step-0">
            <PulseButton title="Click" handle={() => setStep(1)} />
          </div>
        )}

        {step === 1 && (
          <div className="absolute top-[14%] left-[24%]" key="step-1">
            <PulseButton title="Click" handle={() => setStep(2)} />
          </div>
        )}

        {step === 2 && (
          <div className="absolute top-[65%] left-[12%]" key="step-2">
            <PulseButton title="Click" handle={() => setStep(3)} />
          </div>
        )}

        {step === 3 && (
          <div className="absolute top-[80%] left-[55%]" key="step-3">
            <PulseButton
              title="Click"
              handle={() => {
                setPanelStep(1)
                setStep(4)
              }}
            />
          </div>
        )}
      </AnimatePresence>

      <Line
        width={panelStep < 1 ? "0%" : "100%"}
        direction={"left"}
        delay={"1s"}
        className={`w-[50vw] lg:h-[1.5px] h-[1.25px] absolute top-[60%] left-[70%] -z-10 duration-500`}
      ></Line>

      <div className="absolute z-10 top-[10%] right-[5%] max-w-[40vw] leading-tight">
        <h2 className="text-[10vmin] font-bold mb-0 header-font">ตานของให้คนตาย</h2>
        <p className="text-[2.6vmin] leading-tight">
          เป็นการส่งข้าวของเครื่องใช้ รถ เงินทอง เสื้อผ้า หมอนผ้าห่มที่นอน เฮือนน้อย <br /> ไปให้ผู้ตาย โดยจะผูกสายสิญจน์ไว้ทั้งหมด และ
          ไปผูกไว้กับโลงศพ <br />
          หลังจากนั้นก็จะทำพิธีตานของให้ผู้ตายไว้ใช้ในโลกหน้า
        </p>
      </div>
    </div>
  )
}

const Line = styled.div`
  &::before {
    content: "";
    position: absolute;
    width: ${(props) => props.width};
    height: 100%;
    background: #fff;
    right: ${(props) => props.direction === "right" && 0};
    left: ${(props) => props.direction === "left" && 0};
    transition: 1s;
    transition-delay: ${(props) => props.delay};
  }
`
export default Panel1
