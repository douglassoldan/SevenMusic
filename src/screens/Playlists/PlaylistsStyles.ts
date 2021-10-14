import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
  background: {
    height: 150,
    width: '100%',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
});
