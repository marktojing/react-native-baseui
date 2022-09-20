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
import {View} from 'react-native';
import PropTypes from "prop-types"
import {
     COLOR_BACKGROUND_D8_GRAY,
    COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLUE,
} from "../../index";
import PV_Item from "./PV_Item";

export default class PV_History_Item extends React.Component {
    static defaultProps = {
        isOne: false,
    }
    static propTypes = {
        isOne: PropTypes.bool,
        itemType: PropTypes.oneOf(["start", "center", "end"]),
        action: PropTypes.string,
        assigneeName: PropTypes.string,
        createTime: PropTypes.string,
        comments: PropTypes.string,
        itemContent:PropTypes.array,
    }
    constructor(props){
        super(props);
    }
    getLeftView = () => {
        if (this.props.isOne) {
            return <View style={{alignItems: 'center'}}>
                <View style={{
                    width: 10,
                    marginTop:14,
                    height: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: COLOR_TEXT_BLUE,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{width: 5, height: 5, borderRadius: 2.5, backgroundColor: COLOR_TEXT_BLUE}}/>
                </View>

            </View>
        } else {
            switch (this.props.itemType) {
                case "start":
                    return <View key={this.props.itemType} style={{alignItems: 'center'}}>
                        <View style={{
                            width: 10,
                            height: 10,
                            marginTop:14,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLOR_TEXT_BLUE,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{width: 5, height: 5, borderRadius: 2.5, backgroundColor: COLOR_TEXT_BLUE}}/>
                        </View>
                        <View style={{width: 1, flex: 1, backgroundColor: COLOR_BACKGROUND_D8_GRAY}}/>
                    </View>;
                case "center":
                    return <View key={this.props.itemType} style={{alignItems: 'center'}}>
                        <View style={{width: 1, height: 14, backgroundColor: COLOR_BACKGROUND_D8_GRAY}}/>
                        <View style={{
                            width: 10,
                            height: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLOR_TEXT_BLUE,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{width: 5, height: 5, borderRadius: 2.5, backgroundColor: COLOR_TEXT_BLUE}}/>
                        </View>
                        <View style={{width: 1, flex: 1, backgroundColor: COLOR_BACKGROUND_D8_GRAY}}/>
                    </View>;
                case "end":
                   return <View key={this.props.itemType} style={{alignItems: 'center'}}>
                        <View style={{width: 1, height: 14, backgroundColor: COLOR_BACKGROUND_D8_GRAY}}/>
                        <View style={{
                            width: 10,
                            height: 10,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: COLOR_TEXT_BLUE,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{width: 5, height: 5, borderRadius: 2.5, backgroundColor: COLOR_TEXT_BLUE}}/>
                        </View>
                    </View>

            }
        }
    }

    render() {
        let view = [];
        view.push(this.getLeftView())
        return (
            <View style={{
                backgroundColor: COLOR_BACKGROUND_WHITE_100,
                paddingHorizontal: 22,
                height: 100,
                flexDirection: "row"
            }}>
                {view}
                <View style={{marginTop: 10, marginLeft: 8}}>
                    {this.props.itemContent.map((value)=>(
                        <PV_Item nameType={"flex-start"} space={2} nameStyle={{color: "black", fontSize: 12}}
                                 valueStyle={{color: "black", fontSize: 12}} name={value.name} value={value.value}/>
                    ))}
                </View>
            </View>
        )
    }
}

