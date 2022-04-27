import { useEffect, useRef, useState } from "react"

import Arrow from "../../../components/Arrow"
import Image360 from "../../../components/Image360"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel3 = ({ setTimelinePoint }) => {
  const itemRef = useRef(null)
  const [currentImg, setCurrentImg] = useState(1)
  const [imgInterval, setImgInterval] = useState(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: "355% center",
        end: "+=50%",
        onEnter: () => setTimelinePoint(8),
        onLeaveBack: () => setTimelinePoint(7),
      },
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  const increaseImgHandle = (status) => {
    const time = 10
    const func = () => setCurrentImg((prev) => (prev + 1 > 360 ? 1 : prev + 1))
    status === "down" && setImgInterval(setInterval(() => func(), time))
    status === "up" && clearInterval(imgInterval)
  }

  const decreaseImgHandle = (status) => {
    const time = 10
    const func = () => setCurrentImg((prev) => (prev - 1 < 1 ? 360 : prev - 1))
    status === "down" && setImgInterval(setInterval(() => func(), time))
    status === "up" && clearInterval(imgInterval)
  }

  return (
    <div className="w-screen h-screen relative p-4 flex flex-col" ref={itemRef}>
      <div className="w-[100%] h-[85%] mx-auto ">
        <div className="z-10 w-full h-full">
          <Image360 currentImg={currentImg} />
        </div>
      </div>
      <div className="w-full flex flex-col h-[10%] justify-center item-center">
        <h1 className="text-center text-[10vmin] leading-none header-font font-bold text-white select-none">พิธีผัดตาสิน</h1>
        <p className="text-center leading-none lg:text-[1.25rem] text-[0.9rem]">เป็นการไหว้เคารพศพ โดยจะเดินวนซ้ายรอบขบวนแห่ศพ จำนวน 3 รอบ <br /> โดยเมื่อผ่านแต่ละมุมของรถก็จะต้องไหว้ 1 ครั้ง รวมทั้งหมด 12 ครั้ง</p>
      </div>

      <button
        className="mx-4 absolute top-1/2 left-[15%] w-[45px] h-fit z-20 flex justify-center items-center"
        onTouchStart={() => decreaseImgHandle("down")}
        onTouchEnd={() => decreaseImgHandle("up")}
        onMouseDown={() => decreaseImgHandle("down")}
        onMouseUp={() => decreaseImgHandle("up")}
        onMouseLeave={() => clearInterval(imgInterval)}
      >
        <Arrow classProps="rotate-180 " />
      </button>
      <button
        className="mx-4 absolute top-1/2 right-[15%] w-[42px] h-fit z-20 flex justify-center items-center"
        onTouchStart={() => increaseImgHandle("down")}
        onTouchEnd={() => increaseImgHandle("up")}
        onMouseDown={() => increaseImgHandle("down")}
        onMouseUp={() => increaseImgHandle("up")}
        onMouseLeave={() => clearInterval(imgInterval)}
      >
        <Arrow classProps="" />
      </button>
    </div>
  )
}

export default Panel3
