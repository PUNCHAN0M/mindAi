import clsx from "clsx";
import { useState } from "react";

const ProcessBar2 = () => {
  const [handlePreviousBtn, setHandlePreviousBtn] = useState<string>('confirm');
  return (
    <div className="flex flex-col justify-center items-center mt-[10vh]">
      {/* <Navbar /> */}
      <div
        className={clsx("flex bg-gray-150 h-[3px] w-[12vw] mb-[1.4%] absolute")}
      ></div>
      {handlePreviousBtn === 'confirm'? <div
        className={clsx(
          "flex bg-blue-400 h-[3px] w-[12vw] mb-[1.4%] absolute ",
          handlePreviousBtn === 'confirm' ? "" : "",
        )}
      ></div>:<></>}
      <div className="flex w-[15vw] justify-between items-center">
        <div className="flex flex-col items-center w-[4vw]">
          <div
            className={clsx(
              "flex  w-[24px] h-[24px] rounded-full border-[3px] border-blue-400 text-center absolute justify-center items-center",
              handlePreviousBtn === 'form' ? "bg-white text-black" : "",
              handlePreviousBtn === 'confirm' ? "bg-blue-400 text-white" : "",
            )}
          >
            1
          </div>
          <div className="flex text-xs mt-[4vh]">กรอกข้อมูล</div>
        </div>
        <div className="flex flex-col items-center w-[4vw]">
          <div
            className={clsx(
              "flex  w-[24px] h-[24px] rounded-full border-[3px] text-center  absolute justify-center items-center ",
              handlePreviousBtn === 'form'
                ? "border-gray-150 bg-gray-150 text-gray-200 "
                : "",
              handlePreviousBtn === 'confirm' ? "border-blue-400 bg-white" : "",
            )}
          >
            2
          </div>
          <div className="flex text-xs mt-[4vh]">แนะนำ</div>
        </div>
      </div>
    </div>
  );
};
export default ProcessBar2;
