import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Loading from './components/Loading';

const Details = lazy(() => import('./pages/Details'));
const Booking = lazy(() => import('./pages/Booking'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8f9ff]"><Loading /></div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="service/:serviceId" element={<Details />} />
            <Route path="booking" element={<Booking />} />
            <Route path="book" element={<Booking />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
