import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Indiquez votre prénom et nom (au moins 2 caractères)." })
    .max(80, { message: "80 caractères maximum." }),
  email: z
    .string()
    .email({ message: "Email professionnel attendu." })
    .max(120),
  company: z
    .string()
    .min(2, { message: "Nom de l'entreprise requis." })
    .max(80),
  role: z
    .string()
    .max(80, { message: "80 caractères maximum." })
    .optional()
    .or(z.literal("")),
  teamSize: z
    .string()
    .max(60, { message: "60 caractères maximum." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .max(800, { message: "800 caractères maximum." })
    .optional()
    .or(z.literal("")),
  consent: z
    .boolean()
    .refine((value) => value === true, { message: "Merci d'accepter d'être recontacté." }),
});

export type LeadInput = z.infer<typeof leadSchema>;
