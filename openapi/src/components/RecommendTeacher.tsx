const ListTeacher = () => {
  return (
    <div>
      {/* searchbar */}
      <div className="bg-green-500 flex flex-row justify-between m-10 ">
        <div className="">อาจารย์ที่แนะนำ</div>
        <div>
          <input className="border-black border-2	 rounded-full" type="text" />
          <button className="bg-green-200 w-5 h-5 justify-center align-middle"></button>
        </div>               
      </div>
      {/*  1 list teacher */}
      <div className="flex flex-row bg-blue-500 justify-between m-10 scroll-m-5">
        {/* picture */}
        <div className="bg-black w-20 h-20"></div>
        {/* detail */}
        <div className="flex flex-col bg-yellow-200">
          {/* recommend */}
          <div className="flex">
            <div className="w-5 h-5 bg-green-200"></div>
          </div>

          <div>
            {/* name */}
            <div>ภาควิชา : ป้องกันตัวจากศาสตร์มืด</div>
            {/* department */}
            <div>ภาควิชา : ป้องกันตัวจากศาสตร์มืด</div>
          </div>

          {/* select and more */}
          <div className="flex flex-row justify-end">
            <button className=" bg-green-500 mx-5 w-20 h-5">เลือก</button>
            <button className="bg-green-500 mx-5 w-20 h-5">เพิ่มเติม</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTeacher;
