import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export interface AuthState {
  isLogged: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLogged: false,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    const isValidToken = token === '675489';

    if (isValidToken) {
      dispatch({ type: '[Auth] - Login' });
      Cookies.set('token', '675489');
    }
  }, []);

  const loginUser = (user: string, pass: string): boolean => {
    if (user === 'admin' && pass === 'root') {
      dispatch({ type: '[Auth] - Login' });
      Cookies.set('token', '675489');
      return true;
    }
    return false;
  };

  const logOutUser = (): void => {
    console.log('logout...');
    dispatch({ type: '[Auth] - Logout' });
    Cookies.remove('token');
    router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
