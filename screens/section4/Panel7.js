const Panel7 = ({ setTimelinePoint }) => {
  return (
    <div className="w-full min-h-screen h-full relative">
      <div className="absolute z-10 top-[28%] left-[33%]">
        <h2 className="text-[8.5vmin] absolute top-[-50%] left-[-20%] font-bold mb-0 mr-[5vw] header-font leading-[1.15]">พิธีทักสัปเหร่อ</h2>
        <p className="text-[clamp(9px,2.3vmin,1.4rem)] leading-tight whitespace-nowrap">
          อาจารย์ : อ้าว ไปไหนมาหล่ะ <br />
          สัปเหร่อ : ไปเผาศพมาที่ป่าช้า ร้อน ไหม้ไปหมด อย่าให้มีซ้ำอีกเลย <br />
          อาจารย์ : อย่าไปให้มีอีกเลย แล้วเอาอะไรมาขาย <br />
          สัปเหร่อ : เอาพลั่ว เอาเสียมมาขาย
          <br />
          อาจารย์ : เท่าไหร่หล่ะ
          <br />
          สัปเหร่อ : หมื่นนึง <br />
          อาจารย์จะเตรียมหมาก พลู เหล้า 1 ขวด ให้สัปเหร่อ <br /> ถือเป็นการซื้อของคืนมา หลังจากนั้นก็ให้สัปเหร่อเข้าบ้านได้
        </p>
      </div>
      <video
        src="/video/4.7.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        playsInline={true}
        autoPlay
        loop
        disablePictureInPicture
        className="w-full h-full object-cover object-top absolute"
      />
    </div>
  )
}

export default Panel7
