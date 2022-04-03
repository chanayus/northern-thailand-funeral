import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="relative">
      <video width="100%" height="100%" autoPlay muted loop>
        <source src="/video/bg.mp4" type="video/mp4"></source>
      </video>

      <img src="/images/logo.png" alt="" width="320" draggable={false} className="w-[35vw] absolute top-[2%] left-1/2 translate-x-[-50%]" />

      <button
        className="bg-white text-black text-2xl py-3 px-10 rounded font-bold absolute left-1/2 translate-x-[-30%] bottom-[1%]"
        onClick={() => router.replace("/section2", "/", { shallow: true, scroll: false })}
      >
        Start
      </button>
    </div>
  )
}

export default Home
