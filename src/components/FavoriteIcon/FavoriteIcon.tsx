import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './FavoriteIcon.style';

const FavoriteIcon = ({ style }: TouchableOpacityProps) => {
  const favorite = false;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <MaterialIcons
        name={favorite ? 'favorite' : 'favorite-outline'}
        size={22}
        color="#fff"
      />
    </TouchableOpacity>
  );
};

export default FavoriteIcon;
