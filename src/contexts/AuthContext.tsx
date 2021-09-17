/* eslint-disable @typescript-eslint/no-empty-function */

import { createContext } from 'react';

// Contexto Auth:
// Dados de estado da autenticacao, sessao e usuarioimport {createContext} from "react" ;

const AuthContext = createContext({
  user: 'John Doe',
  isLogged: false,
  setIsLogged: () => {},
});

export default AuthContext;
