/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-19 17:41
 **/
import React from 'react';
import {COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE} from "../../index";
import {Text, View} from "react-native";


export default class PV_TextItem extends React.Component {
    render() {
        let {name,value}=this.props;
        return(
            <View style={{
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 48,
                paddingHorizontal: 16,
                backgroundColor: COLOR_BACKGROUND_WHITE_100
            }}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: COLOR_TEXT_BLUE, fontSize: 15,}}>{"*"}</Text>
                    <Text style={{color: '#666', fontSize: 15,}}>{name}</Text>
                </View>
                <Text style={{color: "black", marginLeft: 4, fontSize: 14}}>{value}</Text>
            </View>
        )
    }
}
