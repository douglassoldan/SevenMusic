import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  //Primary Button
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 26,
    marginTop: 30,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 2,
  },
  primaryButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
