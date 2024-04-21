import { formProjectSchemaText, formTextSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import FormImage from "./FormImage";

const initialFormValue: formTextSchema = {
  nameOfProject: "",
  titleOfProject: "",
  periodStartOfProject: "",
  periodEndOfProject: "",
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
      {({ values, dirty, touched, errors }) => (
        <Form>
          <div className="flex flex-col text-black text-[15px] bg-green-100 h-screen">
            {/* Start Form img and text */}
            <div className="flex justify-center items-start h-[65%] mt-[8%]">
              <div className="flex w-[30%]">
                <FormImage />
              </div>

              {/* Start insert text and date */}
              <div className="flex flex-col lg:text-[12px] bg-white rounded-xl p-[40px] w-[60%] h-[100%] overflow-auto">
                {/* Group line 1 */}
                <div className="flex bg pb-[10px] ">
                  <div className="flex space-x-[10px]">
                    {/* Start nameproject Feild*/}
                    <div className="flex flex-col ">
                      <label className="flex">ชื่องานวิจัย</label>
                      <Field
                        name="nameOfProject"
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] ",
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

                    {/* Start titleOfProject Feild*/}
                    <div className="flex flex-col">
                      <label>ประเภทงานวิจัย</label>
                      <Field
                        name="titleOfProject"
                        component="select"
                        id="location"
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.titleOfProject ? "border-gray-100" : "",
                          touched.titleOfProject && errors.titleOfProject
                            ? "border-red"
                            : "",
                          touched.titleOfProject && !errors.titleOfProject
                            ? "border-green-200"
                            : ""
                        )}
                        placeholder="Choose"
                      >
                        <option value="" disabled hidden>
                          Choose
                        </option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="com">Computer</option>
                      </Field>
                      <ErrorMessage
                        name="titleOfProject"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End titleOfProject Feild*/}
                    {/* Start periodStartOfProject Feild*/}

                    <div className="flex flex-col">
                      <label>เวลาเริ่มต้น</label>
                      <Field
                        name="periodStartOfProject"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.periodStartOfProject
                            ? "border-gray-100"
                            : "",
                          touched.periodStartOfProject &&
                            errors.periodStartOfProject
                            ? "border-red"
                            : "",
                          touched.periodStartOfProject &&
                            !errors.periodStartOfProject
                            ? "border-green-200"
                            : ""
                        )}
                      />
                      <ErrorMessage
                        name="periodStartOfProject"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End periodStartOfProject Feild*/}
                    {/* Strat periodEndOfProject Feild*/}

                    <div className="flex flex-col">
                      <label>เวลาสิ้นสุด</label>
                      <Field
                        name="periodEndOfProject"
                        type="date"
                        min={
                          values.periodStartOfProject ||
                          new Date().toISOString().split("T")[0]
                        }
                        className={clsx(
                          "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.periodEndOfProject ? "border-gray-100" : "",
                          touched.periodEndOfProject &&
                            errors.periodEndOfProject
                            ? "border-red"
                            : "",
                          touched.periodEndOfProject &&
                            !errors.periodEndOfProject
                            ? "border-green-200"
                            : ""
                        )}
                      />
                      <ErrorMessage
                        name="periodEndOfProject"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End periodEndOfProject Feild*/}
                  </div>
                </div>
                {/* End Group line 1 */}
                {/* Start text input */}
                <div className="flex flex-col bg-white space-y-[10px]">
                  <div className="flex flex-col">
                    <label>ไอเดีย</label>
                    <Field
                      name="ideaOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.ideaOfProject ? "border-gray-100" : "",
                        touched.ideaOfProject && errors.ideaOfProject
                          ? "border-red"
                          : "",
                        touched.ideaOfProject && !errors.ideaOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="ideaOfProject"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label>ปัญหา</label>
                    <Field
                      name="problemOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.problemOfProject ? "border-gray-100" : "",
                        touched.problemOfProject && errors.problemOfProject
                          ? "border-red"
                          : "",
                        touched.problemOfProject && !errors.problemOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="problemOfProject"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  {/*Start resource Feild*/}
                  <div className="flex flex-col">
                    <label>ทรัพยากรณ์</label>
                    <Field
                      name="resourcesOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.resourcesOfProject ? "border-gray-100" : "",
                        touched.resourcesOfProject && errors.resourcesOfProject
                          ? "border-red"
                          : "",
                        touched.resourcesOfProject && !errors.resourcesOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="resourcesOfProject"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  {/*End resource Feild*/}
                  {/*Start resource detail*/}
                  <div className="flex flex-col">
                    <label>รายละเอียดเพิ่มเติม</label>
                    <Field
                      as="textarea"
                      name="detailOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 border-gray-100 ",
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
                  {/*End resource detail*/}
                </div>
                {/* End text input */}
              </div>
              {/* End insert text and date */}
            </div>
            {/* End Form img and text */}

            {/* Start Next Btn  */}
            <div className={clsx("flex justify-end")}>
              <button
                className={clsx("flex bg-yellow-100 justify-center rounded-full mr-[5%] mt-[10px] w-[8%] ")}
                type="submit"
              >
                ถัดไป
              </button>
            </div>
            {/* End Next Btn  */}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormText;
