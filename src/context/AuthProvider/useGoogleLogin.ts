import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';

import env from '../../config/env';

export type UseGoogleLoginOpts = {
  setErrors?: React.Dispatch<any>;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const useGoogleLogin = ({ setErrors, setLoading }: UseGoogleLoginOpts = {}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: env.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      iosClientId: env.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const loginWithGoogle = async () => {
    setLoading?.(true);

    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      setErrors?.(error);
    } finally {
      setLoading?.(false);
    }
  };

  return { loginWithGoogle };
};

export default useGoogleLogin;
