import { formProjectSchemaText, formTextSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import FormImage from "./FormImage";

const initialFormValue: formTextSchema = {
  nameOfProject: "",
  typeOfProject: "",
  departmentOfProject: "",
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
      {({ values, dirty, touched, errors }) => (
        <Form>
          <div className="flex flex-col text-black text-[0.8vw] bg-white-100 h-screen items-center">
            <div className="flex flex-col mt-[10%]">
              <div>
                ค้นหา งานวิจัยที่ใกล้เคียงกับงานวิจัย ใน
                มหาวิทยาลัยสงขลานครินทร์
              </div>
            </div>
            {/* Start insert text and date */}
            <div className="flex flex-col bg-white rounded-xl p-[5%] w-[60%] h-[50%] overflow-auto mt-[2%] shadow-md">
              {/* Group line 1 */}
              <div className="flex pb-[10px] space-x-[5%]">
                {/* Start nameproject Feild*/}
                <div className="flex flex-col w-[100%]">
                  <label className="flex">ชื่องานวิจัย</label>
                  <Field
                    name="nameOfProject"
                    className={clsx(
                      " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] w-[100% ]",
                      !touched.nameOfProject ? "border-gray-100" : "",
                      touched.nameOfProject && errors.nameOfProject
                        ? "border-red"
                        : "",
                      touched.nameOfProject && !errors.nameOfProject
                        ? "border-green-200"
                        : ""
                    )}
                  />
                  <ErrorMessage
                    name="nameOfProject"
                    component="div"
                    className="text-red text-[10px]"
                  />
                </div>
                {/* End nameproject Feild*/}

                {/* Start departmentOfProject Feild */}

                <div className="flex flex-col">
                  <label>สาขา</label>
                  <Field
                    name="departmentOfProject"
                    component="select"
                    placeholder="กรุณาเลือกสาขา"
                    className={clsx(
                      " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                      !touched.departmentOfProject ? "border-gray-100" : "",
                      touched.departmentOfProject && errors.departmentOfProject
                        ? "border-red"
                        : "",
                      touched.departmentOfProject && !errors.departmentOfProject
                        ? "border-green-200"
                        : ""
                    )}
                  >
                    <option value="" disabled hidden>
                    กรุณาเลือกสาขา
                    </option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="com">Computer</option>
                  </Field>
                  <ErrorMessage
                    name="departmentOfProject"
                    component="div"
                    className="text-red text-[10px]"
                  />
                </div>
                {/* End departmentOfProject Feild*/}
                {/* Start typeOfProject Feild*/}
                <div className="flex flex-col">
                  <label>หมวดหมู่</label>
                  <Field
                    name="typeOfProject"
                    component="select"
                    className={clsx(
                      " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                      !touched.typeOfProject ? "border-gray-100" : "",
                      touched.typeOfProject && errors.typeOfProject
                        ? "border-red"
                        : "",
                      touched.typeOfProject && !errors.typeOfProject
                        ? "border-green-200"
                        : ""
                    )}
                    placeholder="กรุณาเลือกหมวดหมู่"
                  >
                    <option value="" hidden>
                    กรุณาเลือกหมวดหมู่
                    </option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="com">Computer</option>
                  </Field>
                  <ErrorMessage
                    name="typeOfProject"
                    component="div"
                    className="text-red text-[10px]"
                  />
                </div>
                {/* End typeOfProject Feild */}
              </div>
              {/* End Group line 1 */}
              {/* Start text input */}
              <div className="flex flex-col bg-white space-y-[10px]">
                <div className="flex flex-col">
                  <label>รายละเอียดเพิ่มเติม</label>
                  <Field
                    name="detailOfProject"
                    className={clsx(
                      "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                      !touched.detailOfProject ? "border-gray-100" : "",
                      touched.detailOfProject && errors.detailOfProject
                        ? "border-red"
                        : "",
                      touched.detailOfProject && !errors.detailOfProject
                        ? "border-green-200"
                        : ""
                    )}
                  />
                  <ErrorMessage
                    name="detailOfProject"
                    component="div"
                    className="text-red text-[10px]"
                  />
                </div>
              </div>
              {/* End text input */}
              {/* Start Next Btn  */}
              <div className={clsx("flex justify-center")}>
                <button
                  className={clsx(
                    "flex bg-yellow-100 justify-center rounded-full mt-[10%]  w-[20%] p-[0.8%]"
                  )}
                  type="submit"
                >
                  ค้นหาอาจารย์ที่แนะนำ
                </button>
              </div>
              {/* End Next Btn  */}
            </div>
            {/* End insert text and date */}
          </div>
          {/* End Form img and text */}
        </Form>
      )}
    </Formik>
  );
};

export default FormText;
