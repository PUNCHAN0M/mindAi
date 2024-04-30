import {
  formProjectSchemaText,
  formStudent,
  formStudentSchema,
  formTextSchema,
} from "@/modules/form";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import FormImage from "@/components/Form/FormImage";

const initialFormValue: formStudentSchema = {
  nameOfProjectStudent: "",
  departmentOfProjectStudent: "",
  statusOfProjectStudent: false,
  periodStartOfProjectStudent: "",
  periodEndOfProjectStudent: "",
  aptitudeOfProjectStudent: "",
  ideaOfProjectStudent: "",
  problemOfProjectStudent: "",
  resourcesOfProjectStudent: "",
  detailOfProjectStudent: "",
  tagsOfProjectStudent: [],
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
              <div className="flex flex-col text-[1.5vh] space-y-[2vh] bg-white rounded-xl shadow-searchresearch p-[40px] w-[60%] h-[100%] overflow-auto">
                <div className="flex space-x-[1vw]">
                  {/* Start nameproject Feild*/}
                  <div className="flex flex-col ">
                    <label className="flex">ชื่องานวิจัย</label>
                    <Field
                      name="nameOfProjectStudent"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[3vh] w-[15vw]",
                        !touched.nameOfProjectStudent ? "border-gray-100" : "",
                        touched.nameOfProjectStudent &&
                          errors.nameOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.nameOfProjectStudent &&
                          !errors.nameOfProjectStudent
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
                  {/* Start department*/}
                  <div className="flex flex-col">
                    <label htmlFor="">สาขาที่ต้องการ</label>
                    <Field
                      name="departmentOfProjectStudent"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.departmentOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.departmentOfProjectStudent &&
                          errors.departmentOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.departmentOfProjectStudent &&
                          !errors.departmentOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                      placeholder="หาสาขาที่ต้องการ"
                    ></Field>
                  </div>
                  {/* End  department*/}
                  {/* Start status Feild*/}
                  <div className="flex flex-col">
                    <label>สถานะ</label>
                    <Field
                      name="statusOfProjectStudent"
                      component="select"
                      id="location"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.statusOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.statusOfProjectStudent &&
                          errors.statusOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.statusOfProjectStudent &&
                          !errors.statusOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                      placeholder="กรุณาเลือกหัวข้อ"
                    >
                      <option value="" disabled hidden>
                        สถานะที่ต้องการ
                      </option>
                      <option value="std">นักศึกษา</option>
                      <option value="pfs">อาจารย์</option>
                    </Field>
                    <ErrorMessage
                      name="statusOfProjectStudent"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  {/* End status Feild*/}
                  {/* Start periodStartOfProject Feild*/}

                  <div className="flex flex-col">
                    <label>เวลาเริ่มต้น</label>
                    <Field
                      name="periodStartOfProjectStudent"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
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
                        "flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.periodEndOfProjectStudent
                          ? "border-gray-100"
                          : "",
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
                <div className="flex flex-col bg-white space-y-[2vh]">
                  <div className="flex flex-col">
                    <label>ความถนัด / ความสามารถที่ต้องการ</label>
                    <Field
                      name="aptitudeOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.aptitudeOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.aptitudeOfProjectStudent &&
                          errors.aptitudeOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.aptitudeOfProjectStudent &&
                          !errors.aptitudeOfProjectStudent
                          ? "border-green-200"
                          : ""
                      )}
                    />
                    <ErrorMessage
                      name="aptitudeOfProjectStudent"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>ไอเดีย</label>
                    <Field
                      name="ideaOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.ideaOfProjectStudent ? "border-gray-100" : "",
                        touched.ideaOfProjectStudent &&
                          errors.ideaOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.ideaOfProjectStudent &&
                          !errors.ideaOfProjectStudent
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
                        "flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.problemOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.problemOfProjectStudent &&
                          errors.problemOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.problemOfProjectStudent &&
                          !errors.problemOfProjectStudent
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
                        "flex rounded-md border-[2px] px-1 h-[3vh] border-gray-100",
                        !touched.resourcesOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.resourcesOfProjectStudent &&
                          errors.resourcesOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.resourcesOfProjectStudent &&
                          !errors.resourcesOfProjectStudent
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
                  {/*Start detail*/}
                  <div className="flex flex-col">
                    <label>รายละเอียดเพิ่มเติม</label>
                    <Field
                      as="textarea"
                      name="detailOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 border-gray-100 max-h-[20vh] h-[3vh]",
                        !touched.detailOfProjectStudent
                          ? "border-gray-100"
                          : "",
                        touched.detailOfProjectStudent &&
                          errors.detailOfProjectStudent
                          ? "border-red"
                          : "",
                        touched.detailOfProjectStudent &&
                          !errors.detailOfProjectStudent
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
                  {/*End detail*/}
                  {/* Start */}
                  <FieldArray
                    name="tagsOfProjectStudent"
                    render={(arrayHelpers) => (
                      <div className="flex flex-wrap ">
                        {values.tagsOfProjectStudent &&
                        values.tagsOfProjectStudent.length > 0 ? (
                          values.tagsOfProjectStudent.map((friend, index) => (
                            <div key={index} className="flex flex-row">
                              <Field
                                name={`tagsOfProjectStudent.${index}`}
                                className="rounded-full border-[1px] border-gray-200 h-[3vh]"
                              />

                              <div className="flex flex-col">
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                >
                                  -
                                </button>
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <button
                            type="button"
                            className="flex flex-row rounded-full border-[1px] border-gray-200 h-[3vh]"
                            onClick={() => arrayHelpers.push("")}
                          >
                            {/* show this when user has removed all tagsOfProjectStudent from the list */}
                            <p>+ เพิ่ม Tag ที่เกี่ยวข้อง</p>
                          </button>
                        )}
                      </div>
                    )}
                  />
                  {/* End */}
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
