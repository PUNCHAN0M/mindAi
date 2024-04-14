import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";
import { formImageSchema } from "@/modules/form";

// const FieldalFormImageValue: formImageSchema = {
//   imageOfProject: "",
// };

const FormImage = (): JSX.Element => {
  return (

      <div className="items-center justify-center pt-12 ">
        <div className="text-black  flex flex-row-2 justify-between ">
          <div>
            <div className="flex flex-col bg-blue-100 justify-center items-center border-black  rounded-lg h-[271px] w-[378px] drop-shadow-md"></div>
            <div className="flex flex-row justify-between">
              <Svgimg />
              <span className="text-[8px] pt-2">
                ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 800 M
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FormImage;
