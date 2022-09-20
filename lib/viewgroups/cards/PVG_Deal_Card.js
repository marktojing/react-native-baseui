/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-12 14:16
 **/
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
    COLOR_BACKGROUND_WHITE_100,
    COLOR_BACKGROUND_ORANGE, COLOR_BLACK, COLOR_BACKGROUND_GREEN
} from "../../index";
import PropTypes from "prop-types";

export default class PVG_Deal_Card extends React.Component {
    static defaultProps={

    }
    static propTypes = {
        colorType: PropTypes.oneOf(["orange", "green"]).isRequired,
        title: PropTypes.string.isRequired,
        sendTime: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onPress:PropTypes.func,
    }

    render() {
        let {colorType,title,sendTime,value,onPress} = this.props;
        return (
            <TouchableOpacity style={{
                backgroundColor: COLOR_BACKGROUND_WHITE_100,
                height: 77,
                flexDirection: 'row',
                borderRadius: 5,
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                shadowColor: '#ddd',
                alignItems: 'center',
                paddingVertical: 12,
                elevation: 4
            }} onPress={onPress}>
                <View style={{flex: 1, justifyContent: "space-between"}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{
                                width: 6,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: colorType==="orange"?COLOR_BACKGROUND_ORANGE:COLOR_BACKGROUND_GREEN
                            }}/>
                            <Text style={{marginLeft: 6,fontSize:17,color:COLOR_BLACK}}>{title}</Text>
                        </View>
                        <Text style={{fontSize:12,marginLeft:8}}>{sendTime}</Text>
                    </View>
                    <View style={{width:200,height:8}}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{
                            width: 4,
                            height: 4,
                        }}/>
                        <Text style={{marginLeft: 6,fontSize:15}}>{value}</Text>
                    </View>

                </View>
                    <Image source={require("../../img/right.png")} style={{width: 9, height: 17}}/>
            </TouchableOpacity>
        )
    }
}

