import { FONTS } from './../../theme/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
     button: {
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 48,
     },
     title: {
          fontFamily: FONTS.BOLD,
          fontSize: 14
     },
     icon: {
          marginRight: 12
     }
});