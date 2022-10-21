import { AuthState } from './AuthProvider';

type AuthActionType =
  | { type: '[Auth] - Login'; payload: string }
  | { type: '[Auth] - Logout' };

export const authReducer = (state: AuthState, action: AuthActionType) => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLogged: true,
        token: action.payload,
      };

    case '[Auth] - Logout':
      return {
        ...state,
        isLogged: false,
        token: undefined,
      };
  }
};
