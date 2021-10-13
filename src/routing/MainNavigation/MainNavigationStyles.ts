import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  background: {
    height: 150,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: colors.background,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 1,
    borderColor: colors.background,
  },
  global: {
    flex: 1,
  },
});
