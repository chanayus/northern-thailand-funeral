import { useEffect, useState } from "react"

import { Howl } from "howler"
import { useRouter } from "next/router"

export const useAudio = (url) => {
  const router = useRouter()
  const [audio, setAudio] = useState()
  const [playing, setPlaying] = useState(false)

  const play = () => {
    audio.play()
    setPlaying(true)
  }

  const pause = () => {
    audio.pause()
    setPlaying(false)
  }

  const stop = () => {
    audio.stop()
  }

  useEffect(() => {
    setAudio(new Howl({ src: url, volume: 0.35, loop: true }))
  }, [])

  return [playing, play, pause, stop]
}
