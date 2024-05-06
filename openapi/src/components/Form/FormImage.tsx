import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";
import { formImageSchema } from "@/modules/form";
import SvgPluse from "../SVG/SvgPluse";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import SvgLeftArrow from "../SVG/SvgLeftArrow";
import SvgRightArrow from "../SVG/SvgRightArrow";

const FormImage = ({ onFileSelect }: any) => {
  
  const maxPicture: number = 5;

  const handleFileChange = (e: any) => {
    const selectedFiles = e.target.files;
    onFileSelect(selectedFiles);
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
  return (
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
              <label className="flex text-[70%] font-bold  space-x-[0.2vw]">
                <Svgimg />
                <p className="flex text-[100%] text-blue-400 border-b-1">
                  เลื่อกรูปภาพ
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
                className="flex text-[70%] font-bold  space-x-[0.2vw] hover:cursor-pointer"
              >
                <Svgimg />
                <p className="flex text-[100%] text-blue-400 border-b-1">
                  เลื่อกรูปภาพ
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
  );
};

export default FormImage;
