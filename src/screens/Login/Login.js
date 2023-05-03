import React, { useState } from 'react';
import { Alert, Text, View, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GoogleLogin from '../../components/GoogleLogin';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { useAuth } from '../../context/AuthProvider';
import styles from './Login.style';

const Login = ({ navigation }) => {
  const [values, setValues] = useState({});
  const { login } = useAuth();

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const onChange = (name) => (value) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async () => {
    if (!values?.email) {
      Alert.alert('Email is required');

      return;
    }

    if (!values?.password) {
      Alert.alert('Password is required');

      return;
    }

    login(values);
  };

  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
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
        />
        <Input
          title="Password"
          placeholder="********"
          keyboardType="default"
          secureTextEntry
          onChangeText={onChange('password')}
        />

        <Pressable onPress={onSubmit}>
          <LinearGradient
            colors={['#42a1f5', '#03bafc', '#42c5f5']}
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