import { StyleSheet } from 'react-native';

const sharedStyle = StyleSheet.create({
  flex1: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default sharedStyle;
