import Header from "../screens/section2/header";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-container",
        start: "-100 center",
        end: `+=400`,
        scrub: true,
        markers: true
      },
    });
    tl.fromTo("#text", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        <Header />
      </div>

      <Content className="w-full relative content-container">
        <div className="absolute text-white top-32" id="text">
          <h2 className="text-9xl font-bold mb-2 header-font">ขอขมาศพ</h2>
          <p className="ml-5 text-2xl leading-tight">
            หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร <br /> ธูปคนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ <br /> ขออโหสิกรรมซึ่งกันและกัน
            หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
          </p>
        </div>
        <button className="absolute bg-gray-300 py-3 px-10 rounded font-bold right-5 top-1/2" onClick={() => router.replace("/section3", "/", { shallow: true, scroll: false })}>
          Next
        </button>
        <img src="/images/section2/content.png" alt="" />
      </Content>
    </>
  );
};

const Content = styled.div`
  & > div {
    left: 45%;
  }
`;

export default Section2;
