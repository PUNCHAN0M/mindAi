import ConfirmPost from "@/components/ConfirmPost";
import FormProject from "@/components/Form";
import Navbar from "@/components/Navbar";
import ListTeacher from "@/components/RecommendTeacher";
import { formSchema } from "@/modules/form";
import { useState } from "react";

export default function Book() {
  const [formFormik, setFormFormik] = useState<formSchema>();

  const handleSubmit = (value: formSchema): void => {
    setFormFormik(value);
    console.log(value);
  };
  return (
    <div>
      <Navbar/>
      <FormProject submit={handleSubmit} />
      <ListTeacher/>
      <ConfirmPost/>
    </div>
  );
}

