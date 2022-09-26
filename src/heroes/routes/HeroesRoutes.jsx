import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, MarvelPage } from '../pages';

export const HeoresRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<DcPage />} />
          <Route path="hero" element={<DcPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} end />
        </Routes>
      </div>
    </>
  );
};
