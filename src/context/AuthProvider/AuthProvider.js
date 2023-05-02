import React, { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

import useGoogleLogin from './useGoogleLogin';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const [errors, setErrors] = useState();

  const { loginWithGoogle } = useGoogleLogin();

  const signup = async ({ email, password, name }) => {
    setloading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      setUser(userCredential.user);
      userCredential.user.updateProfile({ displayName: name });
    } catch (error) {
      setErrors(error);
    }
  };

  const login = async ({ email, password }) => {
    setloading(true);

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );

      setUser(userCredential.user);
    } catch (error) {
      setErrors(error);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await auth().signOut();
    } catch (error) {
      setErrors(error);
    }
  };

  useEffect(() => {
    let unsubscribe = auth().onAuthStateChanged((newUser) => {
      setUser(newUser);

      if (loading) {
        setloading(false);
      }
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        login,
        logout,
        loginWithGoogle,
        signup,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth };
export default AuthProvider;
