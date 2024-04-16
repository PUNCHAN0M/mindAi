import ReccomendTeacher from "@/components/Confirm/ProjectDetail";
import FormImage from "@/components/Form/FormImage";
import FormText from "@/components/Form/FormText";
import ListTeacher from "@/components/Recommend/ListTeacher";
import Navbar from "@/components/Navbar";
import ListPending from "@/components/PendingProject/ListPending";
import ShowDetail from "@/components/Confirm/ShowDetail";
import clsx from "clsx";
import { useState } from "react";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import Sidebar from "@/components/Sidebar";
import ProcessBar from "@/components/ProcessBar";

export default function create() {
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
      <Navbar/>
      <Sidebar/>
      <ProcessBar handlePreviousBtn={handlePreviousBtn}/>
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
