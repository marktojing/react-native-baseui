/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-18 11:02
 **/
import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE} from "../../index";
import PropTypes from "prop-types";
export default class PV_SelectItem extends React.Component{
    static propTypes={
        name:PropTypes.string,
        value:PropTypes.string,
        hint:PropTypes.string,
        onPress:PropTypes.func,
    }
    render() {
        let {name,value,hint,onPress}=this.props;
        return <TouchableOpacity style={{
            paddingVertical: 4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 48,
            paddingHorizontal: 16,
            backgroundColor: COLOR_BACKGROUND_WHITE_100
        }} onPress={onPress}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: COLOR_TEXT_BLUE, fontSize: 15,}}>{"*"}</Text>
                <Text style={{color: '#666', fontSize: 15,}}>{name}</Text>
            </View>
            <Text style={{color: "black", marginLeft: 4, fontSize: 14}}>{value?value:hint}<Text>{onPress?">":" "}</Text></Text>
        </TouchableOpacity>
    }
}

