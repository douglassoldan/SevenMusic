import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  //Logo Area
  logoView: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upLogo: {
    flex: 1,
  },
  round: {
    height: 60,
    width: '100%',
    backgroundColor: colors.background,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 1,
    borderColor: colors.background,
  },

  //Input Area
  inputView: {
    flex: 4,
    justifyContent: 'flex-start',
    backgroundColor: colors.background,
  },
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

  //Social Area
  footer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingBottom: 10,
  },
  textFooter: {
    color: colors.textDark,
    textAlign: 'center',
  },
});
