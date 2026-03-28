import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteContent } from '../constants/content';
import { useWishlist } from '../context/WishlistContext';

export function Navbar() {
  const { pathname } = useLocation();
  const { wishlistIds } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = pathname === '/' && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'border-b border-white/40 bg-ivory/90 shadow-soft backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={siteContent.brand.logoPath} alt={siteContent.brand.name} className="h-11 w-11 rounded-2xl" />
            <div>
              <p className="font-display text-2xl leading-none text-espresso">{siteContent.brand.shortName}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-terracotta">
                {siteContent.brand.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteContent.navigation.slice(0, 6).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-terracotta' : 'text-espresso/75 hover:text-espresso'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/wishlist"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white/70 text-espresso transition hover:-translate-y-0.5"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistIds.length ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-semibold text-white">
                  {wishlistIds.length}
                </span>
              ) : null}
            </Link>
            <Link
              to="/custom-furniture"
              className="rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:bg-wood"
            >
              {siteContent.buttons.requestConsultation}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-white/70 text-espresso lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 rounded-[2rem] border border-white/60 bg-ivory/95 p-6 shadow-glow backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {siteContent.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-espresso text-ivory' : 'bg-white/70 text-espresso'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
