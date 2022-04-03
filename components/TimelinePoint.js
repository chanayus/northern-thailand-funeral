const TimelinePoint = ({ active, header }) => {
  const size = header ? "w-[50px] h-[50px]" : "w-[20px] h-[25px]"
  return (
    <>
      <div className="w-[22px] h-[28px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.5466 70.9176" width="100%" height="100%">
          <polygon style={{ fill: active ? "white" : "none" }} points="21.773 70.918 0 35.459 21.773 0 43.547 35.459 21.773 70.918" />
          <path
            style={{ fill: "white" }}
            d="M22.5,2.7514l19.8274,32.29L22.5,67.331,2.6726,35.0412,22.5,2.7514m0-3.169L.7267,35.0412,22.5,70.5,44.2733,35.0412,22.5-.4176Z"
            transform="translate(-0.7267 0.4176)"
          />
        </svg>
      </div>
      {!header && <div className="w-[0.25px] top-[-1px] h-3 bg-white mx-auto"></div>}
    </>
  )
}

export default TimelinePoint