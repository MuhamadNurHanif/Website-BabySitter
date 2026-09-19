import { FadeIn } from "@/components/motion";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/50">
      <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {subtitle}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
