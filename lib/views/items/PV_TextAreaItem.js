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
import {Text, View} from "react-native";
import {COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE} from "../../index";
import PropTypes from "prop-types";
export default class PV_TextAreaItem extends React.Component{
    static defaultProps={
        startVisible:false

    }
    static propTypes={
        name:PropTypes.string,
        value:PropTypes.string,
        startVisible:PropTypes.bool
    }
    render() {
        let {name,value,startVisible}=this.props;
        return <View style={{
            height: 96,
            paddingHorizontal: 16,
            paddingVertical:13,
            backgroundColor: COLOR_BACKGROUND_WHITE_100
        }}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: startVisible?COLOR_BACKGROUND_WHITE_100:COLOR_TEXT_BLUE, fontSize: 15,}}>{"*"}</Text>
                <Text style={{color: '#282D37', fontSize: 15,}}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop:4}}>
                <Text style={{color: COLOR_BACKGROUND_WHITE_100, fontSize: 15}}>{"*"}</Text>
                <Text style={{color: 'black', fontSize: 14,}}>{value}</Text>
            </View>

        </View>
    }
}

