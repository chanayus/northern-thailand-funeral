import styled from "styled-components";
import { useRef } from "react";
import { useRouter } from "next/router";

const Section2 = () => {
  const TextRef = useRef();
  const router = useRouter();
  //   const parallax = (e) => {
  //     const { pageX, pageY } = e;
  //     const x = (window.innerWidth - pageX) / 95;
  //     const y = (window.innerHeight - pageY) / 95;
  //     TextRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  //   };

  return (
    <>
      <div className="w-full h-screen">
        <img src="/images/section2/header.png" alt="" className="w-full h-full object-cover 2xl:object-fill" />
      </div>

      <Content className="w-full relative">
        <div className="absolute text-white top-32">
          <h2 className="text-5xl font-bold mb-2">ขอขมาศพ</h2>
          <p>
            หลังจากอาบน้ำศพ ก็จะจัดเตรียมอุปกรณ์ โดยจะมี ดอกไม้ ข้าวสาร <br /> ธูปคนละ 2 ดอก ใส่ในถาด พร้อมกับน้ำส้มป่อย เพื่อกล่าวขอขมากับศพ <br /> ขออโหสิกรรมซึ่งกันและกัน
            หลังจากนั้นก็ใช้น้ำส้มป่อยมาราดที่มือศพ
          </p>
        </div>
        <button className="absolute bg-white p-4 right-5 top-1/2" onClick={() => router.replace("/section3", "/",{shallow: true, scroll: false})}>
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
