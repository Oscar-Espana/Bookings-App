import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const typography = StyleSheet.create({
  heading1: {
    color: palette.primary,
    fontFamily: 'Quentin',
    fontSize: 48,
  },
  body2: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std Extended',
    fontSize: 14,
    lineHeight: 24,
  },
  heading2: {
    color: palette.primary,
    fontFamily: 'Analogue',
    fontSize: 30
  },
  greet: {
      fontFamily:'Quentin',
      fontSize: 24,
      color: palette.primary
  }, 
  cardFont: {
    fontFamily: 'Trade Gothic LT Std Extended',
    fontSize: 18,
    color: palette.background
  },
  pricesFont: {
    fontFamily: 'Trade Gothic LT Std Extended',
    fontSize: 18,
    color: palette.primary
  }
});
