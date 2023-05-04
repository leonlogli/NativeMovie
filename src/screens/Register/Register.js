import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import GoogleLogin from '../../components/GoogleLogin';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { useAuth } from '../../context/AuthProvider';
import colors from '../../utils/colors';
import styles from './Register.style';
import validateRegister from './Register.validation';

const Register = ({ navigation }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const { signup } = useAuth();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const onChange = (name) => (value) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((v) => ({ ...v, [name]: null }));
  };

  const onSubmit = async () => {
    const err = validateRegister(values);

    if (Object.keys(err).length) {
      return setErrors({ ...errors, ...err });
    }

    signup(values);
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
        <Text style={styles.heading}>Register</Text>
        <Input
          title="Name"
          placeholder="John Doe"
          keyboardType="default"
          onChangeText={onChange('name')}
          error={errors.name}
        />
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
