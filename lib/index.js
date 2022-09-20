/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-08 09:15
 **/
import {StyleSheet,Dimensions} from "react-native";
export const COLOR_BACKGROUND_WHITE_100 = "rgba(255,255,255,1)";
export const COLOR_BACKGROUND_BLACK_30 = "rgba(0,0,0,0.3)";
export const COLOR_BACKGROUND_BLACK_10 = "rgba(0,0,0,0.1)";
export const COLOR_BACKGROUND_BLACK_5 = "rgba(0,0,0,0.05)";
export const COLOR_TEXT_BLACK_30 = "rgba(0,0,0,0.3)";
export const COLOR_TEXT_BLACK = "#282D37";
export const COLOR_BLACK = "#000000";
export const COLOR_BACKGROUND_GRAY = "#F7F8F9";
export const COLOR_BACKGROUND_D8_GRAY = "#D8D8D8";
export const COLOR_BACKGROUND_E8_GRAY = "#E8E8E8";
export const COLOR_BACKGROUND_2_GRAY = "#F2F2F2";
export const COLOR_TEXT_BLUE = "#398AFC";
export const COLOR_BACKGROUND_BLUE_CIRCLE = "#2579FB";
export const COLOR_BACKGROUND_DARK_BLUE = "#0A53C6";
export const COLOR_BACKGROUND_ORANGE = "#FB892A";
export const COLOR_BACKGROUND_GREEN = "#37C89E";
export const COLOR_BACKGROUND_BROWN = "#C6600A";
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const baseScreenWidth = 375;
export const baseScreenHeight = 812;
export const baseScaleWidth = screenWidth/baseScreenWidth;
export const baseScaleHeight = screenHeight/baseScreenHeight;
export const STYLES  = StyleSheet.create({
    oo:{
        flexDirection:'row'
    }
})
