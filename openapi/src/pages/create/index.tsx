import ReccomendTeacher from "@/components/Confirm/ReccomendTeacher";
import FormImage from "@/components/Form/FormImage";
import FormText from "@/components/Form/FormText";
import ShowDetail from "@/components/Recommend/ShowDetail";
import clsx from "clsx";
import { useState } from "react";

export default function create() {
  const [handleNextBtn, sethandleNextBtn] = useState<number>(0);
  const [handlePreviousBtn, setHandlePreviousBtn] = useState<number>(0);
  const handlePrevious = () => {
    setHandlePreviousBtn(handlePreviousBtn - 1);
  };

  const handleNext = () => {
    setHandlePreviousBtn(handlePreviousBtn + 1);
  };
  return (
    <div className="flex flex-col bg-white w-screen h-screen">
      {/* <Navbar /> */}
      <div className="flex px-5 w-full justify-center">
        <div className="flex  items-center gap-x-[150px] justify-center">
          <div
            className={clsx(
              "flex bg-gray-150 h-[3px] w-[450px]  mb-5 absolute "
            )}
          ></div>
          <div
            className={clsx(
              "flex bg-blue-400 h-[3px]  mb-5  absolute ",
              handlePreviousBtn === 1 ? "w-[220px] items-start mr-[200px]" : "",
              handlePreviousBtn === 2 ? "w-[450px]" : ""
            )}
          ></div>
          <div className="flex flex-col items-center w-[70px]">
            <div
              className={clsx(
                "flex  w-[24px] h-[24px] rounded-full border-[3px] border-blue-400 text-center absolute justify-center items-center",
                handlePreviousBtn === 0 ? "bg-white text-black" : "",
                handlePreviousBtn === 1 ? "bg-blue-400 text-white" : "",
                handlePreviousBtn === 2 ? "bg-blue-400 text-white" : ""
              )}
            >
              1
            </div>
            <div className="flex text-xs mt-7">กรอกข้อมูล</div>
          </div>
          <div className="flex flex-col items-center w-[70px]">
            <div
              className={clsx(
                "flex  w-[24px] h-[24px] rounded-full border-[3px] text-center  absolute justify-center items-center ",
                handlePreviousBtn === 0
                  ? "border-gray-150 bg-gray-150 text-gray-200 "
                  : "",
                handlePreviousBtn === 1 ? "border-blue-400 bg-white" : "",
                handlePreviousBtn === 2
                  ? "border-blue-400 bg-blue-400 text-white"
                  : ""
              )}
            >
              2
            </div>
            <div className="flex text-xs mt-7">แนะนำ</div>
          </div>
          <div className="flex flex-col items-center w-[70px]">
            <div
              className={clsx(
                "flex  bg-white w-[24px] h-[24px] rounded-full border-[3px] text-center absolute justify-center items-center ",
                handlePreviousBtn === 0
                  ? "border-gray-150 bg-gray-150 text-gray-200"
                  : "",
                handlePreviousBtn === 1
                  ? "border-gray-150 bg-gray-150 text-gray-200"
                  : "",
                handlePreviousBtn === 2 ? "border-blue-400 bg-blue-400" : ""
              )}
            >
              3
            </div>
            <div className="flex text-xs mt-7">ยืนยัน</div>
          </div>
        </div>
      </div>
      {handlePreviousBtn === 0 && (
        <div className="flex items-start justify-center ">
          <FormImage />
          <FormText />
        </div>
      )}
      {handlePreviousBtn === 1 && <div></div>}
      {handlePreviousBtn === 2 && (
        <div className="flex flex-row justify-between">
          <ReccomendTeacher />
          <ShowDetail />
        </div>
      )}
      <div
        className={clsx(
          "flex flex-row justify-end",
          handlePreviousBtn === 0 ? "justify-end" : "justify-between"
        )}
      >
        <button
          className={clsx(
            "bg-gray-100 rounded-full",
            handlePreviousBtn === 0 ? "hidden" : ""
          )}
          onClick={handlePrevious}
        >
          ย้อนกลับ
        </button>
        <button
          className={clsx(
            "bg-yellow-100 rounded-full",
            handlePreviousBtn === 2 ? "hidden" : ""
          )}
          onClick={handleNext}
        >
          ถัดไป
        </button>
      </div>
    </div>
  );
}
