import FormText from "@/components/Form/FormText";
import Navbar from "@/components/navbar";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {formTextSchema } from "@/modules/form";
import ListTeacher from "@/components/Recommend/ListTeacher";
import ProjectDetail from "@/components/Confirm/ProjectDetail";
import ShowDetail from "@/components/Confirm/ShowDetail";

export default function create() {

  const handleSubmit = (values: formTextSchema): void => {

    console.log(values);
  };
  return (
    
    <div className="flex flex-col bg-white w-screen h-screen">
       <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap" rel="stylesheet" />
      {/* <Navbar /> */}
      <Navbar />
      {/* <Sidebar /> */}
      {/* <FormText submit={handleSubmit} /> */}
      <ListTeacher/>
      {/* <ProjectDetail/> */}
      
    </div>
  );
}
