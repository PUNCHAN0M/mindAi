import SvgEnvelope from "../SVG/SvgEnvelope";
import SvgEyeOpengray from "../SVG/SvgEyeOpenGrey";
import SvgEyeOpenWhite from "../SVG/SvgEyeOpenWhite";
import SvgEyeOpen from "../SVG/SvgEyeOpenWhite";
import SvgPen from "../SVG/SvgPen";
import SvgPhone from "../SVG/SvgPhone";

const ReccomendTeacher = () => {
  return (
    <div className="">
      {/* edit */}
      <div className="flex">
        <SvgPen/>
        <button>แก้ไขโพสต์</button>
      </div>

      {/* card project */}
      <div className="bg-green-500 rounded-3xl flex flex-col ">
        <div>ชื่องานวิจัย</div>
        {/*image and detail */}
        <div className="flex flex-row bg-white justify-start">
          <div className="flex bg-gray-50 w-[315px] h-[256px] m-4 rounded-2xl">
            image
          </div>
          <div className="m-10 space-y-8">
            <div className="flex flex-row">
              <SvgEyeOpengray />
              <div>ชื่องานวิจัย</div>
            </div>
            <div className="flex flex-row">
              <SvgEyeOpengray />
              <div>ไอเดีย</div>
            </div>
            <div className="flex flex-row">
              <SvgEyeOpengray />
              <div>ปัญหาที่พบ</div>
            </div>
            <div className="flex flex-row">
              <SvgEyeOpengray />

              <div>ทรัพยากร</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between m-10">
          <div className="flex flex-row gap-10 items-center bg-red ">
            {/* profile */}
            <div className="flex w-[56px] h-[56px] rounded-full border-[3px] border-white">
              img
            </div>
            {/* name */}
            <div className="flex flex-row">นายสิทธา สหรรม</div>
            {/* tel */}
            <div className="flex flex-row">
              <SvgPhone />
              <div>085-123401234</div>
              <SvgEyeOpenWhite />
            </div>
            {/* email */}
            <div className="flex">
              <SvgEnvelope />
              <div>sitasahahum@gmail.com</div>
              <SvgEyeOpen />
            </div>
          </div>

          {/* save btn */}
          <button className="bg-blue-50 rounded-full p-5">บันทึก</button>
        </div>
      </div>
    </div>
  );
};

export default ReccomendTeacher;
