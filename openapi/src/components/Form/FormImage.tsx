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
  const handleCheck = () => {
    console.log(Allfiles)
  }

  return (
    <div className="flex flex-col text-black justify-center pt-12 ">
      <div className="flex flex-col bg-white justify-center items-center border-black rounded-lg h-[271px] w-[378px] drop-shadow-md">
        <label htmlFor="" className="flex flex-col items-center">
          <input
            type="file"
            name="image"
            className="fileInput"
            accept="image/png, image/jpeg"
            multiple
          />
          <SvgPluse />
          <span>ลาก & วางไฟล์ของคุณ or เปิดโฟลเดอร์ เพิ่มเติม </span>
        </label>
      </div>
      <div className="flex flex-row justify-between">
        <Svgimg />
        <span className="text-[8px] pt-2">
          ประเภทไฟล์ที่รองรับ JPG , PNG ขนาดสูงสุงครั้งละ 200 M
        </span>
        <button onClick={handleCheck}>Check!</button>
      </div>
    </div>
  );
};

export default FormImage;
