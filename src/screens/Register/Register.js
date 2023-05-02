import React, { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GoogleLogin from '../../components/GoogleLogin';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { useAuth } from '../../context/AuthProvider';
import styles from './Register.style';

const Register = ({ navigation }) => {
  const [values, setValues] = useState({});
  const { signup } = useAuth();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const onChange = (name) => (value) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async () => {
    if (!values?.name) {
      Alert.alert('Name is required');

      return;
    }

    if (!values?.email) {
      Alert.alert('Email is required');

      return;
    }

    if (!values?.password) {
      Alert.alert('Password is required');

      return;
    }

    signup(values);
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
        <Text style={styles.heading}>Register</Text>
        <Input
          title="Name"
          placeholder="John Doe"
          keyboardType="default"
          onChangeText={onChange('name')}
        />
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
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </Pressable>

        <Separator>Or sign up with</Separator>

        <GoogleLogin />

        <Text style={styles.link}>
          Already have an account ? <Text onPress={goToLogin}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
