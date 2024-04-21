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
          <div className="flex flex-col  text-black ">
            <div className="flex flex-row-2 justify-between items-start xl:ml-[125px] lg:ml-[90px]  ">
              <div className="flex xl:mt-[30px] lg:mt-[25px]">
                <FormImage />
              </div>

              {/* Start insert text and date */}
              <div className="bg-white  rounded-lg flex flex-col w-full drop-shadow-md xl:mr-[50px] xl:pb-[50px] lg:pb-[50px] lg:mr-[45px] lg:mb-[45px] xl:h-full xl:w-[900px] lg:w-[620px] lg:h-[380px] items-start">
                {/* Group line 1 */}
                <div className="flex bg-white xl:pt-[40px] xl:pl-[40px] xl:pb-[20px] lg:pt-[40px] lg:pl-[40px] lg:pb-[20px]">
                  <div className="flex flex-row space-x-[20px]">
                    {/* nameproject */}
                    <div className="flex flex-col bg-white">
                      <ErrorMessage
                        name="nameOfProject"
                        component="div"
                        className="text-red-500"
                      />
                      <label className="flex">ชื่องานวิจัย</label>
                      <Field
                        name="nameOfProject"
                        className={clsx(
                          " flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100 lg:w-[245px] xl:w-[275px]",
                          !touched.nameOfProject ? "border-gray-100" : "",
                          touched.nameOfProject && errors.nameOfProject
                            ? "border-red"
                            : "",
                          touched.nameOfProject && !errors.nameOfProject
                            ? "border-green-200"
                            : ""
                        )}
                      />
                    </div>

                    {/* typeproject and date*/}
                    <div className="flex flex-col  justify-end items-center bg-white">
                      <ErrorMessage name="titleOfProject" className="" />
                      <label>ประเภทงานวิจัย</label>
                      <Field
                        name="titleOfProject"
                        component="select"
                        id="location"
                        className={clsx(
                          " flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
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
                    </div>
                    <div className="flex flex-col  justify-end bg-white">
                      <ErrorMessage name="periodStartOfProject" className="" />
                      {/* this is fix today */}
                      <label>เวลาเริ่มต้น</label>
                      <Field
                        name="periodStartOfProject"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={clsx(
                          " flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
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
                    </div>
                    <div className="flex flex-col  justify-end bg-white">
                      <ErrorMessage name="periodEndOfProject" className="" />
                      <label>เวลาสิ้นสุด</label>
                      <Field
                        name="periodEndOfProject"
                        type="date"
                        min={
                          values.periodStartOfProject ||
                          new Date().toISOString().split("T")[0]
                        }
                        className={clsx(
                          "flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
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
                    </div>
                  </div>
                </div>
              {/* End insert text and date */}

                {/* Start text input */}
                <div className="bg-white space-y-5 xl:pl-[40px] lg:pl-[40px] w-full">
                  <div className="flex flex-col mr-[40px]">
                    <ErrorMessage name="ideaOfProject" className="" />
                    <label>ไอเดีย</label>
                    <Field
                      name="ideaOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.ideaOfProject ? "border-gray-100" : "",
                        touched.ideaOfProject && errors.ideaOfProject
                          ? "border-red"
                          : "",
                        touched.ideaOfProject && !errors.ideaOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                  </div>

                  <div className="flex flex-col mr-[40px]">
                    <ErrorMessage name="ideaOfProject" className="" />
                    <label>ปัญหา</label>
                    <Field
                      name="problemOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.problemOfProject ? "border-gray-100" : "",
                        touched.problemOfProject && errors.problemOfProject
                          ? "border-red"
                          : "",
                        touched.problemOfProject && !errors.problemOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                  </div>

                  <div className="flex flex-col mr-[40px]">
                    <ErrorMessage name="resourcesOfProject" className="" />
                    <label>ทรัพยากรณ์</label>
                    <Field
                      name="resourcesOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.resourcesOfProject ? "border-gray-100" : "",
                        touched.resourcesOfProject && errors.resourcesOfProject
                          ? "border-red"
                          : "",
                        touched.resourcesOfProject && !errors.resourcesOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                  </div>

                  <div className="flex flex-col mr-[40px]">
                    <ErrorMessage name="detailOfProject" className="" />
                    <label>รายละเอียดเพิ่มเติม</label>
                    <Field
                      as="textarea"
                      name="detailOfProject"
                      className={clsx(
                        "flex rounded-md border-[2px] xl:h-[25px] xl:max-h-[100px] lg:h-[20px] lg:max-h-[80px] min-h-[35px] border-gray-100 ",
                        !touched.detailOfProject ? "border-gray-100" : "",
                        touched.detailOfProject && errors.detailOfProject
                          ? "border-red"
                          : "",
                        touched.detailOfProject && !errors.detailOfProject
                          ? "border-green-200"
                          : ""
                      )}
                    />
                  </div>
                </div>
                {/* End text input */}
              </div>
            </div>
            <div className={clsx("flex bg-white justify-end items-end")}>
              <button
                className={clsx("flex bg-yellow-100 rounded-full mr-10")}
                type="submit"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormText;
