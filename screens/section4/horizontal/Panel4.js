import { useEffect, useRef } from "react"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
import gsap from "gsap/dist/gsap"

const Panel4 = ({ setTimelinePoint }) => {
  gsap.registerPlugin(ScrollTrigger)
  const itemRef = useRef(null)

  useEffect(() => {
    const anim = gsap.from(itemRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "350% center",
        end: "+=50%",
        scrub: true,
        onEnter: () => setTimelinePoint(9),
        onLeaveBack: () => setTimelinePoint(8),
      },
      opacity: 0,
      duration: 0.25,
      ease: "none",
    })
    return () => anim.kill()
  }, [])

  return (
    <div className="w-[200vw] h-screen relative">
      <h1 className="text-center text-[12vmin] header-font text-black absolute top-[2vh] left-[2vh] leading-[0.75]">
        ขบวน <br />
        แห่ศพ
      </h1>
      <div className="absolute top-[2.5vh] left-[clamp(40vw,50vw,90vh)]">
        <h1 className="text-[7.25vmin] header-font leading-none">ปราสาทศพ</h1>
        <p className="2xl:text-xl lg:text-base text-xs leading-none">ปราสาทศพมีทั้งหมด 5 ประเภท</p>
        <ul className="2xl:text-xl lg:text-base text-xs">
          <li className="leading-[1]">1. แมวควบ - เป็นโครงไม้ไผ่วางครอบศพ ตกแต่งด้วยดอกไม้ สำหรับชาวบ้านทั่วไป ฐานะยากจน</li>
          <li className="leading-[1]">2. ปากกระบาน - เรือนศพที่มีหลังคา ไม่มีจั่วและยอด สำหรับชาวบ้านธรรมดา ฐานะค่อนข้างดี</li>
          <li className="leading-[1]">3. หลังกลาย - เรือนศพที่มี 4 จั่ว จั่วมีชั้นเดียวไม่มียอด สำหรับบุคคลที่เป็นที่เคารพ อาวุโส</li>
          <li className="leading-[1]">4. ปราสาทยอดเดียว - ปราสาทหลังคา 7 ชั้น ไม่มีหน้ามุข เป็นยอดปราสาทเดียว สำหรับข้าราชการผู้ใหญ่</li>
          <li className="leading-[1]">
            5. ปราสาทจัตุรมุขยอด 7 ชั้น หรือ 9 ชั้น - มีหน้ามุข 4 ด้าน สำหรับเจ้าผู้สูงศักดิ์ เช่น พระเจ้าแผ่นดิน เชื้อพระวงศ์
          </li>
        </ul>
      </div>
      <p className="2xl:text-xl lg:text-base text-xs absolute xl:top-[27vh] top-[35vh] xl:left-[80vw] md:left-[110vw] left-[120vw] xl:leading-[0.95] leading-[0.95]">
        โดยศพจะต้องหันเท้าไปด้านหน้า เพราะจะถือว่าเป็นการเดินไปข้างหน้า <br />
        ไม่ให้หันกลับบ้าน ขบวนจะตั้งอยู่ที่หน้าบ้านของผู้ตาย และจะเดินแห่ไปถึงป่าช้า <br />
        ญาติๆจะเดินจูงขบวนแห่ศพ โดยเรียงลำดับเครือญาติตามอาวุโสจากหน้าไปหลัง <br />
        ผู้ร่วมงานก็จะเดินเกาะขบวนแห่ พากันไปส่งผู้ตายถึงป่าช้า
      </p>
      <p className="2xl:text-xl lg:text-base text-xs absolute xl:top-[27vh] md:top-[31vh] top-[31.5vh] xl:left-[min(94.5vmin,55vw)] left-[40%] xl:leading-[0.95] leading-[0.95]">
        ในปัจจุบัันนิยมเป็นปราสาทยอดเดียว <br />
        หรือเป็นเต็นท์ผ้าใบ ก็จะมีความสวยงามน้อยลง <br />
        แต่สามารถนำไปใช้ประโยชน์ต่อได้อีก
      </p>
      <p className="2xl:text-xl lg:text-base text-xs absolute top-[16%] left-[60%] 2xl:leading-[0.95] leading-[0.95]">
        พระสงฆ์จะเป็นผู้ถือฝ้ายจูงศพอยู่หน้าขบวนแห่ <br />
        โดยจะมีพระสงฆ์จำนวน 9 รูป และหากมีการบวชหน้าไฟ <br />
        พระก็จะมาร่วมการจูงศพในขบวนแห่ด้วย
      </p>
      <p className="2xl:text-xl lg:text-base text-xs absolute top-[20%] left-[80%] 2xl:leading-[0.95] leading-[0.95]">
        ผู้นำขบวนแห่ศพจะเป็น ลูกชายคนโตของผู้เสียชีวิต <br />
        หากไม่มีลูกชาย ก็จะต้องเป็นญาติพี่น้องที่เป็นผู้ชาย โดยจะสะพาย <br />
        ย่ามที่บรรจุข้าว 100 ห่อ ถือตุง 3 หาง เพื่อนำทางผู้ตายไปสู่สวรรค์ <br />
        และ ห้ามหันหลังกลับเด็ดขาด จะต้องมอง และเดินไปข้างหน้า <br />
        เพราะเชื่อว่า หากหันหลังกลับจะทำให้วิญญาณผู้ตายกลับเข้าบ้าน
      </p>
      <div className="absolute w-full max-h-[100vh] h-[55vw] translate-y-[-50%] top-1/2 z-10 border-red-500 border-2">
        <div className="absolute left-[clamp(68vw,83vw,142vh)] pr-[1vw] xl:top-[47.5%] top-[45.5%]">
          <h1 className="relative lg:text-5xl text-3xl header-font leading-none border-b-[1px] w-fit">
            ปราสาทศพ
            <div className="absolute bottom-0 left-0 max-w-[calc(31.5vh-clamp(0.1vw,0.5vmin,8.25vw))] w-[17vw] h-[1px] bg-white origin-bottom-left rotate-[120deg]"></div>
          </h1>
          <p className="pl-2 pt-1 2xl:text-xl lg:text-base text-xs w-fit whitespace-nowrap lg:leading-[0.9] leading-[0.9]">
            ในปัจจุบัันนิยมเป็นปราสาทยอดเดียว <br />
            หรือเป็นเต็นท์ผ้าใบ ก็จะมีความสวยงามน้อยลง <br />
            แต่สามารถนำไปใช้ประโยชน์ต่อได้อีก
          </p>
        </div>

        <div className={`absolute left-[clamp(25vw,30vw,53vh)] pr-[clamp(4vw,2%,13vh)] top-[6%] z-10 border-b-[1px]`}>
          <p className="text-[2.5vmin]">ส่วนยอด</p>
          <div className="absolute bottom-[-1px] left-full w-[min(3.5vmin,4vmin)] h-[1px] bg-white origin-bottom-left rotate-[-40deg]"></div>
        </div>
        <div className="absolute left-[min(10%,37vh)] pr-[min(2.75%,13vh)] top-[23%] z-10 border-b-[1px]">
          <p className="text-[2.5vmin]">ส่วนหลังคา</p>
          <div className="absolute bottom-[-1px] left-full w-[min(3.5vmin,4vmin)] h-[1px] bg-white origin-bottom-left rotate-[-40deg]"></div>
        </div>
        <div className="absolute left-[min(10%,37vh)] pr-[1vw] top-[38%] z-10 border-b-[1px]">
          <p className="text-[2.5vmin]">ส่วนตัวปราสาท</p>
          <div className="absolute bottom-[-1px] left-full w-[6vmin] h-[1px] bg-white origin-bottom-left rotate-[-40deg]"></div>
        </div>
        <div className="absolute left-[min(13%,45vh)] pr-[1vw] top-[53%] z-10 border-b-[1px]">
          <p className="text-[2.5vmin]">ส่วนฐาน</p>
          <div className="absolute bottom-[-1px] left-full w-[6vmin] h-[1px] bg-white origin-bottom-left rotate-[40deg]"></div>
        </div>

        <div className="absolute 2xl:right-[14%] right-[3%] pl-[1vw] top-[46%] z-10 border-b-[1px]">
          <p className="text-[2.5vmin] text-left">ตุง 3 หาง</p>
          <div className="absolute bottom-[-1px] left-0 w-[6vmin] h-[1px] bg-white origin-bottom-left rotate-[130deg]"></div>
        </div>
        <div className="absolute left-[min(13%,45vh)] pr-[1vw] top-[53%] z-10 border-b-[1px]">
          <p className="text-[2.5vmin]">ส่วนฐาน</p>
          <div className="absolute bottom-[-1px] left-full w-[6vmin] h-[1px] bg-white origin-bottom-left rotate-[40deg]"></div>
        </div>
      </div>
      <img src="/images/section4/horizon/4.4/procession.png" alt="" className="w-full h-full absolute top-0 left-0 object-contain object-left" />
    </div>
  )
}

export default Panel4
