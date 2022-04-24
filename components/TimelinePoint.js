const TimelinePoint = ({ active, header }) => {
  return (
    <>
      <div className="w-[1.3vw] h-[1.8vw] max-w-[22px] max-h-[28px] relative">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          viewBox="0 0 158 256"
        >
          <polygon style={{ fill: active ? "white" : "none" }} points="78.9,256 0.3,128 78.9,0 157.5,128 " />
          <path
            style={{ fill: "white" }}
            d="M78.9,11.4L150.5,128L78.9,244.6L7.4,128L78.9,11.4 M78.9,0L0.3,128l78.6,128l78.6-128C157.5,128,78.9,0,78.9,0z"
          />
        </svg>
      </div>
      {!header && <div className="w-[0.025rem] lg:h-3 h-2 bg-white mx-auto"></div>}
    </>
  )
}

export default TimelinePoint
