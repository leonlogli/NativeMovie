import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootNavigationProp } from '../../../navigations';
import styles from './TopMenu.style';

const avatar = require('../../../assets/avatar.png');

const TopMenu = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<RootNavigationProp>();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <LinearGradient
        colors={['transparent', theme.colors.background]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Native Movie</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.avatarContainer} onPress={goToLogin}>
          <Image source={avatar} style={styles.avatar} resizeMode="cover" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopMenu;
