import {Platform, StyleSheet} from 'react-native';
import colorPalette from '../colors';

const shadowStyle = StyleSheet.create({
  ...Platform.select({
    ios: {
      shadowColor: colorPalette.darkText,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  }),
});

export default shadowStyle;
