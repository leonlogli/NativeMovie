import { View, Text, TextInput, TextInputProps } from 'react-native';
import React from 'react';

import styles from './Input.style';
import colors from '../../utils/colors';

export type InputProps = TextInputProps & {
  title: string;
  error?: string;
};

const Input = ({ title, style, error, ...other }: InputProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      placeholderTextColor={colors.text.secondary}
      style={[styles.input, error ? styles.inputError : undefined, style]}
      {...other}
    />
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

export default Input;
