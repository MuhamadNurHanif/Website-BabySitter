"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/lib/i18n";
import { formatIDR, tr, type Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const { lang } = useLang();
  const Icon = service.icon;

  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <span className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-6" />
        </span>
        <h3 className="text-xl font-semibold">{tr(service.name, lang)}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {tr(service.description, lang)}
        </p>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between gap-4">
        <ul className="space-y-2">
          {service.includes[lang].map((inc) => (
            <li key={inc} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-success" />
              {inc}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
          <Badge variant="secondary" className="rounded-full">
            {formatIDR(service.hourly * 1000)}/
            {lang === "id" ? "jam" : "hr"}
          </Badge>
          {service.monthly && (
            <Badge variant="outline" className="rounded-full">
              {formatIDR(service.monthly)}/{lang === "id" ? "bln" : "mo"}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
