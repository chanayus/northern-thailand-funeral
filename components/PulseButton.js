import { motion } from "framer-motion"

const PulseButton = ({ title, handle = () => {}, dark = false, icon="" }) => {
  return (
    <motion.button onClick={() => handle()} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="relative">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ scale: { repeat: Infinity, repeatType: "reverse", duration: 3 } }}
        className={`text-sm min-w-[55px] w-[3.75vw] min-h-[55px] h-[3.75vw] border  ${
          dark ? "text-black border-black" : "text-white border-white"
        } rounded-full font-[700] relative`}
      ></motion.div>
      {
        icon !== "" ? <img src="/icon/ear.svg" alt="" className="absolute w-[85%] top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%]" /> :   <h2 className={`text-[clamp(12px,2.7vmin,1.1rem)] cinzel-font absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] ${dark ? "text-black" : ""}`}>{title}</h2>
      }
    
    </motion.button>
  )
}

export default PulseButton
