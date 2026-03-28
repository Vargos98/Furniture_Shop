import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { WishlistProvider } from './context/WishlistContext';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <WishlistProvider>
      <BrowserRouter>
        <LoadingScreen visible={loading} />
        {!loading ? <AppRoutes /> : null}
      </BrowserRouter>
    </WishlistProvider>
  );
}
