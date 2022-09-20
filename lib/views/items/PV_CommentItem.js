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
import {Text, Image, View} from "react-native";
import {COLOR_BACKGROUND_WHITE_100} from "../../index";
import PropTypes from "prop-types";
export default class PV_CommentItem extends React.Component{
    static propTypes={
        name:PropTypes.string,
        type:PropTypes.string,
    }
    render() {
        let {name,value}=this.props;
        let commentView=[];
        for(let k=0;k<value;k++){
            commentView.push(  <Image key={k+value} style={{ marginLeft: 16,width:16,height:16}} source={require("../../img/start_y.png")}/>)
        }
        for(let k=0;k<(5-value);k++){
            commentView.push(  <Image key={(5-k)+value} style={{ marginLeft: 16,width:16,height:16}} source={require("../../img/start_g.png")}/>)
        }

        return(
            <View style={{
                paddingVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: 48,
                paddingHorizontal: 16,
                backgroundColor: COLOR_BACKGROUND_WHITE_100
            }}>
                <View style={{flexDirection: 'row',marginRight: 8}}>
                    <Text style={{color: COLOR_BACKGROUND_WHITE_100, fontSize: 15,}}>{"*"}</Text>
                    <Text style={{color: '#666', fontSize: 15,}}>{name}</Text>
                </View>
                {commentView}
            </View>
        )
    }
}

