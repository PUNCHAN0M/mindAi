import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";
import { formImageSchema } from "@/modules/form";
import SvgPluse from "../SVG/SvgPluse";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const FormImage = () => {
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
              5 - Allfiles.length
            );

            if (newFiles.length > 0) {
              const updatedFiles = [...Allfiles, ...newFiles];

              if (updatedFiles.length > 5) {
                const newAllFiles = updatedFiles.slice(0, 5);
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
  return (
    <div className="flex flex-col text-black justify-center items-center ">
      <div className="relative  flex flex-col bg-white shadow-searchresearch  rounded-lg w-[100%] h-[25vh] justify-center ">
        <label
          htmlFor="fileInput"
          className="flex flex-col items-center w-[100%] h-[100%] justify-center cursor-pointer hover:bg-gray-10 hover:rounded-lg"
        >
          <input
            type="file"
            name="image"
            id="fileInput"
            hidden
            className="fileInput  "
            accept="image/png, image/jpeg"
            multiple
          />
          <SvgPluse />
          <span className="flex text-[80%] mx-[50px] mt-[30px] font-bold z-20">
            ลาก & วางไฟล์ของคุณ or <p className="flex text-[100%] text-blue-400 border-b-1 w-fit mx-[0.5vw]">เปิดโฟลเดอร์</p> เพิ่มเติม
          </span>
        </label>
      </div>
      <div className="flex flex-row justify-between items-center mt-[5px]">
        <Svgimg />
        <span className="text-[80%] ">
          ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 200 M
        </span>
      </div>
      <div className="flex flex-col justify-center  w-[20vw] ">
        {Allfiles.length > 0 && (
          <div className="relative inline-block justify-center w-[100%] aspect-[4/3]">
            {Allfiles.map((file, index) => (
              <Image
                key={index}
                fill
                src={URL.createObjectURL(file)}
                alt={`Image ${index}`}
                className={clsx("object-cover rounded-lg mt-[1vw]",{ hidden: index !== indImage })}
              />
            ))}
          </div>
        )}
        <div className={clsx("flex absolute mt-[45vh] w-[20vw] text-white font-black ", indImage === 0 ? "justify-end" : "justify-between")}>
          <div className={clsx("flex p-[1vw] bg-green-500 shadow-searchresearch rounded-full",indImage === 0 ? "hidden" : "block")} onClick={() => handleClick(-1)}>{`<`}</div>
          <div className={clsx("flex p-[1vw] bg-green-500 shadow-searchresearch rounded-full",Allfiles.length == 0 ? "hidden" : "" , indImage === Allfiles.length - 1 ? "hidden" : "block")} onClick={() => handleClick(1)}>{`>`}</div>
        </div>
      </div>
    </div>
  );
};

export default FormImage;
