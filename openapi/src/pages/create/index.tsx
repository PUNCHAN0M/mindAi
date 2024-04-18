import FormText from "@/components/Form/FormText";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {formTextSchema } from "@/modules/form";



export default function create() {

  const handleSubmit = (values: formTextSchema): void => {
    console.log(values);

  };
  return (
    <div className="flex flex-col bg-white w-screen h-screen">
      {/* <Navbar /> */}
      <Navbar />
      <Sidebar />
      <FormText submit={handleSubmit} />
    </div>
  );
}
