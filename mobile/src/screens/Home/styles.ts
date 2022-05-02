import { StyleSheet } from "react-native";
import {COLORS} from "../../theme"

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

// Components
import { Header } from "../../components/Header";

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: COLORS.BLACK_SECONDARY,
          paddingTop: getStatusBarHeight() + 17 
     
     }
})