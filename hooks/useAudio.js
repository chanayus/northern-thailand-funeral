import { useEffect, useState } from "react"

import { Howl } from "howler"

export const useAudio = (url) => {
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
    setPlaying(false)
  }

  useEffect(() => {
    setAudio(new Howl({ src: url, volume: 0.3, loop: true }))
  }, [])

  return [playing, play, pause, stop]
}
