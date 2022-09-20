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
import {View, Text} from 'react-native';
import {
    baseScaleWidth,
    COLOR_BACKGROUND_WHITE_100,
    COLOR_BACKGROUND_ORANGE,
    COLOR_BACKGROUND_BROWN,
    COLOR_BACKGROUND_BLACK_10, COLOR_TEXT_BLUE, COLOR_BACKGROUND_DARK_BLUE
} from "../../index";
import PV_Button from "../../views/buttons/PV_Button";
import PropTypes from "prop-types";

export default class PVG_Card extends React.Component {
    static propTypes = {
        badgeText: PropTypes.string,
        colorType: PropTypes.oneOf(["orange", "blue"]).isRequired,
        titleName: PropTypes.string.isRequired,
        titleValue: PropTypes.string.isRequired,
        button: PropTypes.array,
        // button: PropTypes.shape({
        //     buttonType: PropTypes.oneOf(["blue"]).isRequired,
        //     buttonText: PropTypes.string.isRequired,
        //     onPress: PropTypes.func,
        // }),

    }

    render() {
        let {
            badge,
            colorType,
            badgeText,
            titleName,
            titleValue,
            itemArr,
            button,
            onPress
        } = this.props;
        let colorArr = {};
        switch (colorType) {
            case "orange":
                colorArr.color = COLOR_BACKGROUND_ORANGE;
                colorArr.back = COLOR_BACKGROUND_BROWN;
                break;
            case "blue":
                colorArr.color = COLOR_TEXT_BLUE;
                colorArr.back = COLOR_BACKGROUND_DARK_BLUE;
                break;
        }
        let buttonArr = [];
        if (button && button.length > 0) {
            button.map((value, index) => {
                let goast = {
                    borderWidth: 1,
                    borderColor: COLOR_TEXT_BLUE,
                    backgroundColor: COLOR_BACKGROUND_WHITE_100
                }


                buttonArr.push(<PV_Button key={value.buttonText} buttonTextStyle={{
                    color: value.goast ? COLOR_TEXT_BLUE : COLOR_BACKGROUND_WHITE_100,
                }} buttonStyle={{
                    width: 84, height: 32, borderRadius: 16,
                    marginRight: index !== (button.length - 1) ? 4 : 0,
                    backgroundColor: value.backgroundColor ? value.backgroundColor : COLOR_TEXT_BLUE,
                    ...value.goast ? goast : {},

                }} buttonText={value.buttonText} onPress={() => {
                    value.onPress && value.onPress(this.props.item)
                }}/>)
            })
        }

        return (
            <View style={{
                width: 343 * baseScaleWidth,
                borderRadius: 5,
                backgroundColor: COLOR_BACKGROUND_WHITE_100,
                shadowColor: '#999',
                shadowOffset:{width:2,height:2},
                shadowRadius:2,
                shadowOpacity:1,
                //让安卓拥有灰色阴影
                elevation: 4,
            }}>
                <View style={{flexDirection: 'row', height: 49, alignItems: 'center'}}>
                    <View style={{width: 2, height: 14, backgroundColor: colorArr.color}}/>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 15, marginLeft: 15}}>{titleName + titleValue}</Text>
                    </View>
                    {badgeText && <View style={{
                        height: 20, backgroundColor: colorArr.color,
                        justifyContent: 'center',
                        borderBottomLeftRadius: 10, borderTopLeftRadius: 10, marginRight: -4
                    }}>
                        <Text style={{
                            color: COLOR_BACKGROUND_WHITE_100,
                            fontSize: 11,
                            textAlign: 'center',
                            marginLeft: 5,
                            marginRight: 5
                        }}>{badgeText}</Text>
                        <View style={{
                            position: 'absolute', bottom: -5, right: -0.5, width: 0,
                            height: 0,
                            borderStyle: 'solid',
                            borderWidth: 3,
                            borderTopColor: colorArr.back,
                            borderLeftColor: colorArr.back,
                            borderBottomColor: 'rgba(0,0,0,0)',
                            borderRightColor: 'rgba(0,0,0,0)',
                            marginBottom: 0,
                            marginLeft: 0
                        }}/>
                    </View>}
                </View>
                <View style={{width: 343 * baseScaleWidth, paddingHorizontal: 8, height: 1}}>
                    <View style={{flex: 1, backgroundColor: COLOR_BACKGROUND_BLACK_10}}/>
                </View>
                <View style={{paddingHorizontal: 18, flex: 1, paddingVertical: 4}}>
                    {this.props.children}
                </View>
                {
                    button && button.length > 0 &&
                    <View style={{width: 343 * baseScaleWidth, paddingHorizontal: 8, height: 1}}>
                        <View style={{flex: 1, backgroundColor: COLOR_BACKGROUND_BLACK_10}}/>
                    </View>
                }
                {
                    button && button.length > 0 && <View style={{
                        flexDirection: 'row',
                        height: 47,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 27
                    }}>
                        {buttonArr}
                    </View>
                }


            </View>
        )
    }
}

