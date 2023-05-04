import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  authorContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 16,
  },
  authorName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
  },
  starIcon: {
    color: colors.primary.main,
  },
});

export default styles;
