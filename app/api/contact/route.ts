import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Data form tidak valid",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!apiKey || !ownerEmail) {
    console.error(
      "RESEND_API_KEY / OWNER_EMAIL belum diset. Data form:",
      parsed.data
    );
    return NextResponse.json(
      { error: "Server email belum dikonfigurasi. Hubungi via WhatsApp." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, service, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Novin Nanny Website <onboarding@resend.dev>",
      to: ownerEmail,
      replyTo: email,
      subject: `Inquiry ${service} — ${name}`,
      text: [
        `Nama: ${name}`,
        `Email: ${email}`,
        `Telepon/WhatsApp: ${phone}`,
        `Layanan: ${service}`,
        "",
        "Pesan:",
        message,
      ].join("\n"),
    });
    if (error) {
      console.error("Gagal kirim email:", error);
      return NextResponse.json(
        { error: "Gagal mengirim email. Coba lagi nanti." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Gagal kirim email:", err);
    return NextResponse.json(
      { error: "Gagal mengirim email. Coba lagi nanti." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
