import React from 'react';
import { Text, View, TextProps } from 'react-native';
import { styles } from './Separator.style';

const Separator = ({ children }: TextProps) => (
  <View style={styles.container}>
    <View style={styles.line} />
    <Text style={styles.text}>{children}</Text>
    <View style={styles.line} />
  </View>
);

export default Separator;
