import { useEffect, useState } from "react";

const Image360 = ({ amount = 72, path = "" }) => {
  const [swipeValue, setSwipeValue] = useState(0);
  const [imageValue, setImageValue] = useState(1);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    for (let index = 1; index <= amount; index++) {
      new Image().src = `https://fastly-production.24c.in/webin/360/output_${index}.jpeg`;
    }
  }, []);

  const swipeHandle = (e) => {
    const { clientX } = e.targetTouches[0];
    if (clientX > swipeValue) {
      setImageValue(imageValue + 1 > amount ? 1 : imageValue + 1);
    } else {
      setImageValue(imageValue - 1 < 1 ? amount : imageValue - 1);
    }
    setSwipeValue(clientX);
  };

  const grabHandle = (e) => {
    const { clientX } = e;
    if (isClick) {
      if (clientX < swipeValue) {
        setImageValue(imageValue + 1 > amount ? 1 : imageValue + 1);
      } else {
        setImageValue(imageValue - 1 < 1 ? amount : imageValue - 1);
      }
    }
    setSwipeValue(clientX);
  };
  return (
    <div
      className="z-10 w-screen h-screen relative cursor-grab active:cursor-grabbing"
      onTouchMove={(e) => swipeHandle(e)}
      onMouseMove={(e) => grabHandle(e)}
      onMouseDown={() => setIsClick(true)}
      onMouseUp={() => setIsClick(false)}
    >
      <img src={`https://fastly-production.24c.in/webin/360/output_${imageValue}.jpeg`} className="w-full h-full z-10 object-cover" draggable={false} alt="" />
    </div>
  );
};

export default Image360;
