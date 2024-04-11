import { z } from "zod";

export const loginFormSchema = z.object({
    emailUser: z
    .string()
    // .min(1, { message: "This field has to be filled." })
    // .email("This is not a valid email.")
    // .refine((e) => e === "abcd@fg.com", "This email is not in our database")
    ,
    passwordUser:z.string()
  })
  
  export type loginSchema = z.infer<typeof loginFormSchema>;