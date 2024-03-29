import { useEffect, useState } from "react"

import { Howl } from "howler"

export const useAudio = (url, isLoop = true, volume = 0.15) => {
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
    !isMute ? audio.fade(volume, 0, 750) : audio.fade(0, volume, 750)
    setIsMute(!isMute)
  }

  useEffect(() => {
    setAudio(new Howl({ src: url, volume: volume, loop: isLoop, mute: isMute }))
  }, [])

  return [playing, play, pause, stop, mute, isMute]
}
