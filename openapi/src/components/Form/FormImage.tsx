import { ErrorMessage, Field, Form, Formik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Svgimg from "../SVG/Svgimg";
import { formImageSchema } from "@/modules/form";
import SvgPluse from "../SVG/SvgPluse";
import { useEffect, useState } from "react";

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

  return (
    <div className="flex flex-col text-black justify-center ">
      <div className="flex flex-col bg-white shadow-searchresearch  rounded-lg w-[100%] h-[210px] justify-center">
        <label
          htmlFor="fileInput"
          className="flex flex-col items-center w-[100%] h-[100%] justify-center"
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
          <span className="text-[0.7vw] mx-[50px] mt-[30px] font-bold">ลาก & วางไฟล์ของคุณ or เปิดโฟลเดอร์ เพิ่มเติม </span>
        </label>
      </div>
      <div className="flex flex-row justify-between items-center mt-[5px]">
        <Svgimg />
        <span className="text-[0.5vw] ">
          ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 200 M
        </span>
      </div>
    </div>
  );
};

export default FormImage;
