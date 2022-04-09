import styled, { keyframes } from "styled-components"

import { motion } from "framer-motion"

const PulseButton = ({ title, handle }) => {
  return (
    <Button
      onClick={() => handle()}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="text-sm min-w-[70px] min-h-[70px] rounded-full font-[700] cinzel-font relative"
    >
      {title}
    </Button>
  )
}

const anim = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);

  }
`

const Button = styled(motion.button)`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #fff;
    animation: ${anim} 3s infinite;
  }
`

export default PulseButton
