import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFD',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  text: {
    fontSize: 24,
    color: colors.textLight,
  },
});
