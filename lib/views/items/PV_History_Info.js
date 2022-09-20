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
import {
    COLOR_BACKGROUND_2_GRAY,
    COLOR_BACKGROUND_WHITE_100,
    screenWidth
} from "../../index";
import PV_History_Item from "./PV_History_Item";

export default class PV_History_Info extends React.Component {
    static propTypes = {
        dealDot: PropTypes.string,
        dealMan: PropTypes.string,
        dealTime: PropTypes.string,
        dealDesc: PropTypes.string,
        urlConfig: PropTypes.string,
        historyArr: PropTypes.array,
    }

    constructor(props) {
        super(props);
        this.state = {
            historyArr: props.historyArr
        }
    }


    render() {
        let view = [];
        if (this.state.historyArr && this.state.historyArr.length > 0) {
            this.state.historyArr.map((value, index) => (view.push(
                <PV_History_Item key={value.id + index} isOne={this.state.historyArr.length === 1}
                                 itemContent={this.props.itemContent??[]}
                                 itemType={index === 0 ? "start" : index === (this.state.historyArr.length - 1) ? "end" : "center"}{...value}/>
            )))
        } else {
            view.push(<View key={"unHistory"}>
                <Text>{"无操作历史"}</Text>
            </View>)
        }
        return (
            <View style={{backgroundColor: COLOR_BACKGROUND_WHITE_100}}>
                <View style={{height: 49, marginLeft: 24, alignItems: 'center', flexDirection: 'row'}}><Text
                    style={{fontSize: 15}}>{"操作历史"}</Text></View>
                <View style={{width: screenWidth, height: 1, paddingHorizontal: 23}}><View
                    style={{flex: 1, backgroundColor: COLOR_BACKGROUND_2_GRAY}}/></View>
                {view}
            </View>
        )
    }
}



