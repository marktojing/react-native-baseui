/**
 * @program: react-native-sun-ui
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-05-12 15:33
 **/
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from "prop-types"
import {baseScaleWidth} from "../../index";

export default class  PV_Item extends React.Component {
    static defaultProps={
        nameType:"space-between",
        nameStyle:{
            color: '#666', fontSize: 15
        },
        valueStyle:{
            color: "black",marginLeft: 4,width:220
        },
        space:4
    }
    static propTypes = {
        nameType:PropTypes.oneOf(["flex-start","space-between"]),
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        nameStyle:PropTypes.object,
        valueStyle:PropTypes.object,
        space:PropTypes.number,
        numberOfLines:PropTypes.number
    }

    render() {
        let {name, value,nameType,numberOfLines} = this.props;
        let arr = [];
        switch (nameType) {
            case "flex-start":
                arr.push(<Text
                    key={name+nameType}
                    style={this.props.nameStyle}>{name}</Text>)
                break;
            case "space-between":
                let textStyle = {...this.props.nameStyle,
                    width:60*baseScaleWidth/4
                }
                switch (name.length) {
                    case 2:
                        let i=0
                        for (let char of name) {
                            i++;
                            switch (i) {
                                case 1:
                                    arr.push(<Text
                                        key={char+i}
                                        style={textStyle}>{char}</Text>)
                                    break;
                                case 2:
                                    arr.push(<View   key={char+i+"view"} style={{width:60*baseScaleWidth/2}}/>)
                                    arr.push(<Text
                                        key={char+i}
                                        style={textStyle}>{char}</Text>)
                                    break;
                            }
                        }
                        break;
                    case 3:
                        let k=0
                        for (let char of name) {
                            k++;
                            switch (k) {
                                case 1:
                                    arr.push(<Text
                                        style={textStyle}>{char}</Text>)
                                    break;
                                case 2:
                                    arr.push(<View style={{width:60*baseScaleWidth/8}}/>)
                                    arr.push(<Text
                                        style={textStyle}>{char}</Text>)
                                    break;
                                case 3:
                                    arr.push(<View style={{width:60*baseScaleWidth/8}}/>)
                                    arr.push(<Text
                                        style={textStyle}>{char}</Text>)
                                    break;
                            }
                        }
                        break;
                    case 4:
                        let ik=0;
                        for (let char of name) {
                            ik++;
                            arr.push(<Text key={char+ik}
                                           style={textStyle}>{char}</Text>)
                        }
                        break;
                }
                break;
        }

        return (
            <View style={{flexDirection: 'row', alignItems: 'center',paddingVertical: this.props.space,marginRight: 8}}>
                {arr}
                <Text style={this.props.nameStyle}>{"："}</Text>
                <Text numberOfLines={numberOfLines?numberOfLines:2} ellipsizeMode={'tail'} style={this.props.valueStyle}>{value}</Text>
            </View>
        )
    }
}

