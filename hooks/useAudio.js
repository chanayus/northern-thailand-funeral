import { useEffect, useState } from "react"

import { Howl } from "howler"

export const useAudio = (url) => {
  const [audio, setAudio] = useState()
  const [playing, setPlaying] = useState(false)
  const [isMute, setIsMute] = useState(false)

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

  const mute = () => {
    audio.mute(!isMute)
    setIsMute(!isMute)
  }

  useEffect(() => {
    setAudio(new Howl({ src: url, volume: 0.2, loop: true, mute: isMute }))
  }, [])

  return [playing, play, pause, stop, mute, isMute]
}
