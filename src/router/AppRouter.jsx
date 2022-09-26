import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeoresRoutes } from '../heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeoresRoutes />} />
      </Routes>
    </>
  );
};
