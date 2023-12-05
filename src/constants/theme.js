import {Dimensions} from 'react-native';
import {Platform, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#262B2E',
  white: '#fff',
  gray1: '#D7D7D7',
  gray2: '#8A8D9F',
  green: '#1DBF73',
  lightGreen: 'rgba(29, 191, 115, 0.1)',
  lightGreen_02: 'rgba(29, 191, 115, 0.2)',
  lightYellow: 'rgba(255,199,0, 0.1)',
  lightRed: 'rgba(254,33,33, 0.1)',
  transparent: 'rgba(0,0,0, 0)',
  lightGray: '#F8F8F8',
  lightLilac: '#F4F1FC',
  carrot: '#FE724E',
  darkBlue: '#1F1D2B',
  yellow: '#FFC700',
  red: '#f40b0b',
  lightPink: '#FFEDF2',
  onboardingRedText: '#c2272e',
  normalGray: '#6c6c6c',
  darkGray: '#1f1f1f',
  lightBlue: '#2196f3',

  shadowStartColor: 'rgb(196,196,196, 0.07)',
  shadowFinalColor: 'rgb(255, 255, 255, 0.08)',
  shadowDistance: 12,
};

export const SIZES = {
  width,
  height,

  paddingTop_01: 20,
  paddingTop_02: 30,
  paddingTop_03: 40,
  paddingVertical: 25,

  paddingTop: 25,
  paddingBottom: 25,
};

export const FONTS = {
  Roboto_400Regular: {
    fontFamily: 'Roboto-Regular',
  },
  Roboto_500Medium: {
    fontFamily: 'Roboto-Medium',
  },
  Roboto_700Bold: {
    fontFamily: 'Roboto-Bold',
  },
  H1: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  },
  H2: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 22,
    color: COLORS.green,
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: 22 * 1.2,
  },
  H4: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: COLORS.gray2,
    textAlign: 'center',
    lineHeight: 16 * 1.3,
  },
};

export const SAFEAREAVIEW = {
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 0,//Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  DefaultBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
};
