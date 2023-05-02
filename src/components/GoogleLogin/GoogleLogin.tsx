import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './GoogleLogin.style';
import { useAuth } from '../../context/AuthProvider';

const googleImg = require('../../assets/google.png');

const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={loginWithGoogle}
      style={styles.container}
    >
      <Image style={styles.image} source={googleImg} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
