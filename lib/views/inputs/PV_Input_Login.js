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
import {View,Image,Text,Dimensions,TextInput} from "react-native";
import {COLOR_BACKGROUND_BLACK_30, COLOR_BACKGROUND_WHITE_100,COLOR_TEXT_BLACK_30,COLOR_TEXT_BLUE} from "../../index";
import PropTypes from "prop-types";
let width = Dimensions.get('window').width
export default class PV_Input_Login extends React.Component{
    static defaultProps={
        secureTextEntry:false,
    }
    static propTypes={
        leftIcon:PropTypes.oneOfType([
            PropTypes.shape({
                uri: PropTypes.string,
                headers: PropTypes.objectOf(PropTypes.string),
            }),
            // Opaque type returned by require('./image.jpg')
            PropTypes.number,
            // Multiple sources
            PropTypes.arrayOf(
                PropTypes.shape({
                    uri: PropTypes.string,
                    width: PropTypes.number,
                    height: PropTypes.number,
                    headers: PropTypes.objectOf(PropTypes.string),
                }),
            ),
        ]).isRequired,
        secureTextEntry:PropTypes.bool,
        placeholder:PropTypes.string.isRequired,
        rightText:PropTypes.shape({
            text: PropTypes.string.isRequired,
            onPress: PropTypes.func,
        }),
    }
   static getDerivedStateFromProps(nextProps,state){
       if(nextProps.defaultValue!==state.defaultValue){
           return {
               value:nextProps.defaultValue,
               defaultValue:nextProps.defaultValue,
           }
       }
       return null
    }
    constructor(props){
        super(props);
        this.state={
            value:props.defaultValue,
            defaultValue:props.defaultValue,
        }
    }

    getTextValue =()=>{
        return this.state.value
    }
    render() {
        let {leftIcon,placeholder,rightText,secureTextEntry,onChangeText} = this.props;
        return(<View style={{height:52,width:width*343/375,marginHorizontal: 16,padding:8,borderRadius:8,backgroundColor:COLOR_BACKGROUND_WHITE_100,alignItems: 'center',flexDirection: 'row'}}>
            <Image style={{width:24,height:24,paddingHorizontal:8}} source={leftIcon} />
            <View style={{width:1,height:16,backgroundColor:COLOR_BACKGROUND_BLACK_30}}/>
            <TextInput  placeholder={placeholder}
                        onChangeText={(value)=>{
                            this.setState({value})
                        }}
                        defaultValue={this.props.defaultValue}
                        placeholderTextColor={COLOR_TEXT_BLACK_30}
                        secureTextEntry={secureTextEntry}
                        underlineColorAndroid="transparent"
                        style={{flex:1,padding:8,fontSize:16}}
            />
            {rightText&&<Text style={{fontSize:12,paddingHorizontal:8,color:COLOR_TEXT_BLUE}} onPress={()=>{
                console.log("点击文字")
                rightText.onPress();
            }}>{rightText.text}</Text>}

        </View>)
    }
}

