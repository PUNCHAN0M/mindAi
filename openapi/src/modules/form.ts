import { z } from "zod";

export const formProjectSchema = z.object({
  imageOfProject: z.any().refine(val => val.length > 0, "File is required"),
  nameOfProject: z.string(),
  titleOfProject: z.string(),
  periodStartOfProject: z.date(),
  periodEndOfProject: z.date(),
  ideaOfProject: z.string(),
  problemOfProject: z.string(),
  resourcesOfProject: z.string(),
  detailOfProject: z.string(),
});

export type formSchema = z.infer<typeof formProjectSchema>;

export const formProjectSchemaText = z.object({
      nameOfProject: z.string(),
      titleOfProject: z.string(),
      periodStartOfProject: z.date(),
      periodEndOfProject: z.date(),
      ideaOfProject: z.string(),
      problemOfProject: z.string(),
      resourcesOfProject: z.string(),
      detailOfProject: z.string(),
    });
    
export type formTextSchema = z.infer<typeof formProjectSchemaText>;

export const formSchemaImage = z.object({
  imageOfProject: z.any().refine(val => val.length > 0, "File is required")
});

export type formImageSchema = z.infer<typeof formSchemaImage>;
