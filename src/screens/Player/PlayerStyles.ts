import {StyleSheet} from 'react-native';

import {colors} from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
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
    backgroundColor: colors.backgroundBlue,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 1,
    borderColor: colors.backgroundBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSpotify: {
    flex: 4,
    justifyContent: 'flex-start',
    backgroundColor: colors.backgroundBlue,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
  },
  containerSubtitle: {
    flexDirection: 'column',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  subtitleTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 2,
    paddingHorizontal: 0,
  },
  subtitleDescription: {
    color: colors.textLight,
    fontSize: 16,
    textAlign: 'center',
  },
});
