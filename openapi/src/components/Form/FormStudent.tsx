import {
  formProjectSchemaText,
  formStudent,
  formStudentSchema,
  formTextSchema,
} from "@/modules/form";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import clsx from "clsx";
import { useRouter } from "next/router";
import Tags from "./Tags";
import { useEffect, useState } from "react";
import TagCards from "./Tags";
import SvgRightArrow from "../SVG/SvgRightArrow";
import Svgimg from "../SVG/Svgimg";
import SvgPluse from "../SVG/SvgPluse";
import Image from "next/image";
import SvgLeftArrow from "../SVG/SvgLeftArrow";
const initialFormValue: formStudentSchema = {
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
const TagList: string[] = [
  "Machine Learning",
  "Cloud Computing",
  "Internet of Things (IoT)",
  "Artificial Intelligence (AI)",
  "Blockchain",
]; //ชื่อ tags form

export type FormikProps = {
  submitStd: (
    value: formStudentSchema,
    tagsOfProjectStudent: string[],
    imageOfProject: any[]
  ) => void;
};

const FormStudent = ({ submitStd }: FormikProps): JSX.Element => {
  const router = useRouter();

  const maxPicture: number = 5;

  const handleFileChange = (e: any) => {
    const selectedFiles = e.target.files;
  };

  const [Allfiles, setAllFiles] = useState<File[]>([]);

  useEffect(() => {
    const fileInputs =
      document.querySelectorAll<HTMLInputElement>(".fileInput");

    fileInputs.forEach((fileInput) => {
      fileInput.addEventListener("change", async (e) => {
        const selectedFiles = (e.target as HTMLInputElement).files;

        if (selectedFiles) {
          try {
            const newFiles = Array.from(selectedFiles).slice(
              0,
              maxPicture - Allfiles.length
            );

            if (newFiles.length > 0) {
              const updatedFiles = [...Allfiles, ...newFiles];

              if (updatedFiles.length > maxPicture) {
                const newAllFiles = updatedFiles.slice(0, maxPicture);
                setAllFiles(newAllFiles);
              } else {
                setAllFiles(updatedFiles);
              }
            }
          } catch (error) {
            console.error(error);
            alert("An error occurred while uploading files.");
          }
        }
      });
    });
  }, [Allfiles]);
  const [indImage, setIndImage] = useState<number>(0);
  const handleClick = (val: number) => {
    setIndImage(indImage + val);
  };
  const handleClickDelete = () => {
    const newArray = [...Allfiles]; // Create a copy of the original array
    newArray.splice(indImage, 1); // Remove one element at the specified index
    setAllFiles(newArray); // Update the state with the new array
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
    submitStd(values, tagsOfProjectStudent, Allfiles);
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
      // router.push("/projectdetail");
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
            <div className="flex flex-wrap justify-center items-start h-[65%] mt-[4%]">
              <div className="flex w-[30%] ml-[2vw]">
                <div className="flex flex-row text-black justify-center items-center space-x-[1vh]">
      {/* strat prebious btn */}
      <div
        className={clsx(
          "flex   rounded-full",
          indImage === 0 ? "hidden" : "block"
        )}
        onClick={() => handleClick(-1)}
      >
        <SvgLeftArrow />
      </div>
      {/* end prebious btn */}
      {/* strat inputbox */}
      <div>
        <div className="relative  flex flex-col bg-white rounded-lg w-[100%] h-[30vh] justify-center ">
          {/*strat If input is max must be in put */}
          {Allfiles.length == maxPicture ? (
            <label className=" relative flex flex-col items-center w-[100%] h-[100%] justify-center inputImageForm">
              {Allfiles.length > 0 && (
                <div className="absolute justify-center w-full h-full z-50 ">
                  {Allfiles.map((file, index) => (
                    <Image
                      key={index}
                      fill
                      src={URL.createObjectURL(file)}
                      alt={`Image ${index}`}
                      className={clsx("object-cover rounded-lg", {
                        hidden: index !== indImage,
                      })}
                    />
                  ))}
                </div>
              )}

              <span className="flex text-[80%] mx-[50px] mt-[30px] font-bold z-20">
                ลาก & วางไฟล์ของคุณ or{" "}
                <p className="flex text-[100%] text-blue-400 border-b-1 w-fit mx-[0.5vw]">
                  เปิดโฟลเดอร์
                </p>{" "}
                เพิ่มเติม
              </span>
            </label>
          ) : (
            <label
              htmlFor="fileInput"
              className=" relative flex flex-col items-center w-[100%] h-[100%] justify-center cursor-pointer shadow-searchresearch rounded-lg hover:bg-gray-10 hover:rounded-lg hover:border-1 hover:border-gray-200 "
            >
              {Allfiles.length > 0 && (
                <div className="absolute justify-center w-full h-full z-50">
                  {Allfiles.map((file, index) => (
                    <Image
                      key={index}
                      fill
                      src={URL.createObjectURL(file)}
                      alt={`Image ${index}`}
                      className={clsx("object-cover rounded-lg", {
                        hidden: index !== indImage,
                      })}
                    />
                  ))}
                </div>
              )}
              <input
                type="file"
                name="imageOfProject"
                id="fileInput"
                hidden
                className="fileInput  "
                accept="image/png, image/jpeg"
                multiple
                onChange={(e)=>{handleFileChange(e)}}
              />
              <SvgPluse />
              <span className="flex text-[80%] mx-[50px] mt-[30px] font-bold z-20">
                ลาก & วางไฟล์ของคุณ or{" "}
                <p className="flex text-[100%] text-blue-400 border-b-1 w-fit mx-[0.5vw]">
                  เปิดโฟลเดอร์
                </p>{" "}
                เพิ่มเติม
              </span>
            </label>
          )}
          {/*end If input is max must be in put */}
          {/*start delete btn*/}
          {Allfiles && Allfiles.length > 0 && Allfiles.length > indImage && (
            <div
              className={clsx(
                "absolute bg-gray-10 w-[1vw] h-[1vw] right-[1vw] top-[1vh] rounded-full z-50"
              )}
              onClick={() => {
                handleClickDelete();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-[1.3vw] h-[1.3vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          )}

          {/*end delete btn*/}
        </div>
        <div className="flex flex-row justify-between items-center mt-[1vh] space-x-[0.5vw]">
          {Allfiles.length == maxPicture ? (
            <span className="flex space-x-[1vw]">
              <label className="flex text-[70%] font-bold">
                <Svgimg />
                <p className="flex text-[100%] text-blue-400 border-b-1">
                  เลือกรูปภาพ
                </p>
                <p className="flex text-[100%]">เพิ่มเติม</p>
                <p
                  className={clsx(
                    "flex text-[100%]",
                    Allfiles.length == maxPicture ? "text-red" : ""
                  )}
                >
                  {" "}
                  ({Allfiles.length}/{maxPicture})
                </p>
              </label>

              <span className="flex text-[70%] ">
                ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 200 M
              </span>
            </span>
          ) : (
            <span className="flex space-x-[1vw]">
              <label
                htmlFor="fileInput"
                className="flex text-[70%] font-bold  hover:cursor-pointer"
              >
                <Svgimg />
                <p className="flex text-[100%] text-blue-400 border-b-1">
                  เลือกรูปภาพ
                </p>
                <p className="flex text-[100%]">เพิ่มเติม</p>
                <p
                  className={clsx(
                    "flex text-[100%]",
                    Allfiles.length == maxPicture ? "text-red" : ""
                  )}
                >
                  {" "}
                  ({Allfiles.length}/{maxPicture})
                </p>
              </label>

              <span className="flex text-[70%] ">
                ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 200 M
              </span>
            </span>
          )}
        </div>
      </div>
      {/* end inputbox */}
      {/*start  next btn*/}
      {Allfiles.length == indImage ? (
        <></>
      ) : (
        <div
          className={clsx(
            "flex  rounded-full",
            Allfiles.length == 0 ? "hidden" : "",
            indImage === Allfiles.length - 1 ? "hidden" : "block"
          )}
          onClick={() => handleClick(1)}
        >
          <SvgRightArrow />
        </div>
      )}
      {/*end  next btn*/}
    </div>
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
                        values.periodStartOfProjectStudent ||
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
