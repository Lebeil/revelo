import { z } from "zod";

export const npsSchema = z.object({
  nps: z
    .number({ message: "Sélectionnez un score NPS." })
    .int()
    .min(0, "Score NPS entre 0 et 10.")
    .max(10, "Score NPS entre 0 et 10."),
  source: z.string().trim().max(120).optional(),
});

export type NpsInput = z.infer<typeof npsSchema>;
