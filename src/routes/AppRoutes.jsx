import { Outlet, Route, Routes } from 'react-router-dom';
import { FloatingInquiryButton } from '../components/FloatingInquiryButton';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { ScrollToTopOnRouteChange } from '../components/ScrollToTopOnRouteChange';
import { AboutPage } from '../pages/AboutPage';
import { CollectionsPage } from '../pages/CollectionsPage';
import { ContactPage } from '../pages/ContactPage';
import { CraftsmanshipPage } from '../pages/CraftsmanshipPage';
import { CustomFurniturePage } from '../pages/CustomFurniturePage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { WishlistPage } from '../pages/WishlistPage';

function AppLayout() {
  return (
    <div className="min-h-screen bg-ivory text-espresso">
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingInquiryButton />
      <ScrollToTopButton />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:slug" element={<ProductDetailsPage />} />
        <Route path="/custom-furniture" element={<CustomFurniturePage />} />
        <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
