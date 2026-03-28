import { Link } from 'react-router-dom';
import { siteContent } from '../constants/content';

export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso px-4 py-14 text-ivory sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={siteContent.brand.logoPath} alt={siteContent.brand.name} className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="font-display text-3xl">{siteContent.brand.shortName}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">{siteContent.brand.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-ivory/70">{siteContent.footer.tagline}</p>
          <div className="mt-6 space-y-2 text-sm text-ivory/75">
            <p>{siteContent.brand.email}</p>
            <p>{siteContent.brand.phone}</p>
          </div>
        </div>

        {siteContent.footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">{column.title}</h3>
            <div className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-ivory/70 transition hover:text-ivory">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteContent.footer.copyright}</p>
        <div className="flex gap-5">
          {siteContent.footer.socialLinks.map((link) => (
            <a key={link.label} href={link.path} className="transition hover:text-ivory">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
