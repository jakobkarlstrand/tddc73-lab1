import {StyleSheet} from 'react-native';

export const COLORS = {
  MAIN: '#0E1117',
  LIGHT: '#1d1d1d',
  WHITE: '#C8D1D9',
};

export const STYLES = StyleSheet.create({
  text: {
    color: COLORS.WHITE,
  },
  iconCount: {
    flexDirection: 'row',
    marginVertical: 5,
  },
});
