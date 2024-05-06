import FormText from "@/components/Form/FormText";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { formStudentSchema, formTextSchema } from "@/modules/form";
import ListTeacher from "@/components/Recommend/ListTeacher";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import ShowDetail from "@/components/Confirm/ShowDetail";
import FormStudent from "@/components/Form/FormStudent";
import ProcessBar from "@/components/ProcessBar";
import { image } from "@nextui-org/theme";
import { number } from "zod";

export default function create() {
  const maxPicture :number = 5

  const handleSubmit = (
    values: formStudentSchema,
    tagsOfProjectStudent: string[],
    imageOfProject: any[]
  ): void => {
    //value ที่ได้จากการกรอกฟอร์ม
    console.log(values);
    console.log(`tags : ${tagsOfProjectStudent}`); //ใน list คือ tags ที่ถูกเลือก
    console.log(`image pass : ${imageOfProject}`);


  }
  return (
    <div className="flex flex-col bg-white w-screen h-screen overflow-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <Sidebar />
      <Navbar />
      <ProcessBar />
      <FormStudent submitStd={handleSubmit} />
    </div>
  );
}
