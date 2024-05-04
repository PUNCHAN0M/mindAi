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
import { useRouter } from "next/router";
import Tags from "./Tags";
import { useState } from "react";
import TagCards from "./Tags";
const initialFormValue: formStudentSchema = {
  imageOfProject: [],
  nameOfProjectStudent: "",
  departmentOfProjectStudent: "",
  statusOfProjectStudent: "",
  periodStartOfProjectStudent: "",
  periodEndOfProjectStudent: "",
  aptitudeOfProjectStudent: "",
  ideaOfProjectStudent: "",
  problemOfProjectStudent: "",
  resourcesOfProjectStudent: "",
  detailOfProjectStudent: "",
};
// setTags default 
const TagList: string[] = ["Machine Learning", "Cloud Computing","Internet of Things (IoT)" ,"Artificial Intelligence (AI)","Blockchain"]; //ชื่อ tags form

export type FormikProps = {
  submitStd: (value: formStudentSchema,tagsOfProjectStudent:string[]) => void;
};

const FormStudent = ({ submitStd }: FormikProps): JSX.Element => {
  const router = useRouter();
  

  
  const handleFileSelect = (selectedFiles: any) => {
    initialFormValue.imageOfProject = [...selectedFiles];
  };
  const [tagsOfProjectStudent, setTagsOfProjectStudent] = useState<string[]>(
    []
);
  function handleTagChange(name: string, value: boolean): void {
    if (value) {
      setTagsOfProjectStudent((prevTags) => [...prevTags, name]);
    } else {
      setTagsOfProjectStudent((prevTags) => prevTags.filter((t) => t !== name));
    }
  }
  const handleSubmit = (values: formStudentSchema): void => {
    submitStd(values,tagsOfProjectStudent);
    if (
      values.nameOfProjectStudent &&
      values.departmentOfProjectStudent &&
      values.statusOfProjectStudent &&
      values.periodEndOfProjectStudent &&
      values.periodStartOfProjectStudent &&
      values.aptitudeOfProjectStudent &&
      values.ideaOfProjectStudent
    ) {
      console.log("change page now!");
      router.push("/projectdetail");
    }
  };

  return (
    <Formik
      validationSchema={toFormikValidationSchema(formStudent)}
      initialValues={initialFormValue}
      onSubmit={handleSubmit}
    >
      {({ values, dirty, touched, errors }) => (
        <Form>
          <div className="flex flex-col  text-black text-[1.5vw] bg-white h-screen">
            {/* Start Form img and text */}
            <div className="flex flex-wrap justify-center items-start h-[65%] mt-[8%]">
              <div className="flex w-[30%] ml-[2vw]">
                <FormImage onFileSelect={handleFileSelect} />
              </div>

              {/* Start insert text and date */}
              <div className="flex flex-col text-[1.5vh] space-y-[2vh] bg-white rounded-xl shadow-searchresearch p-[40px] w-[60%] h-[100%] overflow-auto">
                <div className="flex flex-wrap space-x-[1vw]">
                  {/* Start nameproject Feild*/}
                  <div className="flex flex-col ">
                    <label className="flex ">
                      <p className="text-red">*</p>ชื่องานวิจัย
                    </label>
                    <Field
                      name="nameOfProjectStudent"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[4vh] w-[10vw]",
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
                    <label className="flex">
                      <p className="text-red">*</p>สาขาที่ต้องการ
                    </label>
                    <Field
                      name="departmentOfProjectStudent"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[4vh] w-[8vw] border-gray-100",
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
                    ></Field>
                    <ErrorMessage
                      name="departmentOfProjectStudent"
                      component="div"
                      className="text-red text-[10px]"
                    />
                  </div>
                  {/* End  department*/}
                  {/* Start status Feild*/}
                  <div className="flex flex-col">
                    <label className="flex">
                      <p className="text-red">*</p>สถานะ
                    </label>
                    <Field
                      name="statusOfProjectStudent"
                      component="select"
                      id="location"
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100 hover:rounded-lg",
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
                    >
                      <option value="" className="text-red" disabled hidden>
                        สถานะที่ต้องการ
                      </option>
                      <option value="std">นักศึกษา</option>
                      <option value="pfc">อาจารย์</option>
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
                    <label className="flex">
                      <p className="text-red">*</p>เวลาเริ่มต้น
                    </label>
                    <Field
                      name="periodStartOfProjectStudent"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={clsx(
                        " flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                    <label className="flex">
                      <p className="text-red">*</p>เวลาสิ้นสุด
                    </label>
                    <Field
                      name="periodEndOfProjectStudent"
                      type="date"
                      min={
                        values.periodEndOfProjectStudent ||
                        new Date().toISOString().split("T")[0]
                      }
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                    <label className="flex">
                      <p className="text-red">*</p>ความถนัด /
                      ความสามารถที่ต้องการ
                    </label>
                    <Field
                      name="aptitudeOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                    <label className="flex">
                      <p className="text-red">*</p>ไอเดีย
                    </label>
                    <Field
                      name="ideaOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                        "flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                    <label>ทรัพยากร</label>
                    <Field
                      name="resourcesOfProjectStudent"
                      className={clsx(
                        "flex rounded-md border-[2px] px-1 h-[4vh] border-gray-100",
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
                        "flex rounded-md border-[2px] px-1 border-gray-100 max-h-[20vh] h-[4vh] pt-[0.4vh]",
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
                  {/* Start Tags*/}
                  <TagCards nameTag={TagList} onChange={handleTagChange} />
                  {/* End Tags*/}
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
                  "flex bg-[#F6F6CD] justify-center rounded-full mr-[5%] mt-[10px] w-[8%] p-[0.5vh]"
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
