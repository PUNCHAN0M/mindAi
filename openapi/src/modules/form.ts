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
  departmentOfProjectStudent: z.string(),
  statusOfProjectStudent: z.boolean(),
  periodStartOfProjectStudent: z.string(),
  periodEndOfProjectStudent: z.string(),
  aptitudeOfProjectStudent:z.string(),
  ideaOfProjectStudent: z.string(),
  problemOfProjectStudent: z.string(),
  resourcesOfProjectStudent: z.string(),
  detailOfProjectStudent: z.string(),
  tagsOfProjectStudent: z.string().array()
});
export type formStudentSchema = z.infer<typeof formStudent>;
