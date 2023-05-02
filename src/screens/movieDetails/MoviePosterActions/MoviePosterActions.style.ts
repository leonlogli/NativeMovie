import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  actionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  playButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  addButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 40,
  },
  otherButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 40,
  },
  playText: { color: '#000', fontWeight: '600' },
  flex1: { flex: 1 },
});

export default styles;
