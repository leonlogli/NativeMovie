import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';

import { vw } from '../../utils/dimensions';
import sharedStyle from '../../utils/sharedStyle';
import styles from './MovieVideoModal.style';

export type MovieVideoModalProps = {
  open: boolean;
  onClose: () => void;
  uri: string;
  title: string;
};

const MovieVideoModal = ({
  open,
  onClose,
  uri,
  title,
}: MovieVideoModalProps) => {
  const theme = useTheme();
  const embeddedYoutubeUri = uri?.replace('watch?v=', 'embed/');

  return (
    <Modal visible={open} onRequestClose={onClose} animationType="slide">
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={styles.header}>
          <Text style={sharedStyle.title}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContent}>
          <WebView
            source={{ uri: embeddedYoutubeUri }}
            allowsFullscreenVideo
            mediaPlaybackRequiresUserAction
            style={{ width: vw, backgroundColor: theme.colors.background }}
          />
        </View>
      </View>

      {open && (
        <StatusBar
          backgroundColor={theme.colors.background}
          barStyle="light-content"
        />
      )}
    </Modal>
  );
};

export default MovieVideoModal;
