import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 50,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    paddingBottom: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.textDark,
  },

  //Input Area
  email: {
    fontSize: 16,
    fontWeight: '600',
    height: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 26,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 2,
  },
  password: {
    fontSize: 16,
    fontWeight: '600',
    height: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 26,
    marginTop: 20,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      height: 3,
      width: 2,
    },
    elevation: 2,
  },
  registerText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textLight,
    textAlign: 'center',
    marginTop: 30,
  },
  registerClick: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
});
