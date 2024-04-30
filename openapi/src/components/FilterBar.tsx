import SvgFilter from "./SVG/SvgFilter";
import SvgSearch from "./SVG/SvgSearch";

const FilterBar = () => {
  return (
    <div className="flex flex-col w-[35vw] h-screen bg-green-500 items-center space-y-[5vh]">
      {/* Start searchbar */}
      <div className="flex flex-row mt-[5vh] items-center space-x-[1vw]">
        <input type="text" className="rounded-full w-[20vw] h-[4vh]" />
        <SvgSearch />
      </div>
      {/* End searchbar */}

      {/* Start Filter */}
      <div className="flex flex-col justify-center">
        {/* ตัวกรอง */}
        <div className="flex felx-row justify-center text-[2vh] items-center space-x-[1vw]">
          <div className="flex justify-center rounded-full bg-gray-100 w-[10vw] h-[3.5vh]">
            ตัวกรอง
          </div>
          <SvgFilter />
        </div>
        {/* 6 filter */}
        <div className="flex flex-wrap bg-green-200 w-[25vw] h-[20vh] justify-center mt-[5vh]">
          <div className="flex w-[10vw] h-[4vh] ">
            <select name="" id="" className="w-full rounded-full border-[0.3vh] items-center ">
              <option value="" className="hidden">
                คณะ
              </option>
              <option value="">engineer</option>
              <option value="">docter</option>
            </select>
          </div>
          <div className="flex w-[10vw] h-[4vh]">
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex w-[10vw] h-[4vh]">
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex w-[10vw] h-[4vh]">
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex w-[10vw] h-[4vh]">
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="flex w-[10vw] h-[4vh]">
            <select name="" id="">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      {/* End  Filter */}

      {/* Start Filter date */}
      <div className="flex flex-row space-x-[5vw]">
        <input
          type="date"
          name=""
          id=""
          className="flex rounded-full border-[0.2vw] h-[4.5vh]"
        />
        <input
          type="date"
          name=""
          id=""
          className="flex rounded-full border-[0.2vw] h-[4.5vh]"
        />
      </div>

      {/* End  Filter date */}

      {/* Start Show  */}
      <div className="flex flex-row ">
        <input type="checkbox" value="" content="โพสต์ที่ต้องการอาจารย์" />
        <input type="checkbox" value="" content="โพสต์ที่ต้องการนักศึกษา" />
      </div>
      {/* End  Show  */}

      {/* Start btn create*/}
      <div className="flex flex-row bg-blue-100 w-[15vw] h-[5vh] justify-center items-center rounded-full p-[0.5vh]">
        <button type="button">สร้างโพสต์งานวิจัย +</button>
      </div>
      {/* End  btn create*/}
    </div>
  );
};
export default FilterBar;
