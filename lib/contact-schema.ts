import { z } from "zod";
import type { Dict } from "@/lib/dict";

/** Schema factory — pesan error mengikuti bahasa aktif. */
export const makeContactSchema = (e: Dict["errors"]) =>
  z.object({
    name: z.string().min(2, e.nameMin),
    email: z.email(e.email),
    phone: z
      .string()
      .min(8, e.phoneMin)
      .regex(/^[+0-9()\-\s]+$/, e.phoneInvalid),
    service: z.string().min(1, e.service),
    message: z.string().min(10, e.msgMin).max(500, e.msgMax),
  });

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/** Validasi server — pesan error selalu Indonesia. */
export const contactSchema = makeContactSchema({
  nameMin: "Nama minimal 2 karakter",
  email: "Format email tidak valid",
  phoneMin: "Nomor telepon minimal 8 digit",
  phoneInvalid: "Nomor telepon tidak valid",
  service: "Pilih layanan yang diminati",
  msgMin: "Pesan minimal 10 karakter",
  msgMax: "Pesan maksimal 500 karakter",
});
