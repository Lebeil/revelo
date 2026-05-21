import { z } from "zod";

export const feedbackSchema = z.object({
  clarity: z
    .number({ message: "Sélectionnez une note de clarté." })
    .int()
    .min(1, "Note minimum 1.")
    .max(5, "Note maximum 5."),
  highlight: z
    .string()
    .trim()
    .min(3, "Donnez au moins une idée (3 caractères).")
    .max(800, "Trop long, 800 caractères max."),
  gap: z
    .string()
    .trim()
    .max(800, "Trop long, 800 caractères max.")
    .optional()
    .or(z.literal("")),
  pilotIntent: z.enum(["oui", "peut-etre", "non"], {
    message: "Choisissez Oui, Peut-être ou Non.",
  }),
  pilotComment: z
    .string()
    .trim()
    .max(500, "Trop long, 500 caractères max.")
    .optional()
    .or(z.literal("")),
  nps: z
    .number({ message: "Sélectionnez un score NPS." })
    .int()
    .min(0, "Score NPS entre 0 et 10.")
    .max(10, "Score NPS entre 0 et 10."),
  source: z.string().trim().max(120).optional(),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
