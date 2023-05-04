import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

import useGoogleLogin from './useGoogleLogin';

export type User = FirebaseAuthTypes.User;

type LoginInput = { email: string; password: string };

type SignupInput = { email: string; password: string; name: string };

export let currentUser: User | undefined | null;

const useFirebaseAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<any>();

  const { loginWithGoogle } = useGoogleLogin({ setErrors, setLoading });

  const signup = async ({ email, password, name }: SignupInput) => {
    setLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      setUser(userCredential.user);
      userCredential.user.updateProfile({ displayName: name });
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }: LoginInput) => {
    setLoading(true);

    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      setUser(userCredential.user);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
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

  const onAuthStateChanged = (newUser: User | null) => {
    setUser(newUser);

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onIdTokenChanged(onAuthStateChanged);

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  currentUser = user;

  return {
    loading,
    user,
    login,
    logout,
    loginWithGoogle,
    signup,
    errors,
    setErrors,
  };
};

export default useFirebaseAuth;
