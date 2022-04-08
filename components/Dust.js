import styled, { keyframes } from "styled-components"
import { useEffect, useState } from "react"

const Dust = () => {
  const [total, setTotal] = useState([])
  useEffect(() => {
    const data = []
    for (let i = 1; i <= 75; i++) {
      data.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 50),
        delay: Math.floor(Math.random() * 20) + 5,
      })
    }
    setTotal(data)
  }, [])
  return (
    <div className="fixed top-0 w-full z-50">
      {total.map((value, index) => (
        <Dot startX={`${value.x}%`} startY={`${value.y}px`} delay={`${value.delay}`} key={index}></Dot>
      ))}
    </div>
  )
}

const anim = keyframes`
  0% {
    opacity: 0;
  
  }
  50% {
    opacity: 0.75;  
  }
  75%{
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateX(-120px) translateY(35vh);
  }
`

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background: #fff;
  position: absolute;
  left: ${(props) => props.startX};
  top: -${(props) => props.startY};
  border-radius: 50%;
  animation: ${anim} ${(props) => props.delay}s linear infinite;
`

export default Dust
