import { formProjectSchemaText, formTextSchema } from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";
import clsx from "clsx";
import { useState } from "react";
import Dropdown from "./Dropdown";
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
          <div className="flex flex-col w-screen h-screen text-black ">
            <div className="flex flex-row-2 justify-between">
              <div className="flex">
                <FormImage />
              </div>

              {/* insert text and date */}
              <div className="bg-white p-10 rounded-lg flex flex-col basis-3/5 drop-shadow-md ">
                <div className="flex bg-white justify-start ">
                  <div className="flex flex-row space-x-5 pb-5">
                    {/* nameproject */}
                    <div className="flex flex-col bg-white  justify-end">
                      <ErrorMessage
                        name="nameOfProject"
                        component="div"
                        className="text-red-500"
                      />
                      <label className="flex">ชื่องานวิจัย</label>
                      <Field
                        name="nameOfProject"
                        className={clsx(
                          "flex max-h-7 min-w-80 rounded-md border-[2px]",
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
                    <div className="flex flex-col  justify-end w-32 items-center bg-white">
                      <ErrorMessage name="titleOfProject" className="" />
                      <label>ประเภทงานวิจัย</label>
                      <Field
                        name="titleOfProject"
                        as="select"
                        className={clsx(
                          "h-7 rounded-md border-[2px] border-gray-100",
                          !touched.titleOfProject ? "border-gray-100" : "",
                          touched.titleOfProject && errors.titleOfProject
                            ? "border-red"
                            : "",
                          touched.titleOfProject && !errors.titleOfProject
                            ? "border-green-200"
                            : ""
                        )}
                      >
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="com">Computer</option>
                      </Field>
                    </div>
                    <div className="flex flex-col  justify-end bg-white">
                      <ErrorMessage name="periodStartOfProject" className="" />
                      <label>เวลาเริ่มต้น</label>
                      <Field
                        name="periodStartOfProject"
                        type="date"
                        className={clsx(
                          "max-h-7 rounded-md border-[2px] border-gray-100",
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
                        className={clsx(
                          "flex max-h-7 rounded-md border-[2px]",
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

                {/* text input */}
                <div className="bg-white space-y-5">
                  <div className="flex flex-col">
                    <ErrorMessage name="ideaOfProject" className="" />
                    <label>ไอเดีย</label>
                    <Field
                      name="ideaOfProject"
                      className={clsx(
                        "flex max-h-7 min-w-80 rounded-md border-[2px]",
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

                  <div className="flex flex-col">
                    <ErrorMessage name="ideaOfProject" className="" />
                    <label>ปัญหา</label>
                    <Field
                      name="problemOfProject"
                      className={clsx(
                        "flex max-h-7 min-w-80 rounded-md border-[2px]",
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

                  <div className="flex flex-col">
                    <ErrorMessage name="resourcesOfProject" className="" />
                    <label>ทรัพยากรณ์</label>
                    <Field
                      name="resourcesOfProject"
                      className={clsx(
                        "flex max-h-7 min-w-80 rounded-md border-[2px]",
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

                  <div className="flex flex-col">
                    <ErrorMessage name="detailOfProject" className="" />
                    <label>รายละเอียดเพิ่มเติม</label>
                    <Field
                      name="detailOfProject"
                      className={clsx(
                        "flex max-h-7 min-w-80 rounded-md border-[2px]",
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
              </div>
            </div>
            <div className="flex bg-white justify-end items-end">
              <button
                className={clsx("flex bg-yellow-100 rounded-full mr-10 mt-10")}
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
