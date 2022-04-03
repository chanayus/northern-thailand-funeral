import { useEffect, useRef } from "react"

import styled from "styled-components"

const HeaderParallax = ({ totalImage, parallaxExclude, path }) => {
  const itemsRef = useRef([])
  itemsRef.current = []

  const imageIndex = new Array(totalImage).fill("").map((_, i) => i + 1)

  const parallax = (e) => {
    const { pageX, pageY } = e
    const x = (window.innerWidth - pageX) / 50
    const y = (window.innerHeight - pageY) / 50
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

  return (
    <div className="w-full h-full" onMouseMove={(e) => parallax(e)}>
      {imageIndex.map((value, index) => (
        <Img
          src={`${path}${value}.png`}
          ref={addToRefs}
          className="w-full h-full"
          key={index}
          zIndex={imageIndex.length - value}
          draggable={false}
          width={"100%"}
          height={"100%"}
          alt=""
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
