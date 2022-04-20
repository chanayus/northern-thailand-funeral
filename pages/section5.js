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
      title: "ราศีมังกร",
      img: "https://pbs.twimg.com/media/FNwpogTXsAAHc-d?format=jpg&name=large",
    },
    {
      title: "ราศีกุมภ์",
      img: "https://pbs.twimg.com/media/FNwG81iXMAc01fR?format=jpg&name=large",
    },
    {
      title: "ราศีมีน",
      img: "https://pbs.twimg.com/media/FNwDsCeXoAIZRXN?format=jpg&name=900x900",
    },
    {
      title: "ราศีเมษ",
      img: "https://pbs.twimg.com/media/FNwBTUiXoAUohBF?format=jpg&name=large",
    },
    {
      title: "ราศีพฤษก",
      img: "https://pbs.twimg.com/media/FNM4AspXwAEnTjY?format=jpg&name=large",
    },
    {
      title: "ราศีเมถุน",
      img: "https://pbs.twimg.com/media/FL-2YrPXMAE-gC7?format=jpg&name=large",
    },
    {
      title: "ราศีกรกฎ",
      img: "https://pbs.twimg.com/media/FLRhZcKXwBYd1P1?format=jpg&name=large",
    },
    {
      title: "ราศีสิงห์",
      img: "https://pbs.twimg.com/media/FLO1IyXXsAQyESa?format=jpg&name=4096x4096",
    },
    {
      title: "ราศีกันย์",
      img: "https://pbs.twimg.com/media/FJBQWxeXMAciaad?format=jpg&name=large",
    },
    {
      title: "ราศีตุลย์",
      img: "https://pbs.twimg.com/media/FMZ3TDfWUAEJuzt?format=jpg&name=large",
    },
    {
      title: "ราศีพิจิก",
      img: "https://pbs.twimg.com/media/FMZ3z-rXMAsZU7w?format=jpg&name=medium",
    },
    {
      title: "ราศีธนู",
      img: "https://pbs.twimg.com/media/FNwpGSfXoAgeFHh?format=jpg&name=900x900",
    },
  ]

  const [imageIndex, setImageIndex] = useState(0)

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
    className: "relative ",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 0,
        },
      },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  }
  return (
    <div className="w-full h-full min-h-screen relative bg-[url('/images/section5/bg.webp')] bg-[5%_top] bg-no-repeat bg-cover flex flex-col">
      <div className="flex justify-between lg:p-6 md:p-4 pt-4 px-2 pb-0">
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
      <div className="w-full flex-1 flex flex-col justify-center mb-6">
        <h1 className="header-font lg:text-7xl text-4xl text-white text-center md:mb-6 mb-3">ของที่ระลึกงานศพ</h1>
        <Slider {...settings}>
          {zodiac.map((value, index) => (
            <Slide className={`lg:h-[28rem] h-[40vh] ${index === imageIndex ? "activeSlide" : "slide"}`} key={index}>
              <div className="flex flex-col items-center h-full ">
                <div className="2xl:w-[80%] lg:w-[90%] w-full flex overflow-hidden justify-center items-center md:h-[100%] h-[80%]">
                  {/* <img src={value.img} className="w-full h-full object-cover" alt="" /> */}
                  <div className="w-full h-full bg-zinc-900 flex justify-center items-center min-h-[50vh] max-h-[400px]">
                    <img src="/images/section5/logo.svg" alt="placeholder-img" className="w-[40%]" />
                  </div>
                </div>
                <h3 className="lg:text-5xl text-3xl mt-1 header-font text-white text-center">{value.title}</h3>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="w-full flex justify-center md:mt-6 mb-3">
          <Button
            className="bg-transparent border border-[#FFF] text-white cinzel-font text-2xl w-[180px] h-[50px] rounded-xl "
            onClick={() => {}}
          >
            SHARE
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:bg-black bg-transparent py-3 px-4">
        <div className="flex items-center">
          <img src="/images/section5/logo.svg" alt="" width={75} h={75} className="md:w-[75px] md:h-[75px] w-[60px] h-[60px] mx-auto" />
          <div className="ml-4">
            <h2 className="md:text-2xl text-xl leading-none font-bold text-zinc-400">NORTHERN THAILAND FUNERAL</h2>
            <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">
              Communication Arts & Design <br />
              King Mongkut’s Institute of technology Ladkrabang
            </p>
          </div>
        </div>
        <div className="text-right">
          <h3 className="leading-none md:text-2xl text-xl font-bold text-zinc-400">KITTICHA YOSKEAW</h3>
          <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">kitticha_prik@hotmail.com</p>
          <p className="leading-none md:text-[1.25rem] text-base text-zinc-400">089-022-4298</p>
        </div>
      </div>
    </div>
  )
}

const Slide = styled.div`
  transition: 0.35s;
  &.activeSlide {
    transform: scale(1);
    opacity: 1;
    @media (max-width: 768px) {
      transform: scale(1.1);
    }
  }
  &.slide {
    transform: scale(0.75);
    opacity: 0.6;
    @media (max-width: 768px) {
      transform: scale(0.6);
    }
  }
`

const Button = styled.button`
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
    border: 1px solid #FFF;
  }
`

export default Section5
