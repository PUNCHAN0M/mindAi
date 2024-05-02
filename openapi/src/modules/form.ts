import { z } from "zod";

export const formProjectSchemaText = z.object({
  nameOfProject: z
    .string({
      required_error: "ต้องใส่งานวิจัย",
    })
    .min(5, { message: "ต้องใส่มากกว่า 5 ตัวอักษร" })
    .max(20, { message: "ไม่เกิน 20 ตัวอักษร" }),
  typeOfProject: z.string({
    required_error: "ต้องใส่หมวดหมู่",
  }),
  departmentOfProject: z.string({
    required_error: "ต้องใส่สาขาวิชา",
  }),
  detailOfProject: z.string().optional(),
});

export type formTextSchema = z.infer<typeof formProjectSchemaText>;

export const formSchemaImage = z.object({
  imageOfProject: z.any().refine((val) => val.length > 0, "File is required"),
});

export type formImageSchema = z.infer<typeof formSchemaImage>;

export const formStudent = z.object({
  nameOfProjectStudent: z
    .string({
      required_error: "ต้องใส่งานวิจัย",
    })
    .min(5, { message: "ต้องใส่มากกว่า 5 ตัวอักษร" })
    .max(20, { message: "ไม่เกิน 20 ตัวอักษร" }),
  departmentOfProjectStudent: z.string({required_error: "ต้องระบุ สาขา"}),
  statusOfProjectStudent: z.string({required_error: "ต้องระบุ สถานะ"}),
  periodStartOfProjectStudent: z.string({required_error: "ต้องระบุ เวลาเริ่มต้น"}),
  periodEndOfProjectStudent: z.string({required_error: "ต้องระบุเวลาสิ้นสุด"}),
  aptitudeOfProjectStudent:z.string({required_error: "ต้องระบุ ความถนัด / ความสามารถที่ต้องการ"}),
  ideaOfProjectStudent: z.string({required_error: "ต้องระบุ ไอเดีย"}),
  problemOfProjectStudent: z.string().optional(),
  resourcesOfProjectStudent: z.string().optional(),
  detailOfProjectStudent: z.string().optional(),
  tagsOfProjectStudent: z.string().array().optional()
});
export type formStudentSchema = z.infer<typeof formStudent>;
