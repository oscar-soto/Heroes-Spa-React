import { authReducer, types } from '../../../src/auth';

describe('Pruebas en el authReducer', () => {
  test('Debe de regresar el estado inicial', () => {
    const newState = authReducer({logged: false}, {});
    expect(newState).toEqual({logged: false});
  });

  test('Debe (login) de llamar el login y autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Oscar',
        id: '123',
      },
    };

    const newState = authReducer({logged: false}, action);
    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('Debe (logout) borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true, 
      name: 'Oscar Espinoza'
    }
    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({logged: false})
  });
});
