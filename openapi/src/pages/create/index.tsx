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
import { formProjectSchemaText, formTextSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Dropdown from "@/components/Form/Dropdown";
import { toFormikValidationSchema } from "zod-formik-adapter";


export default function create() {
  const [handlePreviousBtn, setHandlePreviousBtn] = useState<number>(0);
  const handlePrevious = () => {
    setHandlePreviousBtn(handlePreviousBtn - 1);
  };

  const handleNext = () => {
    setHandlePreviousBtn(handlePreviousBtn + 1);
  };

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
