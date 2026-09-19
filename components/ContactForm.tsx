"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { services } from "@/lib/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json().catch(() => null);

    if (res.ok) {
      toast.success("Pesan terkirim!", {
        description: "Novin akan membalas secepatnya. Terima kasih! 💕",
      });
      form.reset();
      setSubmitted(true);
    } else {
      toast.error("Gagal mengirim pesan", {
        description: data?.error ?? "Coba lagi atau hubungi via WhatsApp.",
      });
    }
  };

  const message = form.watch("message");

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FieldGroup className="gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!form.formState.errors.name}>
            <FieldLabel htmlFor="name">
              Nama <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="name"
              placeholder="Nama Anda"
              className="h-11 rounded-xl"
              aria-invalid={!!form.formState.errors.name}
              {...form.register("name")}
            />
            <FieldError errors={[form.formState.errors.name]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.email}>
            <FieldLabel htmlFor="email">
              Email <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              className="h-11 rounded-xl"
              aria-invalid={!!form.formState.errors.email}
              {...form.register("email")}
            />
            <FieldError errors={[form.formState.errors.email]} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!form.formState.errors.phone}>
            <FieldLabel htmlFor="phone">
              Telepon/WhatsApp <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="+62 812-xxxx-xxxx"
              className="h-11 rounded-xl"
              aria-invalid={!!form.formState.errors.phone}
              {...form.register("phone")}
            />
            <FieldError errors={[form.formState.errors.phone]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.service}>
            <FieldLabel>
              Layanan yang Diminati <span className="text-destructive">*</span>
            </FieldLabel>
            <Select
              value={form.watch("service")}
              onValueChange={(v) => form.setValue("service", v, { shouldValidate: true })}
            >
              <SelectTrigger className="h-11 w-full rounded-xl aria-invalid:border-destructive">
                <SelectValue placeholder="Pilih layanan" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
                <SelectItem value="Lainnya">Lainnya / Belum Yakin</SelectItem>
              </SelectContent>
            </Select>
            <FieldError errors={[form.formState.errors.service]} />
          </Field>
        </div>

        <Field data-invalid={!!form.formState.errors.message}>
          <FieldLabel htmlFor="message">
            Pesan <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            id="message"
            placeholder="Ceritakan kebutuhan keluarga Anda: usia anak, jadwal, lokasi..."
            className="min-h-32 rounded-xl"
            maxLength={500}
            aria-invalid={!!form.formState.errors.message}
            {...form.register("message")}
          />
          <div className="flex items-center justify-between">
            <FieldError errors={[form.formState.errors.message]} />
            <span
              className={`text-xs ${
                (message?.length ?? 0) >= 500
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {message?.length ?? 0}/500
            </span>
          </div>
        </Field>

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-12 w-full rounded-xl gradient-brand text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="size-5" />
              Kirim Pesan
            </>
          )}
        </Button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-success/10 px-4 py-3 text-center text-sm font-medium text-success"
            role="status"
          >
            ✓ Pesan Anda sudah terkirim. Form siap digunakan lagi.
          </motion.p>
        )}
      </FieldGroup>
    </form>
  );
}
