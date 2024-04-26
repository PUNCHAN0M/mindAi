import {
  formProjectSchemaText,
  formStudent,
  formStudentSchema,
  formTextSchema,
} from "@/modules/form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import FormImage from "@/components/Form/FormImage";

const initialFormValue: formStudentSchema = {
  nameOfProjectStudent: "",
  titleOfProjectStudent: "",
  periodStartOfProjectStudent: "",
  periodEndOfProjectStudent: "",
  ideaOfProjectStudent: "",
  problemOfProjectStudent: "",
  resourcesOfProjectStudent: "",
  detailOfProjectStudent: "",
};

export type FormikProps = {
    submitStd: (value: formStudentSchema) => void;
};

const FormStudent = ({ submitStd }: FormikProps): JSX.Element => {
  const handleSubmit = (values: formStudentSchema): void => {
    submitStd(values);
  };

  return (
    <Formik
      validationSchema={toFormikValidationSchema(formStudent)}
      initialValues={initialFormValue}
      onSubmit={handleSubmit}
    >
      {({ values, dirty, touched, errors }) => (
        <Form>
          <div className="flex flex-col text-black text-[1vw] bg-white h-screen">
            {/* Start Form img and text */}
            <div className="flex justify-center items-start h-[65%] mt-[8%]">
              <div className="flex w-[30%]">
                <FormImage />
              </div>

              {/* Start insert text and date */}
              <div className="flex flex-col lg:text-[12px] bg-white rounded-xl shadow-searchresearch p-[40px] w-[60%] h-[100%] overflow-auto">

                  <div className="flex space-x-[10px]">
                    {/* Start nameproject Feild*/}
                    <div className="flex flex-col ">
                      <label className="flex">ชื่องานวิจัย</label>
                      <Field
                        name="nameOfProjectStudent"
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] w-[15vw]",
                          !touched.nameOfProjectStudent ? "border-gray-100" : "",
                          touched.nameOfProjectStudent && errors.nameOfProjectStudent
                            ? "border-red"
                            : "",
                          touched.nameOfProjectStudent && !errors.nameOfProjectStudent
                            ? "border-green-200"
                            : ""
                        )}
                      />
                      <ErrorMessage
                        name="nameOfProjectStudent"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End nameproject Feild*/}

                    {/* Start titleOfProject Feild*/}
                    <div className="flex flex-col">
                      <label>ประเภทงานวิจัย</label>
                      <Field
                        name="titleOfProjectStudent"
                        component="select"
                        id="location"
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.titleOfProjectStudent ? "border-gray-100" : "",
                          touched.titleOfProjectStudent && errors.titleOfProjectStudent
                            ? "border-red"
                            : "",
                          touched.titleOfProjectStudent && !errors.titleOfProjectStudent
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
                        name="titleOfProjectStudent"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End titleOfProject Feild*/}
                    {/* Start periodStartOfProject Feild*/}

                    <div className="flex flex-col">
                      <label>เวลาเริ่มต้น</label>
                      <Field
                        name="periodStartOfProjectStudent"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={clsx(
                          " flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.periodStartOfProjectStudent
                            ? "border-gray-100"
                            : "",
                          touched.periodStartOfProjectStudent &&
                            errors.periodStartOfProjectStudent
                            ? "border-red"
                            : "",
                          touched.periodStartOfProjectStudent &&
                            !errors.periodStartOfProjectStudent
                            ? "border-green-200"
                            : ""
                        )}
                      />
                      <ErrorMessage
                        name="periodStartOfProjectStudent"
                        component="div"
                        className="text-red text-[10px]"
                      />
                    </div>
                    {/* End periodStartOfProject Feild*/}
                    {/* Strat periodEndOfProject Feild*/}

                    <div className="flex flex-col">
                      <label>เวลาสิ้นสุด</label>
                      <Field
                        name="periodEndOfProjectStudent"
                        type="date"
                        min={
                          values.periodEndOfProjectStudent ||
                          new Date().toISOString().split("T")[0]
                        }
                        className={clsx(
                          "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                          !touched.periodEndOfProjectStudent ? "border-gray-100" : "",
                          touched.periodEndOfProjectStudent &&
                            errors.periodEndOfProjectStudent
                            ? "border-red"
                            : "",
                          touched.periodEndOfProjectStudent &&
                            !errors.periodEndOfProjectStudent
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
                {/* Start text input */}
                <div className="flex flex-col bg-white space-y-[10px]">
                  <div className="flex flex-col">
                    <label>ไอเดีย</label>
                    <Field
                      name="ideaOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.ideaOfProjectStudent ? "border-gray-100" : "",
                        touched.ideaOfProjectStudent && errors.ideaOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.ideaOfProjectStudent && !errors.ideaOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="ideaOfProjectStudent"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label>ปัญหา</label>
                    <Field
                      name="problemOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.problemOfProjectStudent ? "border-gray-100" : "",
                        touched.problemOfProjectStudent && errors.problemOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.problemOfProjectStudent && !errors.problemOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="problemOfProjectStudent"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  {/*Start resource Feild*/}
                  <div className="flex flex-col">
                    <label>ทรัพยากรณ์</label>
                    <Field
                      name="resourcesOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 xl:h-[25px] lg:h-[20px] border-gray-100",
                        !touched.resourcesOfProjectStudent ? "border-gray-100" : "",
                        touched.resourcesOfProjectStudent && errors.resourcesOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.resourcesOfProjectStudent && !errors.resourcesOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="resourcesOfProjectStudent"
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
                      name="detailOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 border-gray-100 max-h-[20vh]",
                        !touched.detailOfProjectStudent ? "border-gray-100" : "",
                        touched.detailOfProjectStudent && errors.detailOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.detailOfProjectStudent && !errors.detailOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="detailOfProjectStudent"
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
                className={clsx(
                  "flex bg-yellow-100 justify-center rounded-full mr-[5%] mt-[10px] w-[8%] "
                )}
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

export default FormStudent;
