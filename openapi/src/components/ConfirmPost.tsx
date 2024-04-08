const ConfirmPost = () => {
  return (
    <div className="">
      {/* edit */}
      <div>
        <img src="" alt="" />
        <button>แก้ไขโพสต์</button>
      </div>

      {/* card project */}
      <div className="bg-green-500 rounded-3xl flex flex-col ">
        <div>ชื่องานวิจัย</div>
        {/*image and detail */}
        <div className="flex flex-row bg-white justify-start">
          <div className="flex bg-grey-50 w-[315px] h-[256px] m-4 rounded-2xl">
            image
          </div>
          <div className="m-10 space-y-8">
            <div className="flex flex-row">
              <button className="">eye</button>
              <div>ชื่องานวิจัย</div>
            </div>
            <div className="flex flex-row">
              <button>eye</button>
              <div>ไอเดีย</div>
            </div>
            <div className="flex flex-row">
              <button>eye</button>
              <div>ปัญหาที่พบ</div>
            </div>
            <div className="flex flex-row">
              <button>eye</button>

              <div>ทรัพยากร</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between m-10">
          <div className="felx flex-row">
            <div className="flex">img</div>
            <span className="flex">นายสิทธา สหรรม</span>
            <span className="flex">
              <img src="" alt="" />
              <span>085-123401234</span>
              <button>eye</button>
            </span>

            <span>
              <img src="" alt="" />
              <span>sitasahahum@gmail.com</span>
              <button>eye</button>
            </span>
          </div>
          <button>เข้าดู</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPost;
