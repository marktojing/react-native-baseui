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
import {Text, TextInput, View} from "react-native";
import {COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE} from "../../index";
import PropTypes from "prop-types";
export default class PV_EditAreaItem extends React.Component{
    static propTypes={
        name:PropTypes.string,
        value:PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }
    getEditContent=()=>{
       return  this.state.value;
    }
    render() {
        let {name,value}=this.props;
        return <View style={{
            height: 96,
            paddingHorizontal: 16,
            paddingVertical:13,
            backgroundColor: COLOR_BACKGROUND_WHITE_100
        }}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: COLOR_TEXT_BLUE, fontSize: 15,}}>{"*"}</Text>
                <Text style={{color: '#666', fontSize: 15,}}>{name}</Text>
            </View>
            <View style={{flexDirection: 'row',marginTop:4,marginRight: 4}}>
                <Text style={{color: COLOR_BACKGROUND_WHITE_100, fontSize: 15}}>{"*"}</Text>
                <TextInput style={{flex:1,color: 'black', fontSize: 14,padding:0,margin:0}} 
                           placeholder={"请输入"} defaultValue={value} multiline={true}
                          onChangeText={(value)=>{
                    this.setState({value})
                }}/>
            </View>

        </View>
    }
}

