import React, { ReactNode, createContext, useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import useFirebaseAuth from './useFirebaseAuth';

type AuthContextType = ReturnType<typeof useFirebaseAuth>;

const AuthContext = createContext<AuthContextType>({} as any);

export type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const value = useFirebaseAuth();

  if (value.loading) {
    return <ActivityIndicator />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth };
export default AuthProvider;
