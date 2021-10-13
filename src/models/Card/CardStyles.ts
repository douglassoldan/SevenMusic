import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    width: 160,
    paddingVertical: 16,
    paddingHorizontal: 0,
    marginRight: 8,
  },
  photo: {
    width: 150,
    height: 150,
    backgroundColor: '#888',
    borderRadius: 6,
  },
  containerSubtitle: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  subtitleTitle: {
    color: colors.textDark,
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 0,
  },
  subtitleDescription: {
    color: colors.textDark,
    fontSize: 12,
  },
});
