import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './GoogleLogin.style';

const googleImg = require('../..assets/google.png');

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    //
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={handleGoogleLogin}
      style={styles.container}
    >
      <Image style={styles.image} source={googleImg} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
