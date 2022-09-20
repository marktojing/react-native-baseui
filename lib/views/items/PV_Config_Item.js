/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-24 10:10
 **/
import React from 'react';
import {Image, Text, View,TouchableOpacity} from "react-native";
import {COLOR_TEXT_BLACK_30} from "../../index";
import PropTypes from "prop-types";
export default class PV_Config_Item extends React.Component{
    static propTypes={
        src:PropTypes.any,
        name:PropTypes.string.isRequired,
        value:PropTypes.string,
        onPress:PropTypes.func,
    }
        render() {
        let {name,value,src,onPress} = this.props;
            return (
                <TouchableOpacity activeOpacity={onPress?0.7:1} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height:48,
                    paddingHorizontal:36,
                    justifyContent:'space-between',
                    marginTop:1,
                }} onPress={onPress}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image style={{
                            width: 16,
                            height: 16,
                        }} source={src}/>
                        <Text style={{
                            color: COLOR_TEXT_BLACK_30, fontSize: 15,marginLeft:8
                        }}>{name}</Text>
                    </View>
                    {
                        value? <Text style={{
                            color: COLOR_TEXT_BLACK_30, fontSize: 14,
                        }}>{value}</Text>:
                            <Image style={{
                                width: 24,
                                height: 24,
                            }} source={require('../../img/right2.png')}/>
                    }
                </TouchableOpacity>
            )
        }
}

