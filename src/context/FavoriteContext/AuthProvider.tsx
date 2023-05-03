import React, { ReactNode, createContext, useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';

import useFirebaseAuth from './useFirebaseAuth';
import sharedStyle from '../../utils/sharedStyle';

type AuthContextType = ReturnType<typeof useFirebaseAuth>;

const AuthContext = createContext<AuthContextType>({} as any);

export type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const value = useFirebaseAuth();

  if (value.loading) {
    return (
      <View style={sharedStyle.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth };
export default AuthProvider;
