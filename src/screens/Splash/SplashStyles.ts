import {Dimensions, StyleSheet} from 'react-native';
// import colors from '../../styles/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const logoWidth = windowWidth / 3;
const zodiacWidth = windowWidth / 2.3;

const groupTop = windowHeight / 15; //Valor para deslocar Logo e Zodiac

const logoTop = groupTop;
const zodiacTop = groupTop - logoWidth - (zodiacWidth - logoWidth) / 2;
const sloganTop = groupTop * 1.4 - zodiacWidth;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFD',
  },

  //Logo Area
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'relative',
    top: logoTop,
    width: logoWidth,
    height: logoWidth,
  },
  zodiac: {
    position: 'relative',
    top: zodiacTop,
    width: zodiacWidth,
    height: zodiacWidth,
    opacity: 0.3,
  },
  slogan: {
    position: 'relative',
    top: sloganTop,
    // color: "#A4ADB9",
    color: '#d9c1f4',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
});
