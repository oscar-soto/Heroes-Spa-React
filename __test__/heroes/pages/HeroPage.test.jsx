import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroPage } from '../../../src/heroes/pages/HeroPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <HeroPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar la tarjeta del heroe (batman)', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Batman')).toBeTruthy();
  });

  test('debe de navegar a la página de marvel tras detectar el id un héroe no existente', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman123']}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="marvel" element={<h1>Página Marvel</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Página Marvel')).toBeTruthy();
  });

  test('debe de navegar tras pulsar el botón regresar', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path="hero/:id" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    const returnButton = screen.getByRole('button');
    fireEvent.click(returnButton);

    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
