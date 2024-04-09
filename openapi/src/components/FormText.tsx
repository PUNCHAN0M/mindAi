import { formProjectSchema, formSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "./SVG/Svgimg";

const initialFormValue: formSchema = {
  //   imageOfProject: "",
  nameOfProject: "",
  titleOfProject: "",
  periodStartOfProject: new Date(),
  periodEndOfProject: new Date(),
  ideaOfProject: "",
  problemOfProject: "",
  resourcesOfProject: "",
  DetailOfProject: "",
};

export type FormikProps = {
  submit: (value: formSchema) => void;
};

const FormText = ({ submit }: FormikProps): JSX.Element => {
  const handleSubmit = (values: formSchema): void => {
    submit(values);
  };

  return (
    <Formik
      validationSchema={toFormikValidationSchema(formProjectSchema)}
      initialValues={initialFormValue}
      onSubmit={handleSubmit}
    >
      {({ values, dirty }) => (
        <Form>
          {/* insert image */}
          <div className="text-black  flex flex-row-2 justify-between m-12 ">
            <div>
              <div className="flex flex-col bg-blue-100 justify-center items-center border-black  rounded-lg min-h-72 w-72 drop-shadow-md">
                <ErrorMessage name="file" className="" />
                <input type="file" name="imageOfProject" />
              </div>
              <div className="flex flex-row justify-between">
                <Svgimg/>
                <span className="font-NotoSansThai">
                  ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 800 M
                </span>
              </div>
            </div>
            {/* insert text and date */}
            <div className="bg-grey-200 p-10 rounded-lg flex flex-col basis-3/5 drop-shadow-md ">
              <div className="flex bg-green-200 justify-start ">
                <div className="flex flex-row space-x-5 pb-5">
                  {/* nameproject */}
                  <div className="flex flex-col bg-blue-400  justify-end">
                    <ErrorMessage name="nameOfProject" className="" />
                    <label className="flex">ชื่องานวิจัย</label>
                    <Field
                      name="nameOfProject"
                      className="flex max-h-7 min-w-80 rounded-md border-[1px] border-grey-100"
                    />
                  </div>

                  {/* typeproject and date*/}
                  <div className="flex flex-col  justify-end  bg-blue-300">
                    <ErrorMessage name="titleOfProject" className="" />
                    <Field
                      name="titleOfProject"
                      as="select"
                      className="min-h-7 rounded-md border-[1px] border-grey-100"
                    >
                      <option value="None">กรุณาเลือกหัวข้อ</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Field>
                  </div>
                  <div className="flex flex-col  justify-end bg-blue-400">
                    <ErrorMessage name="periodStartOfProject" className="" />
                    <label>เวลาเริ่มต้น</label>
                    <Field
                      name="periodStartOfProject"
                      className="max-h-7 rounded-md border-[1px] border-grey-100"
                    />
                  </div>
                  <div className="flex flex-col  justify-end bg-blue-300">
                    <ErrorMessage name="periodEndOfProject" className="" />
                    <label>เวลาสิ้นสุด</label>
                    <Field
                      name="periodEndOfProject"
                      className="max-h-7 rounded-md border-[1px] border-grey-100"
                    />
                  </div>
                </div>
              </div>

              {/* text input */}
              <div className="bg-red space-y-5">
                <div className="flex flex-col">
                  <ErrorMessage name="ideaOfProject" className="" />
                  <label>ไอเดีย</label>
                  <Field
                    name="ideaOfProject"
                    className="max-h-7 rounded-md border-[1px] border-grey-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="problemOfProject" className="" />
                  <label>ปัญหาที่พบ</label>
                  <Field
                    name="problemOfProject"
                    className="max-h-7 rounded-md border-[1px] border-grey-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="resourcesOfProject" className="" />
                  <label>ทรัพยากร</label>
                  <Field
                    name="resourcesOfProject"
                    className="max-h-7 rounded-md border-[1px] border-grey-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="DetailOfProject" className="" />
                  <label>รายละเอียดเพิ่มเติม</label>
                  <Field
                    name="DetailOfProject"
                    className="max-h-7 rounded-md border-[1px] border-grey-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end bg-red">
            <button
              type="submit"
              className="bg-yellow-200 rounded-full w-28 mr-10 "
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormText;
