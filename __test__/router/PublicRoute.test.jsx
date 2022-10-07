import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Prubas en <PublicRoute />', () => {
  test('Debe de mostrar el children si no esta autenticado', () => {
    const textValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={textValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta publica')).toBeTruthy;
    // screen.debug()
  });

  test('Debe de navegar si esta autenticado', () => {
    const textValue = {
      logged: true,
      user: {
        name: 'Osca Espinoza',
        id: 'ABC123',
      },
    };

    render(
      <AuthContext.Provider value={textValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Pagina Marvel')).toBeTruthy;
  });
});
