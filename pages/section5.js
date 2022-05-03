import { AnimatePresence, motion } from "framer-motion"
import { FacebookIcon, LineIcon, TwitterIcon } from "react-share"
import { FacebookShareButton, LineShareButton, TwitterShareButton } from "react-share"
import { useEffect, useState } from "react"

import { BgMusicContext } from "./_app"
import Link from "next/link"
import Slider from "react-slick/lib/slider"
import styled from "styled-components"
import { useContext } from "react"

const Section5 = () => {
  const { mute, isMute } = useContext(BgMusicContext)
  const zodiac = [
    {
      title: "ปีชวด",
    },
    {
      title: "ปีฉลู",
    },
    {
      title: "ปีขาล",
    },
    {
      title: "ปีเถาะ",
    },
    {
      title: "ปีมะโรง",
    },
    {
      title: "ปีมะเส็ง",
    },
    {
      title: "ปีมะเมีย",
    },
    {
      title: "ปีมะแม",
    },
    {
      title: "ปีวอก",
    },
    {
      title: "ปีระกา",
    },
    {
      title: "ปีจอ",
    },
    {
      title: "ปีกุน",
    },
  ]

  const [imageIndex, setImageIndex] = useState(0)
  const [download, setDownload] = useState(1)
  const [showPopup, setShowPopup] = useState(false)

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[45%] left-[38%] z-10 translate-y-[-50%] cursor-pointer xl:block hidden">
        <img src="/icon/arrow.svg" className="rotate-180" alt="" />
      </div>
    )
  }

  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[45%] right-[38%] z-10 translate-y-[-50%] cursor-pointer xl:block hidden">
        <img src="/icon/arrow.svg" alt="" />
      </div>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const settings = {
    infinite: true,
    lazyLoad: false,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "relative",
    afterChange: (index) => setDownload(index + 1),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  }
  return (
    <>
      <div className="w-full h-full min-h-screen relative bg-[url('/images/section5/bg.webp')] bg-[5%_top] bg-no-repeat bg-cover flex flex-col">
        <div className="flex justify-between lg:p-5 md:p-4 pt-4 px-2 pb-0">
          <Link href="/">
            <a>
              <img src="/images/section5/logo.svg" alt="" width={100} height={100} className="mx-auto mb-1 w-[50%] max-w-[100px]" />
              <div className="flex items-center">
                <img src="/icon/back.svg" alt="" className="rotate-90" />
                <h2 className="header-font lg:text-4xl text-2xl whitespace-nowrap">กลับสู่หน้าแรก</h2>
              </div>
            </a>
          </Link>

          <button onClick={() => mute()} className="h-fit">
            <img src={`/icon/${isMute ? "mute" : "sound"}.svg`} alt="" className="w-[4vw] h-[4vw] max-w-12 max-h-12 min-w-[35px] min-h-[35px]" />
          </button>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center mb-4">
          <div className="relative">
            <div>
              <h1 className="header-font lg:text-6xl text-4xl text-white text-center mb-1">ของที่ระลึกงานศพ</h1>
              <h4 className="header-font lg:text-4xl text-2xl text-white text-center mb-3">ตุงตั๋วเปิ้ง</h4>
            </div>
            <a href={`/download/${download}.png`} download className="absolute right-[4%] top-[35%]">
              <img src="/icon/download.svg" alt="" className="w-[45px] h-[45px]" />
            </a>
          </div>
          <Slider {...settings}>
            {zodiac.map((value, index) => (
              <Slide
                className={`xl:h-[45.75vh] h-[40vh] md:min-h-[320px] min-h-[300px] ${index === imageIndex ? "activeSlide" : "slide"}`}
                key={index}
              >
                <div className="flex flex-col justify-center items-center h-full ">
                  <div className="h-full w-full">
                    <div className="img-slide relative duration-200 mx-auto 2xl:w-[80%] lg:w-[90%] w-full flex0 overflow-hidden justify-center items-center h-[88%] ">
                      <img src={`/images/section5/zodiac/${index + 1}.webp`} className="w-full h-full  object-contain absolute" alt="" />
                    </div>
                    <h3 className="lg:text-[40px] text-3xl mt-3 header-font text-white text-center">{value.title}</h3>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="w-full flex justify-center md:mt-5 mb-3 relative">
            <AnimatePresence exitBeforeEnter>
              {!showPopup ? (
                <Button
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className="bg-transparent border border-[#FFF] text-white cinzel-font md:text-2xl text-xl  w-[clamp(135px,16vw,175px)] h-[clamp(35px,10vh,47px)] rounded-xl "
                  onClick={() => setShowPopup(true)}
                >
                  SHARE
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <FacebookShareButton title={""} url={"https://mianmalai.vercel.app"}>
                    <FacebookIcon size={52} round />
                  </FacebookShareButton>

                  <TwitterShareButton title={""} url={"https://mianmalai.vercel.app"} className="mx-5">
                    <TwitterIcon size={52} round />
                  </TwitterShareButton>

                  <LineShareButton title={""} url={"https://mianmalai.vercel.app"}>
                    <LineIcon size={52} round />
                  </LineShareButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div>
          <div className="pr-[2.8vw] text-right xl:text-[1.25rem] text-base leading-none font-bold text-zinc-400">
            ตุงตั๋วเปิ้ง หรือ ตุง 12 นักษัตร เชื่อว่าจะนำความสิริมงคลมาให้ <br /> สามารถนำไปใช้เป็นภาพหน้าจอโทรศัพท์ หรือ พิมพ์ออกมาได้
          </div>
          <div className="w-full flex justify-between items-center bg-transparent py-3 md:px-4 px-2">
            <div className="flex items-center">
              <img src="/images/section5/logo.svg" alt="" width={75} h={75} className="md:w-[75px] md:h-[75px] w-[60px] h-[60px] mx-auto" />
              <div className="md:ml-4 ml-2">
                <h2 className="md:text-2xl text-xl leading-none font-bold text-zinc-400">NORTHERN THAILAND FUNERAL</h2>
                <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">
                  Communication Arts & Design <br />
                  King Mongkut’s Institute of technology Ladkrabang
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="flex md:justify-start justify-end items-end md:mr-2 md:pb-2">
                <a href="https://www.instagram.com/piggymonsterr" target="_blank" rel="noreferrer">
                  <img src="/icon/ig.svg" alt="" width={37} height={37} />
                </a>
                <a href="https://www.facebook.com/piggymonsterr" target="_blank" rel="noreferrer">
                  <img src="/icon/fb.svg" alt="" width={37} height={37} />
                </a>
              </div>
              <div className="text-right">
                <h3 className="leading-none md:text-2xl text-xl font-bold text-zinc-400">KITTICHA YOSKEAW</h3>
                <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">kitticha_prik@hotmail.com</p>
                <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">089-022-4298</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Slide = styled.div`
  transition: 0.35s;
  &.activeSlide {
    transform: scale(1);
    opacity: 1;
    @media (max-width: 768px) {
      .img-slide {
        transform: scaleX(1.175);
      }
    }
  }
  &.slide {
    transform: scale(0.75);
    opacity: 0.6;
    @media (max-width: 640px) {
      transform: scaleY(0.6) scaleX(0.65);
    }
  }
`

const Button = styled(motion.button)`
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: transparent;
    border-radius: 0.75rem;
    z-index: -99999 !important;
    border: 1px solid #fff;
  }
`

export default Section5
