import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GoogleLogin from '../../components/GoogleLogin';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { useAuth } from '../../context/AuthProvider';
import colors from '../../utils/colors';
import styles from './Login.style';
import validateLogin from './Login.validation';

const Login = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const onChange = (name) => (value) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((v) => ({ ...v, [name]: null }));
  };

  const onSubmit = async () => {
    const err = validateLogin(values);

    if (Object.keys(err).length) {
      return setErrors({ ...errors, ...err });
    }

    login(values);
  };

  return (
    <View>
      <LinearGradient
        colors={[colors.primary.dark, colors.primary.dark, colors.primary.main]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Native Movie</Text>
      </LinearGradient>

      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Input
          title="Email"
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          onChangeText={onChange('email')}
          error={errors.email}
        />
        <Input
          title="Password"
          placeholder="********"
          keyboardType="default"
          secureTextEntry
          onChangeText={onChange('password')}
          error={errors.password}
        />

        <Pressable onPress={onSubmit}>
          <LinearGradient
            colors={[colors.primary.dark, colors.primary.main]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </Pressable>

        <Separator>Or login with</Separator>

        <GoogleLogin />

        <Text style={styles.link}>
          Dont't have an account ? <Text onPress={goToSignup}>Signup</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
