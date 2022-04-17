const Panel7 = ({ setTimelinePoint }) => {
  return (
    <div className="w-full min-h-screen h-full relative">
      <video
        src="/video/4.7.mp4"
        width="100%"
        height="100%"
        type={"video/mp4"}
        muted
        autoPlay
        loop
        disablePictureInPicture
        className="w-full h-full object-cover object-top absolute"
      />
    </div>
  )
}

export default Panel7
