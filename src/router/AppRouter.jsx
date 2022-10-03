import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeoresRoutes } from '../heroes';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRoute>
            {/* <LoginPage /> */}
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        } />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeoresRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeoresRoutes />} /> */}
      </Routes>
    </>
  );
};
