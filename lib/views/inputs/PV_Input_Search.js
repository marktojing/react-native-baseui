/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-08 10:21
 **/
import React from 'react';
import {View,Image,Dimensions,TextInput} from "react-native";
import {
    COLOR_BACKGROUND_BLACK_10,
    COLOR_BACKGROUND_E8_GRAY,
    COLOR_TEXT_BLACK_30,
} from "../../index";
import PropTypes from "prop-types";
let width = Dimensions.get('window').width
export default class PV_Input_Search extends React.Component{
    static defaultProps={
        secureTextEntry:false,
    }
    static propTypes={
        secureTextEntry:PropTypes.bool,
        placeholder:PropTypes.string.isRequired,

    }

    render() {
        let {placeholder,onChangeText} = this.props;
        return( <View style={{
            flex: 1,
            height: 36,
            paddingHorizontal: 8,
            backgroundColor: COLOR_BACKGROUND_E8_GRAY,
            borderRadius: 10,
            opacity: 0.5,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        }}>
            <Image source={require("../../img/search.png")} style={{width: 16, height: 16}}/>
            <View
                style={{height: 20, width: 1, marginLeft: 4, backgroundColor: COLOR_BACKGROUND_BLACK_10}}/>
            <TextInput style={{flex: 1, marginLeft: 8,paddingVertical: 0}} placeholder={placeholder}
                      placeholderTextColor={COLOR_TEXT_BLACK_30}/>
        </View>)
    }
}

