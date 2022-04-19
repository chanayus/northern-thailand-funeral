import Image from "next/image"
import { useState } from "react"

const Image360 = ({ amount = 360, path = "" }) => {
  const [swipeValue, setSwipeValue] = useState(0)
  const [imageValue, setImageValue] = useState(1)
  const [isClick, setIsClick] = useState(false)

  const swipeHandle = (e) => {
    const { clientX } = e.targetTouches[0]
    if (clientX > swipeValue) {
      setImageValue(imageValue + 1 > amount ? 1 : imageValue + 1)
    } else {
      setImageValue(imageValue - 1 < 1 ? amount : imageValue - 1)
    }
    setSwipeValue(clientX)
  }

  const grabHandle = (e) => {
    const { clientX } = e
    if (isClick) {
      if (clientX < swipeValue) {
        setImageValue(imageValue + 1 > amount ? 1 : imageValue + 1)
      } else {
        setImageValue(imageValue - 1 < 1 ? amount : imageValue - 1)
      }
    }
    setSwipeValue(clientX)
  }
  return (
    <div
      className="z-10 w-full h-full relative cursor-grab active:cursor-grabbing"
      onTouchMove={(e) => swipeHandle(e)}
      onMouseMove={(e) => grabHandle(e)}
      onMouseDown={() => setIsClick(true)}
      onMouseUp={() => setIsClick(false)}
    >
      {[...Array(amount)].map((value, index) => (
        <img
          key={index}
          src={`/images/section4/360/(${index + 1}).webp`}
          className={`w-full h-full ${imageValue === index + 1 ? "" : "hidden"} z-10 object-contain absolute top-0 left-0`}
          draggable={false}
          alt=""
        />
      ))}
    </div>
  )
}

export default Image360
