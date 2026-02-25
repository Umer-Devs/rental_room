// router.jsx (ya jo bhi naam hai tera file ka)

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AboutPage, Contact, Home, Rooms } from '../Pages';
import Hedaer from '../Componenets/Hedaer';

// Andar hi ScrollToTop logic daal diya (no separate file)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Agar smooth chahiye to yeh use kar sakta hai:
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Hedaer />
      
      {/* Yahan directly use kar rahe hain */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* Agar 404 page banana hai to yeh bhi daal sakta hai */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;