import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl rounded-[2.4rem] border border-white/60 bg-white/80 px-8 py-14 text-center shadow-glow backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-terracotta">404</p>
        <h1 className="mt-4 font-display text-6xl text-espresso">The page you are looking for is not here.</h1>
        <p className="mt-5 text-base leading-8 text-espresso/68">
          The route may have changed while the atelier was being rearranged. Head back home and continue exploring.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-espresso px-6 py-4 text-sm font-semibold text-ivory">
          Return Home
        </Link>
      </div>
    </section>
  );
}
