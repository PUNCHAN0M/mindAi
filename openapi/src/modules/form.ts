import { z } from "zod";

export const formProjectSchema = z.object({
    // imageOfProject: z.instanceof().optional(),
      nameOfProject: z.string(),
      titleOfProject: z.string(),
      periodStartOfProject: z.date(),
      periodEndOfProject: z.date(),
      ideaOfProject: z.string(),
      problemOfProject: z.string(),
      resourcesOfProject: z.string(),
      DetailOfProject: z.string(),
    });
    
export type formSchema = z.infer<typeof formProjectSchema>;
