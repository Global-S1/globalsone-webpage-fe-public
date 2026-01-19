import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Debe ser un correo electrónico válido."),
    phone: z.string().optional(),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
