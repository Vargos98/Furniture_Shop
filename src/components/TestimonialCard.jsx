export function TestimonialCard({ quote, name, role }) {
  return (
    <article className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-soft backdrop-blur-sm">
      <p className="font-display text-3xl leading-tight text-espresso">"{quote}"</p>
      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">{name}</p>
        <p className="mt-2 text-sm text-espresso/65">{role}</p>
      </div>
    </article>
  );
}

