import { useEffect, useState } from "react"

import { Howl } from "howler"

export const useAudio = (url, isLoop = true) => {
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
    !isMute ? audio.fade(0.1, 0, 500) : audio.fade(0, 0.1, 500)
    setIsMute(!isMute)
  }

  useEffect(() => {
    setAudio(new Howl({ src: url, volume: 0.1, loop: isLoop, mute: isMute }))
  }, [])

  return [playing, play, pause, stop, mute, isMute]
}
