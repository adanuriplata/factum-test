import { createContext } from 'react';

interface ContextProps {
  isLogged: boolean;
  token?: string | string;
  loginUser: (user: string, pass: string) => boolean;
  logOutUser: () => void;
}

export const AuthContext = createContext({} as ContextProps);
