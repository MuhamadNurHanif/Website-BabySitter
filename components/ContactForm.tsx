"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useMemo, useState } from "react";
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
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import {
  makeContactSchema,
  type ContactFormData,
} from "@/lib/contact-schema";
import { services, tr } from "@/lib/services";

export function ContactForm() {
  const { lang } = useLang();
  const t = dictionaries[lang].contact;
  const [submitted, setSubmitted] = useState(false);

  const schema = useMemo(
    () => makeContactSchema(dictionaries[lang].errors),
    [lang]
  );

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
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
      toast.success(t.successToastTitle, {
        description: t.successToastDesc,
      });
      form.reset();
      setSubmitted(true);
    } else {
      toast.error(t.errorToastTitle, {
        description: data?.error ?? t.errorToastDesc,
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
              {t.nameLabel}{" "}
              <span className="text-destructive">{t.required}</span>
            </FieldLabel>
            <Input
              id="name"
              placeholder={t.namePh}
              className="h-11 rounded-xl"
              aria-invalid={!!form.formState.errors.name}
              {...form.register("name")}
            />
            <FieldError errors={[form.formState.errors.name]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.email}>
            <FieldLabel htmlFor="email">
              {t.emailLabel}{" "}
              <span className="text-destructive">{t.required}</span>
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder={t.emailPh}
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
              {t.phoneLabel}{" "}
              <span className="text-destructive">{t.required}</span>
            </FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder={t.phonePh}
              className="h-11 rounded-xl"
              aria-invalid={!!form.formState.errors.phone}
              {...form.register("phone")}
            />
            <FieldError errors={[form.formState.errors.phone]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.service}>
            <FieldLabel>
              {t.serviceLabel}{" "}
              <span className="text-destructive">{t.required}</span>
            </FieldLabel>
            <Select
              value={form.watch("service")}
              onValueChange={(v) =>
                form.setValue("service", v, { shouldValidate: true })
              }
            >
              <SelectTrigger className="h-11 w-full rounded-xl aria-invalid:border-destructive">
                <SelectValue placeholder={t.servicePh} />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.name.en}>
                    {tr(s.name, lang)}
                  </SelectItem>
                ))}
                <SelectItem value="Other">{t.serviceOther}</SelectItem>
              </SelectContent>
            </Select>
            <FieldError errors={[form.formState.errors.service]} />
          </Field>
        </div>

        <Field data-invalid={!!form.formState.errors.message}>
          <FieldLabel htmlFor="message">
            {t.messageLabel}{" "}
            <span className="text-destructive">{t.required}</span>
          </FieldLabel>
          <Textarea
            id="message"
            placeholder={t.messagePh}
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
              {t.sending}
            </>
          ) : (
            <>
              <Send className="size-5" />
              {t.submit}
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
            {t.successNote}
          </motion.p>
        )}
      </FieldGroup>
    </form>
  );
}
