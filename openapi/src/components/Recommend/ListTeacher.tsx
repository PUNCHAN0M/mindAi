import SvgLike from "../SVG/SvgLike";
import SvgSearch from "../SVG/SvgSearch";

const ListTeacher = () => {
  return (
    <div className="bg-red">
      {/* searchbar */}
      <div className="bg-green-500 flex flex-row justify-between m-10 ">
        <div className="">อาจารย์ที่แนะนำ</div>
        <div className="flex flex-row">
          <input className="border-black border-2	 rounded-full" type="text" />
          <SvgSearch />
        </div>
      </div>
      {/*  1 list teacher */}
      <div className="flex flex-row bg-blue-500 justify-between m-10 scroll-m-5">
        {/* picture */}
        <div className="bg-black w-[73px] h-[73px] rounded-full"></div>
        {/* detail */}
        <div className="flex flex-col bg-yellow-200">
          {/* recommend */}
          <div className="flex justify-end float-right">
            <SvgLike />
          </div>

          <div>
            {/* name */}
            <div>ภาควิชา : ป้องกันตัวจากศาสตร์มืด</div>
            {/* department */}
            <div>ภาควิชา : ป้องกันตัวจากศาสตร์มืด</div>
          </div>

          {/* select and more */}
          <div className="flex flex-row justify-end">
            <button className=" bg-green-200 mx-5 w-20 h-5 rounded-full">เลือก</button>
            <button className="bg-blue-100 mx-5 w-20 h-5 rounded-full">เพิ่มเติม</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTeacher;
