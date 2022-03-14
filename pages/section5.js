import Slider from "react-slick/lib/slider";
import styled from "styled-components";
import { useState } from "react";

const Section5 = () => {
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
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[45%] left-[39%] z-10 translate-y-[-50%] cursor-pointer lg:block hidden">
        <img src="/icon/arrow.svg" className="rotate-180" alt="" />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="absolute top-[45%] right-[39%] z-10 translate-y-[-50%] cursor-pointer lg:block hidden">
        <img src="/icon/arrow.svg" alt="" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
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
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 0
          }
        },
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="w-full h-full min-h-screen bg-gray-800 relative flex items-center">
      <div className="w-full">
        <h1 className="header-font text-7xl text-white text-center mb-10">ของที่ระลึกงานศพ</h1>
        <Slider {...settings}>
          {zodiac.map((value, index) => (
            <Slide className={`lg:h-[28rem] h-[50vh] ${index === imageIndex ? "activeSlide" : "slide"}`} key={index}>
              <div className="flex flex-col items-center h-full">
                <div className="lg:w-[80%] w-full flex overflow-hidden justify-center items-center h-[100%] text-4xl">
                  <img src={value.img} className="w-full h-full object-cover" alt="" />
                </div>
                <h3 className="text-5xl mt-1 header-font text-white">{value.title}</h3>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="w-full flex justify-center mt-10">
          <button className=" header-font text-4xl text-white text-center rounded-xl border-2 border-gray-500 px-6">Share</button>
        </div>
      </div>
    </div>
  );
};

const Slide = styled.div`
  transition: 0.35s;
  &.activeSlide {
    transform: scale(1);
    opacity: 1;

  }
  &.slide {
    transform: scale(0.75);
    opacity: 0.5;

  }
`;

export default Section5;
