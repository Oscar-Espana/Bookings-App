import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const typography = StyleSheet.create({
  heading1: {
    color: palette.primary,
    fontFamily: 'Quentin',
    fontSize: 48,
  },
 
  heading2: {
    color: palette.primary,
    fontFamily: 'Analogue',
    fontSize: 30
  },
  heading3: {
    color: palette.primary,
    fontFamily: 'Analogue',
    fontSize: 24
  },
  body1: {
    color: palette.gray,
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400'
  },
  body1Bold: {
    color: palette.neutral,
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700'
  },  
  body2: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std Extended',
    fontSize: 14,
    lineHeight: 24,
  },greet: {
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
    fontWeight: '700',
    color: palette.primary,
    lineHeight: 22
  }, 
  nightsFont: {
    color: palette.background,
    fontFamily: 'Trade Gothic LT Std Extended',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    
    
  }
});
