import { View, Text, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import styles from './Input.style';

export type InputProps = TextInputProps & {
  title: string;
};

const Input = ({ title, style, ...other }: InputProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      placeholderTextColor="gray"
      style={[styles.input, style]}
      {...other}
    />
  </View>
);

export default Input;
