import { motion } from "framer-motion"

const Logo = () => {
  const variant = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255,255,255,0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255,255,255,1)",
    },
  }

  const transition = {
    pathLength: { duration: 3, delay: 0, repeat: Infinity, repeatType: "reverse", repeatDelay: 0 },
    fill: { duration: 0.5, delay: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 2.5 },
  }
  return (
    <motion.svg
      version="1.2"
      stroke="#FFF"
      fill="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 860 920"
      width={260}
      height={320}
    >
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m124.8 388.3c-2.2-1.8-4.2-3.4-5.4-4.6 6.2-9.5 17.7-10.1 22.1-1.5 2.5 4 3.9 8.9 7.4 13.5 5.5 7.2 15.2 7.7 22.4 2.4q1.1-0.9 2.1-1.9 0.9-1 1.7-2.2 0.8-1.2 1.3-2.5 0.5-1.4 0.8-2.7c1.3-7.8 0.5-14.8-7.1-19.5q-2-1.2-4.2-1.7-2.3-0.6-4.6-0.4-2.4 0.1-4.6 0.9-2.2 0.7-4.1 2.1c-11.8 8.2-26.8 2.4-28.6-11.8q-0.2-2.8-0.4-5.5-0.2-2.7-0.3-5.4-0.2-2.7-0.2-5.4 0-2.8 0-5.5c-0.1-55.4 0-110.7-0.1-166.1 0-3.7 1.1-5.8 4.3-7.9 6.8-4.4 13.2-9.5 19.8-14.3 1.3-1 2.6-2 4.6-3.6l5.5-4.3v214.3c7.8-3.4 19-1.7 26 4.2 12.4 10.5 12.2 27.6 5.6 39.4-4.9 9-19.1 14.9-29.6 12.3-9.4-2.5-16.1-7.9-20-16.8-0.9-2.1-1.8-4.5-2.9-6.6-1.7-3.5-3.3-4.2-6.1-3.7-2 0.6-3.2 2.2-5.4 4.8z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m380.7 238.4c-1.4 1.7-3.4 3.5-4.7 5q-0.3-0.4-0.7-0.8-0.3-0.4-0.7-0.8-0.4-0.3-0.9-0.6-0.4-0.3-0.9-0.6c-4.6-1.9-6.7 0.8-7 5.8-0.2 5.5-0.1 10.9-0.1 16.4q0.2 74.9 0.4 149.8c0 15.6 0.8 31.2 0.2 46.8-0.8 21.8-9.5 40.1-27.6 53.1-17.2 12.4-36.2 13.9-56 8-16.3-4.9-29-12.9-37.5-27.7q-0.9-1.8-1.8-3.7-0.8-1.9-1.5-3.9-0.7-1.9-1.3-3.9-0.6-2-1-4c-1.8 4.4-6.4 11.8-9 14q-2.4 2.1-5.1 3.7-2.7 1.7-5.5 2.9-2.9 1.2-6 2-3 0.8-6.1 1.1c-13 1.1-25.1-1.4-34.7-10.9-21.4-21.2-11.7-53.2 11.2-64q2.3-1.1 4.8-1.9 2.4-0.9 4.9-1.5 2.5-0.6 5.1-0.9 2.6-0.3 5.2-0.4c5.1-0.1 10 0.7 14.6 3.5 4 2.5 8 0.8 9-3.9q0.2-0.8 0.3-1.7 0.1-0.9 0.2-1.7 0-0.9 0-1.8 0-0.9 0-1.8-0.1-79.5-0.3-159c0-9.3 0-18.6 0.3-27.8 0.2-4.1-1.4-6.4-4.6-8.4-6.7-4.3-13-4.4-19.2 0.3-6.2 4.6-5.8 14.7 0.1 19.3q0.5 0.3 0.9 0.5 0.5 0.3 1 0.5 0.5 0.2 1.1 0.3 0.5 0.2 1 0.2c0.2 2.2 0.4 5 0.5 7.1-6.4 0.8-11.7-3.3-14.4-7.6-4.1-8-3.6-15.9 1.9-23 5.5-7.1 13.1-9.5 21.8-7.8q1 0.2 2 0.4 1 0.3 2 0.6 0.9 0.4 1.9 0.8 0.9 0.4 1.8 0.8 3.4 1.9 7.2 3 3.7 1.2 7.5 1.6 3.9 0.5 7.8 0.2 3.9-0.3 7.6-1.4c0.6-0.1 1.3-0.3 2.3-0.5l4.3-1.8c0 0 0.2 176.6 0.2 212.7-3.7 9.2-11 14.3-16.8 16.9-2.7 1.4-5.6 2.4-8.6 2.9-3 0.5-6.1 0.5-9.1 0.2-3-0.4-5.9-1.3-8.7-2.5-2.7-1.3-5.3-2.9-7.5-4.9-3.6-3.2-7.1-3.8-11.5-2.8-11.2 2.7-18.8 12.6-18.2 23.9 0.7 10.6 9.1 19.9 19.4 21.2 12 1.6 26.8-6.8 32-17.9 3.8-8 7.8-8.2 10.8-1.7 2 4.6 4.2 11.3 7.1 15.6 17.6 26 41.9 24 64.4 10.4q2.5-1.4 4.7-3.2 2.3-1.8 4.3-3.8 2-2.1 3.7-4.4 1.7-2.4 3.1-4.9v-216.3c3.2-18.7 27.5-22 27.5-22q1.7-0.3 3.5-0.3 1.7-0.1 3.4 0.1 1.8 0.1 3.5 0.5 1.7 0.4 3.3 1c4 1.8 6.3 3.8 7.2 5.4z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m419.9 285.3c0.9-0.7 1.8-1.4 3.2-2.4-15.7-9.2-23.2-25.5-20-43q0.2-1.6 0.5-3.2 0.3-1.5 0.6-3.1 0.4-1.6 0.8-3.1 0.4-1.6 0.9-3.1c4.8-13.7 13.7-23.6 28.4-26.3 11.2-2 19.5-0.4 26.9 8.6q0.3 0.4 0.6 0.8 0.3 0.5 0.6 0.9 0.3 0.4 0.5 0.9 0.3 0.4 0.5 0.9c-2.4 1.1-4.1 2.7-5.9 3.5q-0.8-1.1-1.7-2.1-0.9-1-1.9-1.9-1-0.8-2.1-1.6-1-0.8-2.2-1.4c-1.4-0.8-2.9-1.3-4.5-1.5-1.5-0.1-3.1 0-4.7 0.5-1.5 0.4-2.9 1.2-4.1 2.2-1.2 1-2.2 2.3-2.9 3.7-5.8 11-7.4 22.5-2.3 34.3q0.6 1.4 1.1 2.7 0.6 1.3 1.3 2.7 0.6 1.3 1.3 2.6 0.7 1.3 1.4 2.5c5 7.9 11.7 13.5 21.6 13.6-0.3 2.9-0.2 5.1-0.3 6.8-0.6 0.3-1.6 0.6-2.5 1-9 3.8-29.1 16.3-23.1 51.6 2.7 15.5 8.8 27.3 17.7 31.1 9 3.7 14.2 2.7 20.2-3 1.1-0.9 3.6-3.4 4.7-4.4q0.6-0.5 1.4-0.8 0.7-0.2 1.5-0.3 0.7 0 1.5 0.2 0.7 0.2 1.4 0.6 0.6 0.3 1.1 0.6 0.6 0.3 1.2 0.6 0.6 0.2 1.2 0.5 0.6 0.2 1.1 0.4c5.1 1.9 9.6 0.8 12.8-2v-176.7l7.8-1.1q0.1 0 0.2 0 0-0.1 0.1-0.1 0.1 0 0.2 0 0 0 0.1 0c7.3-1.1 13.7-4.5 20-8q0.3-0.1 0.5-0.2 0.3-0.1 0.6-0.2 0.2 0 0.5-0.1 0.2 0 0.5-0.1c0.1 1.2 0.3 2.2 0.3 3.2 0.3 52.6 0.6 105.2 0.7 157.8 0 6.5-1.1 12.9-1.8 19.4q0 0.4-0.1 0.8-0.1 0.4-0.2 0.8-0.2 0.4-0.3 0.8-0.1 0.4-0.3 0.7c-4.9 14.5-16.5 21.3-31.4 17.9q-2.3-0.7-4.6-1.5-2.3-0.9-4.5-1.9-2.2-1-4.4-2.1-2.1-1.2-4.1-2.5c-4 4.5-6.2 7.1-10.6 9.6-19.9 11.4-44.2 4.8-57.4-12-16.9-21.5-11.7-62.9 10.4-75.1z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m779.3 395.3c-37.5 27.3-91.2 16.5-112-25.7-5.1-10.3-7.2-27.2-7.9-36.3-12.8 24.4-43.5 40.4-66.3 33q-2.6-0.8-5-2-2.4-1.3-4.6-2.9-2.2-1.6-4.2-3.5-1.9-2-3.5-4.2c-4.3-5.8-5.6-12.5-5.6-19.5q-0.3-94.3-0.6-188.5c0-2.4 0-4.7 0-6.8-7.8-3.8-15.8 0.7-22.2 11.5-0.7-0.4-2.4-1.6-3.1-2.1-0.8-0.5-1.6-1-2.8-1.7q0.4-1.2 0.9-2.3 0.5-1.1 1.2-2.2 0.6-1 1.3-2 0.8-1 1.6-1.9c7.3-8.6 20.7-12.4 32.3-9.2v-0.1c0 0 22.9 4.9 25.5 23v188.2q1.1 0.5 2.3 1 1.1 0.4 2.3 0.8 1.2 0.3 2.4 0.5 1.3 0.2 2.5 0.3c18.9 1.7 30-7.6 40.7-23.3 3.6-5.2 6.2-12.1 9.4-11.5 4.7 0.9 3.9 5 4.9 11.8 1.9 12.7 5.6 20.7 10 30.7 8.6 15.6 21.5 22.9 39 26.4q2.4 0.4 4.7 0.6 2.4 0.3 4.8 0.2 2.4-0.1 4.8-0.4 2.3-0.3 4.6-0.9c31.3-7.9 50.7-39.6 44.6-68.9-4.8-23.1-23.8-37.8-47.3-36.4q-2.9 0.1-5.8 0.8-2.9 0.6-5.6 1.6-2.7 1.1-5.2 2.6-2.6 1.5-4.8 3.4c-4.4 3.6-8.7 7.1-13.2 10.6q-1.7 1.3-3.6 2.4-1.9 1.1-3.9 1.9-2 0.8-4.1 1.3-2.2 0.5-4.4 0.7-0.6 0.1-1.2 0.1-0.6 0-1.2 0-0.6 0-1.2-0.1-0.6 0-1.2-0.1-2.5-0.1-4.9-0.8-2.4-0.8-4.5-2.1-2.1-1.4-3.8-3.2-1.6-1.9-2.8-4.2v-236l7.8-2.6q2-0.9 4-2 2.1-1.1 4-2.3 1.9-1.2 3.7-2.6 1.9-1.3 3.6-2.8 3.3-3 7-5.7 3.6-2.6 7.5-4.9 3.8-2.3 7.9-4.2 4.1-1.9 8.3-3.4c15.1-5.2 29.5-3.3 42.5 6.1 9.1 6.6 14 15.6 12.5 27.2-1 8.2-5.2 14.3-13.2 17.2-7.4 2.5-14 1-19.7-4.2q-1.1-1-2-2.1-0.8-1.2-1.5-2.4-0.7-1.3-1.2-2.7-0.5-1.3-0.8-2.7c1.3-0.6 2.6-1.3 3.9-1.8q1.3-0.6 2.3-1 0.3 0.7 0.6 1.4 0.3 0.7 0.6 1.4 0.3 0.7 0.7 1.4 0.3 0.7 0.7 1.3c1.1 1.8 2.6 3.2 4.3 4.2 1.8 1 3.8 1.5 5.8 1.5 2.1 0.1 4.1-0.4 5.9-1.4 1.8-0.9 3.3-2.3 4.4-4.1q1.3-1.9 2.1-4.1 0.8-2.2 0.9-4.5 0.1-2.4-0.5-4.6-0.5-2.3-1.7-4.3c-4.1-7.6-10.6-12.1-18.6-14.9-13.8-4.8-26.1-1-37.8 6.4-3.5 2.2-6.8 4.8-10.5 7.5v5.8q0.1 77.7 0.3 155.3c0 17.4 0.1 34.9 0.2 52.3 0 0.9 0 1.8 0 2.7 0.3 4 1.8 4.9 5.3 3.3q0.3-0.1 0.7-0.3 0.3-0.2 0.7-0.4 0.3-0.3 0.7-0.5 0.3-0.2 0.6-0.5c13.4-9.5 28.3-12.9 44.4-10.8 13.3 1.8 24.7 8.1 34.9 16.7 40.5 34.2 38.2 100.5-4.6 131.5z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m778.8 440.4c-1.2 1-4 2.9-5 3.4-1.1-2.5-1.7-3.3-3.4-3.7-2.4-0.7-5.4 2.8-5.4 7.1q0 26.2 0.1 52.3c0 17.7 0.1 35.5 0.2 53.2 0.2 22.9 0.3 45.8 0.7 68.7 0.1 8.8-3.7 15.5-10.4 20.8-13.6 10.8-35.1-0.9-47.8-13.9-15.2 8.1-33.4 10.8-50.3 3.8-23.2-9.6-34-32.3-30.7-58 2.7-22.1 11.9-37.2 22.2-46l3.8-3.3c-0.5-0.7-0.6-1-0.9-1.1-15.3-8-20-21.6-19.1-37.7 0.5-8.8 2.4-17.5 7-25.4 6-10.2 14.3-17.4 26-20.2 6.6-1.5 13.3-1.8 19.3 0.7q2.1 0.9 3.9 2.1 1.8 1.3 3.3 2.9 1.5 1.5 2.7 3.4 1.2 1.9 2 3.9c-2.6 1.2-5.5 2.5-6.4 2.9-0.5-1-1-1.7-1.7-2.9q-0.6-1.2-1.5-2.3-0.8-1-1.9-1.8-1.1-0.8-2.4-1.3-1.2-0.5-2.6-0.8-0.6-0.1-1.2-0.1-0.7-0.1-1.3 0-0.6 0-1.3 0.1-0.6 0.1-1.2 0.3-1.6 0.6-3 1.4-1.4 0.8-2.6 1.9-1.3 1-2.3 2.3-1 1.2-1.8 2.7c-3.7 6-6.3 12.5-6.7 22.8-0.2 6.6 2.2 13 5.4 18.6 5.5 8 13.1 14.5 25.4 13 0.3 1.9 0.8 5.1 1.1 7.1-2 0.6-3.4 1-5.3 1.6-3.9 1.1-11.8 7.9-17.5 17.6-9.2 15.5-8.7 34.3-6 52 5.3 34.5 25.1 42.3 41.7 33 3.4-1.6 6.3-1.3 9 1.8 5.5 5.1 10 7.9 17 7.3q0.5-0.1 1-0.2 0.6-0.1 1.1-0.3 0.5-0.1 1-0.3 0.4-0.2 0.9-0.5v-181.3c6.4-10.4 17.7-13.5 23.9-14.5q1.5-0.4 3.1-0.6 1.5-0.2 3.1-0.2 1.5-0.1 3.1 0.1 1.5 0.1 3 0.4c4.3 0.9 6.8 2.9 8.7 7.2z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m352 712c0.2 36.1 0.5 72.2 0.5 108.4 0.1 31.5-22.7 46.7-43.6 49.6-23.4 3.2-41.6-5.6-55.2-24.6q-0.8-1.4-1.6-2.8-0.8-1.5-1.5-2.9-0.7-1.5-1.4-2.9-0.6-1.5-1.2-3c-0.3 2-0.3 9.4-0.5 11.4-2.6 18.7-9.7 35.3-25 47.1-20.1 15.4-42.4 17.7-64.8 6-22.2-11.5-32.5-30.8-32.4-56 0.1-31.2 24.1-52.1 45.4-57.4q2.7-0.8 5.6-1.2 2.8-0.4 5.7-0.5 2.9-0.2 5.7 0 2.9 0.2 5.7 0.8c1.2 0.2 2.4 0.2 3.5 0.4 2.1-2.2 2.1-4.8 2.1-7.3 0-35.1 0-70.2-0.1-105.3-0.2-41.5-0.5-83.1-0.8-124.7 0-1.2-0.1-2.3-0.2-3.7-11.1-3.1-20.3-9.4-29.5-16-13.9-10-28.7-18.3-45.8-21.5-19.7-3.8-39.1-2.7-57.8 4.7-21.9 8.6-34.2 25.8-40.2 47.7-8.4 42.4 21.2 76.5 52.3 82.7q2.7 0.6 5.5 1 2.8 0.3 5.6 0.4 2.8 0 5.6-0.1 2.8-0.2 5.6-0.6c15.2-2.4 26.2-11 34.3-23.6 3.4-5.2 6-11.2 9-17.1 0.8 0.4 5.6 2.4 7 3.2-0.4 1-0.8 2.5-1.5 4.1-5.5 15.7-15.5 28.1-30.5 35.7-20.1 10.3-40.6 9.6-60.4-0.5-22.9-11.6-36.5-30.7-41.9-56-6.9-31.7 10.1-70.5 49.9-85.5 26-9.9 52.1-8.4 77.8 1.6q2.6 1.1 5.1 2.2 2.6 1.2 5.1 2.5 2.5 1.3 4.9 2.6 2.5 1.4 4.9 2.8c7.5 4.3 14.2 10.1 22.1 13.7 16.5 7.6 30.3 5.6 43.9-4.6 0.7-0.5 1.7-0.2 2.5-0.3q0.2 0 0.4 0 0.2 0 0.3 0.1 0.2 0 0.4 0.1 0.2 0 0.4 0.1c0 1.7 0.2 16.6 0.2 18.4-0.1 28-0.3 55.9-0.3 83.9q-0.1 77.2-0.1 154.4 0 8.7-0.1 17.3c-0.1 7.5-5.3 12.9-12.7 13.3q-1.5 0.1-3 0-1.4-0.1-2.9-0.5-1.4-0.3-2.8-0.8-1.3-0.6-2.6-1.3c-7-4.1-14-3.5-21.1-0.8-17.7 6.7-28 25-24 43 2.8 13.3 11 22.3 23.8 26.3 13.2 4.2 25.5 1.6 35.8-7.5 3.3-3 5.6-7.3 7.7-11.3 4.9-9.7 5.8-20.2 6.2-30.8 0.2-3.1-0.2-6.1 0.2-9.1 0.3-2.3 0.5-4.4 1.5-6.4 1.2-2.3 5.4-2.8 7.2-1.1 1.9 1.7 2 3.6 3.5 5.6 3.8 5.1 7.2 10.4 11.1 15.3 5.4 6.8 11.9 12.3 20.4 14.8 12.4 3.6 24.3-0.3 32.5-9.3v-280.9l10.7-1.4c9.1-1.6 18.9-4.5 26.9-9.6 0.2 2.8 0.4 4.7 0.4 6.7 0.1 29.1 0 58.3 0.1 87.4 0.1 24.6 0.4 49.1 0.5 73.6z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m521.1 657.7c-0.1 10.9 0 21.9 0 32.8 0 1.5-0.2 2.8-0.3 5.5-4.4-5.2-9.8-5.8-14.9-7.1q-1.9-0.5-3.8-1.1l-12.9-3v-88.4q-0.8-1.8-1.9-3.5-1.1-1.8-2.3-3.4-1.3-1.6-2.7-3-1.5-1.4-3.1-2.6c-30.2-23.6-56.9 12.1-62.3 30.4-4.9 17-12.1 42.3-0.4 77.5 6.6 19.7 27.5 23.6 36.8 8.5 0.5-0.8 0.5-1.9 0.9-3.4l6.4 0.7q0 2.2-0.5 4.3-0.5 2.1-1.5 4.1-1 1.9-2.3 3.6-1.4 1.7-3.1 3-2 1.7-4.3 2.9-2.3 1.2-4.7 2-2.5 0.8-5.1 1-2.6 0.3-5.1 0.1c-11.9-0.8-40.9-7.2-51.3-38.3-19.1-57.2 13.1-86.9 22.8-95.5q3.3-3.5 7.2-6.3 3.8-2.9 8.1-5.1 4.3-2.2 8.9-3.6 4.5-1.5 9.3-2.2 6.5-1 13.1-0.7 6.6 0.3 13.1 1.8 6.4 1.5 12.4 4.2 6.1 2.7 11.5 6.6v-54.4c-0.4-18-10.1-25.9-18.5-29.3q-1.6-0.5-3.1-0.9-1.6-0.4-3.1-0.7-1.6-0.3-3.1-0.6-1.6-0.2-3.2-0.4-0.9-0.1-1.7-0.2-0.9 0-1.7-0.1-0.9 0-1.7-0.1-0.9 0-1.7 0c-22.7 0.2-41.9 10.5-52 30.8q-1.1 2.4-2.2 4.9-1 2.5-2 5.1-0.9 2.5-1.7 5.1-0.8 2.6-1.5 5.2c-2.6-0.4-4.3-0.8-7-1.4q0.3-2.1 0.8-4.3 0.5-2.1 1.1-4.1 0.6-2.1 1.4-4.1 0.8-2 1.7-4c9-20.7 24.4-35 47.3-39.5q2.8-0.5 5.6-0.9 2.9-0.3 5.7-0.3 2.8-0.1 5.7 0.1 2.8 0.1 5.6 0.6c17.3 2.2 33.1 7.9 46.4 19 3.5 2.9 6.9 6.1 10.1 9.3q1.4 1.3 2.5 3 1.1 1.6 1.8 3.4 0.7 1.8 1 3.7 0.4 1.9 0.3 3.9-0.5 64.7-0.8 129.4z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m222 186.4c2.3-7.1 4.6-11.6 15-22.6 12.7-11.7 17.8-18.8 29.3-19.1 17-0.5 49.8 33.9 78.4 47.5 0.4-1.2 0.5-45.9 0.5-46.5 0-3.1 2.2-5.2 3.8-6.8q1-0.9 2.2-1.7 1.1-0.7 2.3-1.4 1.2-0.7 2.5-1.2 1.3-0.6 2.6-1c17.8-4.4 24.6 6.5 24.6 6.5 0 0-3.1 3.5-4 4.4 0 0-5-5.7-8.1-2.3q-0.3 0.4-0.5 0.9-0.2 0.5-0.3 0.9-0.1 0.5-0.1 1-0.1 0.5-0.1 1c0 0.6 0.1 27.2 0.3 30.5q0.2 5 0.2 7.8c-0.3 6.6-5 17.3-7.5 21-3.8 5.7-12.4 23.3-45.5 2.2-13.8-8.9-57.3-50.3-73.5-41.3-2.5 2.2-12.6 9.7-14.6 19.4 11.9 2.5 19.1 9 32 4.6l1.5 5.7c-6.2 2.6-13.3 3.9-20.3 1.9-10.1-2.9-14.3-6.1-19.7-6.5-2.4 0.7-1.9-2.3-1-4.9z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m283.7 95.3c-0.7-0.4-1.5-0.9-2.7-1.6q0.4-1 0.9-2.1 0.5-1 1.2-2 0.6-0.9 1.3-1.8 0.8-0.9 1.6-1.7c10.8-11.4 34.4-13.5 46.7 0.1q0.7 0.7 1.3 1.5 0.5 0.9 0.9 1.8 0.4 0.9 0.5 1.9 0.2 1 0.2 2c0.1 8 0.1 19.1 0.1 28.1 8-4 15.2-5.4 19.8-7.7 6.3-6.6 8.4-19.2 8.4-36.5q0-14.4 9.9-19.8 2.6-1.1 5.2-1.8 2.7-0.7 5.4-1 2.7-0.3 5.5-0.3 2.8 0.1 5.5 0.5c-0.3 2.3-0.4 4.4-0.6 6.1-1.7-0.2-4.9-0.2-5.3 1.1-0.9 2.2-2.1 11.3-2.1 15.6 0 15.6-5.6 28.6-10.6 32.2-17.7 12.6-44.8 13.9-65.8 36.4-1.1 1.2-2.5-0.9-2.5-2.5l0.5-48.3q0-1.3 0-2.6c0-2.1 0-4.2 0-6.2-7.2-4-17.9-0.5-22.9 9.7-0.7-0.4-1.6-0.7-2.4-1.1z"
      />
      <motion.path
        className="a"
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={transition}
        d="m598.3 764.4c0.2 2.3-1.9 3.2-4 4.1q-1.9 0.7-3.7 1.5-1.8 0.8-3.6 1.7-1.8 0.8-3.6 1.7-1.8 0.9-3.5 1.9-0.9 0.6-1.8 1.2-0.9 0.6-1.7 1.2-0.9 0.7-1.7 1.4-0.8 0.6-1.6 1.4l-0.6 0.5-0.9 0.7-6.6 5.6v-369.7q-1.4-1-2.9-1.8-1.4-0.9-2.9-1.8-1.5-0.8-3-1.6-1.5-0.8-3-1.6c-23.8-11.5-48.1-3.1-59.2 16.1-2.4 4.1-3.7 9-4.8 13.6q-0.2 1-0.3 2.1 0 1 0 2 0.1 1 0.2 2 0.2 1.1 0.5 2c1.5 6.9 6.9 10.9 14 10.2q0.9-0.1 1.8-0.3 0.9-0.1 1.8-0.3 0.8-0.3 1.7-0.5 0.9-0.3 1.8-0.6c0 1.4 0.4 5.2 0.5 7.1-4.9 1.6-9.6 2.5-14.6 1.2-7.1-1.9-11.7-6.6-13.8-13.6q-0.8-2.7-1.1-5.5-0.3-2.9-0.1-5.7 0.2-2.9 0.9-5.6 0.7-2.8 1.9-5.4 1.6-3.7 3.8-7.1 2.2-3.4 4.9-6.4 2.7-2.9 5.9-5.4 3.2-2.5 6.7-4.4c-14.8 4.2-25.7 13.8-36.3 23.2-9.4 8.3-18.2 16.2-29.2 19.3q-1.4 0.5-2.9 0.8-1.4 0.3-2.9 0.6-1.5 0.2-3 0.3-1.5 0.1-3 0.1c-12.4 0-18.4-7-20.7-10.6-5.3-8.6-4.7-20.7 1.5-27.6 9.4-10.5 22.2-6.4 27.6-2.8l-1.9 2.9-2 3c-0.4-0.3-10.8-7-18.5 1.6-4.1 4.6-4.5 13.2-0.8 19.2 4.4 7 13.2 9.1 24.7 5.8 9.5-2.7 17.7-10 26.5-17.8 18.1-16.1 41.3-37.4 84.5-22.8 4.9 1.7 12.5 6.1 18.7 8.9 3.1 1.4 6 3.2 9.2 4.2 5.5 1.7 10.9 1.4 15.7-2.3 0.8-0.7 2.7-1.2 4.2-2.2 0.1 2.2 0.3 3.7 0.3 5.3q0.3 127 0.6 254 0.2 45.8 0.3 91.6c0 1.1-0.1 2.3 0 3.4z"
      />
    </motion.svg>
  )
}

export default Logo
