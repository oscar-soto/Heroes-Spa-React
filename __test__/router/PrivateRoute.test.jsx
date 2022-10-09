import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/Privateroute';

describe('Pruebas en el <PrivateRoute />', () => {
  test('Debe de mostrar el children si no esta autenticado', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Oscar Espinoza',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy;
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
    // screen.debug()
  });
});
