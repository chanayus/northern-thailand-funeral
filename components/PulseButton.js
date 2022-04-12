import { motion } from "framer-motion"

const PulseButton = ({ title, handle, dark = false }) => {
  return (
    <motion.button onClick={() => handle()} exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
      <motion.div
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ scale: { repeat: Infinity, repeatType: "reverse", duration: 3 } }}
        className={`text-sm min-w-[55px] w-[4vw] min-h-[55px] h-[4vw] border-2  ${
          dark ? "text-black border-black" : "text-white border-white"
        } rounded-full font-[700]  relative`}
      ></motion.div>
      <h2 className={`cinzel-font absolute top-[45%] left-1/2 translate-x-[-50%] translate-y-[-50%]  ${dark ? "text-black" : ""}`}>{title}</h2>
    </motion.button>
  )
}

export default PulseButton
