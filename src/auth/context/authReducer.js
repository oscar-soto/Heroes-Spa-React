import { types } from '../types/types';

/*
Para efecto demostrativo podemos crear un estado inicial:

  const initialState = {
    logged: false
  }

y podemos declarar en nuestro argumento de funciones que
nuestro state= initialState
*/

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
