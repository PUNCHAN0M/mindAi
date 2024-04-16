import clsx from "clsx";
import { useState } from "react";
import FormImage from "./Form/FormImage";
import FormText from "./Form/FormText";
import ListTeacher from "./Recommend/ListTeacher";
import ProjectDetail from "./Confirm/ProjectDetail";
import ShowDetail from "./Confirm/ShowDetail";
import { handlePreviousBtn } from "@/modules/processBar";



const ProcessBar = ({handlePreviousBtn}:handlePreviousBtn) => {
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
                "flex  border-gray-150 w-[24px] h-[24px] rounded-full border-[3px] text-center absolute justify-center items-center ",
                handlePreviousBtn === 0
                  ? "border-gray-150 bg-gray-150 text-gray-200"
                  : "",
                handlePreviousBtn === 1
                  ? "border-gray-150 bg-gray-150 text-gray-200"
                  : "",
                handlePreviousBtn === 2
                  ? "border-blue-400 z-10 bg-gray-150 text-gray-200"
                  : ""
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
      {handlePreviousBtn === 1 && (
        <div>
          <ListTeacher />
        </div>
      )}
      {handlePreviousBtn === 2 && (
        <div className="flex flex-row justify-between">
          <ProjectDetail />
          <ShowDetail />
        </div>
      )}
    </div>
  );
};
export default ProcessBar;
