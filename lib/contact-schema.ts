import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.email("Format email tidak valid"),
  phone: z
    .string()
    .min(8, "Nomor telepon minimal 8 digit")
    .regex(/^[+0-9()\-\s]+$/, "Nomor telepon tidak valid"),
  service: z.string().min(1, "Pilih layanan yang diminati"),
  message: z
    .string()
    .min(10, "Pesan minimal 10 karakter")
    .max(500, "Pesan maksimal 500 karakter"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
