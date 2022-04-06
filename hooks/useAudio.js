import { useEffect, useState } from "react"

import { Howl } from "howler"
import { useRouter } from "next/router"

export const useAudio = (url) => {
  const router = useRouter()
  const [audio, setAudio] = useState()
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause()
    }
  }, [playing])

  useEffect(() => {
    if(router.pathname === "/" && playing){
      audio.stop()
    }
  }, [router])

  useEffect(() => {
    setAudio(new Howl({ src: url }))
  }, [])

  return [playing, toggle]
}
