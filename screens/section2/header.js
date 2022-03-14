import styled from "styled-components";
import { useRef } from "react";

const Header = () => {
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const imageIndex = new Array(14).fill("").map((_, i) => i + 1);

  const parallax = (e) => {
    const { pageX, pageY } = e;
    const x = (window.innerWidth - pageX) / 100;
    const y = (window.innerHeight - pageY) / 100;
    itemsRef.current.map((ele, index) => {
      ele.style.transform = `translateX(${x / (index/1.75 + 2)}px) translateY(${y / (index/1.75 + 2)}px)`;
    });
  };

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <div className="w-full h-full relative border-4 border-red-600" onMouseMove={(e) => parallax(e)}>
      {imageIndex.map((value, index) => (
        <Img
          src={`/images/section2/header/เสีย_${value}.png`}
          ref={addToRefs}
          className="w-full h-full object-cover 2xl:object-fill"
          key={index}
          zIndex={imageIndex.length - value}
          draggable={false}
          width={"100%"}
          height={"100%"}
          alt=""
        />
      ))}
    </div>
  );
};

const Img = styled.img`
  user-select: none;
  position: absolute;
  z-index: ${(props) => props.zIndex};
`;

export default Header;
