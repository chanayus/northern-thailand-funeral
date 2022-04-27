import "../styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Head from "next/head"
import Layout from "../components/layout"
import React from "react"
import { useAudio } from "../hooks/useAudio"
import { useState } from "react"

const TimelineContext = React.createContext()
const BgMusicContext = React.createContext()
const IsEndContext = React.createContext()

function MyApp({ Component, pageProps }) {
  const [timelinePoint, setTimelinePoint] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const [showCastle, setShowCastle] = useState(false)
  const [playing, play, pause, stop, mute, isMute] = useAudio("/sound/1.mp3")
  return (
    <IsEndContext.Provider value={{ isEnd, setIsEnd, showCastle, setShowCastle }}>
      <BgMusicContext.Provider value={{ playing, play, pause, stop, mute, isMute }}>
        <TimelineContext.Provider value={{ timelinePoint, setTimelinePoint }}>
          <Head>
            <title>เมี้ยนมลาย</title>
            <link rel="icon" href="/fav.ico" />
            <meta
              property="og:description"
              key="description"
              content="Website เล่าเรื่องเกี่ยวกับงานศพที่สามารถให้ผู้เข้าชมมีส่วนร่วมในพิธีกรรมในงานศพ"
            />
            <link rel="prefetch" href="/public/cursor/cut.png" />
            <meta property="og:title" content="เมี้ยนมลาย" />
            <meta property="og:image" key="image" content="https://northern-thailand-funeral.vercel.app/bg-meta.jpg" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />
            <meta name="twitter:title" content="เมี้ยนมลาย" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://northern-thailand-funeral.vercel.app/bg-meta.jpg" />
            <meta name="twitter:description" content="Website เล่าเรื่องเกี่ยวกับงานศพที่สามารถให้ผู้เข้าชมมีส่วนร่วมในพิธีกรรมในงานศพ" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TimelineContext.Provider>
      </BgMusicContext.Provider>
    </IsEndContext.Provider>
  )
}

export { TimelineContext, BgMusicContext, IsEndContext }
export default MyApp
