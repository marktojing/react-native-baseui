/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-12 15:20
 **/
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import {COLOR_BACKGROUND_D8_GRAY, COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE} from "../../index";
import PropTypes from "prop-types";
export default class PV_Button extends React.Component{
    static defaultProps={
        buttonStyle:{
            width:84,height:32,borderRadius:16
        },
        goast:false,
    }
    static propType={
        buttonStyle:PropTypes.object,
        buttonTextStyle:PropTypes.object,
        onPress:PropTypes.func,
        itemId:PropTypes.string,
        goast:PropTypes.bool,
        buttonText:PropTypes.string.isRequired
    }
    constructor(props){
        super(props);
        this.state={
            buttonActive:false,
            buttonItemId:'',
            currentTime:new Date().getTime()
        }
    }
    componentDidMount() {
            this.setState({
                buttonActive:true
            })


    }

    render() {
        let viewStyle={};
        let goast={
            borderWidth:1,
            borderColor:COLOR_TEXT_BLUE,
            backgroundColor:COLOR_BACKGROUND_WHITE_100
        }
        if(this.state.buttonActive){
            viewStyle={
                backgroundColor:COLOR_TEXT_BLUE,
                ...this.props.goast?goast:{}
            }
        }else{
            viewStyle={
                backgroundColor:COLOR_BACKGROUND_D8_GRAY
            }
        }


        return(
            <TouchableOpacity style={[{alignItems: 'center',justifyContent:'center',elevation: 2,...viewStyle,...this.props.buttonStyle}]}
                              activeOpacity={this.state.buttonActive?0.7:1}
                              onPress={()=>{
                                  let currentTime = new Date().getTime();
                                  if((currentTime-this.state.currentTime)>1000){
                                      this.setState({
                                          currentTime:new Date().getTime()
                                      })
                                      this.state.buttonActive&&this.props.onPress(this.state.buttonItemId)
                                  }else{
                                      // ToastAI.showShortBottom("操作过于频繁，请稍后点击")
                                  }
                              }}>
                <Text style={{fontSize:14,color:this.props.goast&&this.state.buttonActive?COLOR_TEXT_BLUE:COLOR_BACKGROUND_WHITE_100,...this.props.buttonTextStyle}}>{this.props.buttonText}</Text>

            </TouchableOpacity>
        )
    }
}


