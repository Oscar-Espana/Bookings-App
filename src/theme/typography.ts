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
    fontFamily: 'Trade Gothic LT Std Regular',
    fontSize: 14,
    lineHeight: 24,
  },
});
