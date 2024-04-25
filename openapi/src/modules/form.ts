import { nullable, z } from "zod";

// export const formProjectSchema = z.object({
//   imageOfProject: z.any().refine((val) => val.length > 0, "File is required"),
//   nameOfProject: z.string(),
//   titleOfProject: z.string(),
//   periodStartOfProject: z.date(),
//   periodEndOfProject: z.date(),
//   ideaOfProject: z.string(),
//   problemOfProject: z.string(),
//   resourcesOfProject: z.string(),
//   detailOfProject: z.string(),
// });

// export type formSchema = z.infer<typeof formProjectSchema>;

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
