import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './TopbarActions.style';

export type TopbarActionsProps = {
  onBack: () => void;
};

const TopbarActions = ({ onBack }: TopbarActionsProps) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <LinearGradient
        colors={['transparent', colors.background]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={onBack} style={styles.backButtonContainer}>
          <Icons name="arrow-left" size={22} color={'#fff'} />
        </TouchableOpacity>

        <View style={styles.flex} />

        <TouchableOpacity onPress={onBack} style={styles.castButtonContainer}>
          <Icons name="cast" size={22} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopbarActions;
