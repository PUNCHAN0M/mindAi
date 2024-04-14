import { formProjectSchema, formProjectSchemaText, formSchema, formTextSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";

const initialFormValue: formSchema = {
  //   imageOfProject: "",
  nameOfProject: "",
  titleOfProject: "",
  periodStartOfProject: new Date(),
  periodEndOfProject: new Date(),
  ideaOfProject: "",
  problemOfProject: "",
  resourcesOfProject: "",
  detailOfProject: "",
};

export type FormikProps = {
  submit: (value: formTextSchema) => void;
};

const FormText = ({ submit }: FormikProps): JSX.Element => {
  const handleSubmit = (values: formTextSchema): void => {
    submit(values);
  };

  return (
    <Formik
      validationSchema={toFormikValidationSchema(formProjectSchemaText)}
      initialValues={initialFormValue}
      onSubmit={handleSubmit}
    >
      {({ values, dirty }) => (
        <Form>
          {/* insert image */}
          <div className="text-black  flex flex-row-2 justify-end m-12 ">
            {/* insert text and date */}
            <div className="bg-white p-10 rounded-lg flex flex-col basis-3/5 drop-shadow-md ">
              <div className="flex bg-white justify-start ">
                <div className="flex flex-row space-x-5 pb-5">
                  {/* nameproject */}
                  <div className="flex flex-col bg-white  justify-end">
                    <ErrorMessage name="nameOfProject" className="" />
                    <label className="flex">ชื่องานวิจัย</label>
                    <Field
                      name="nameOfProject"
                      className="flex max-h-7 min-w-80 rounded-md border-[1px] border-gray-100"
                    />
                  </div>

                  {/* typeproject and date*/}
                  <div className="flex flex-col  justify-end  bg-white">
                    <ErrorMessage name="titleOfProject" className="" />
                    <Field
                      name="titleOfProject"
                      as="select"
                      className="min-h-7 rounded-md border-[1px] border-gray-100"
                    >
                      <option value="None">กรุณาเลือกหัวข้อ</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Field>
                  </div>
                  <div className="flex flex-col  justify-end bg-white">
                    <ErrorMessage name="periodStartOfProject" className="" />
                    <label>เวลาเริ่มต้น</label>
                    <Field
                      name="periodStartOfProject"
                      type="date"
                      className="max-h-7 rounded-md border-[1px] border-gray-100"
                    />
                  </div>
                  <div className="flex flex-col  justify-end bg-white">
                    <ErrorMessage name="periodEndOfProject" className="" />
                    <label>เวลาสิ้นสุด</label>
                    <Field
                      name="periodEndOfProject"
                      type="date"
                      className="max-h-7 rounded-md border-[1px] border-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* text input */}
              <div className="bg-white space-y-5">
                <div className="flex flex-col">
                  <ErrorMessage name="ideaOfProject" className="" />
                  <label>ไอเดีย</label>
                  <Field
                    name="ideaOfProject"
                    className="max-h-7 rounded-md border-[1px] border-gray-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="problemOfProject" className="" />
                  <label>ปัญหาที่พบ</label>
                  <Field
                    name="problemOfProject"
                    className="max-h-7 rounded-md border-[1px] border-gray-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="resourcesOfProject" className="" />
                  <label>ทรัพยากร</label>
                  <Field
                    name="resourcesOfProject"
                    className="max-h-7 rounded-md border-[1px] border-gray-100"
                  />
                </div>

                <div className="flex flex-col">
                  <ErrorMessage name="DetailOfProject" className="" />
                  <label>รายละเอียดเพิ่มเติม</label>
                  <Field
                    name="detailOfProject"
                    className="max-h-7 rounded-md border-[1px] border-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormText;
