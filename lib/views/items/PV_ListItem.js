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
import {View, Text,ScrollView} from 'react-native';
import PropTypes from "prop-types"
import {
    COLOR_TEXT_BLUE,
    screenWidth,
    COLOR_BACKGROUND_2_GRAY,
    COLOR_BACKGROUND_WHITE_100, COLOR_BACKGROUND_GRAY
} from "../../index";
import PV_History_Info from "./PV_History_Info";
import PV_Button from "../buttons/PV_Button";
import PV_SelectItem from "./PV_SelectItem";
import PV_EditAreaItem from "./PV_EditAreaItem";
import PV_UploadPicItem from "./PV_UploadPicItem";
import PV_TextAreaItem from "./PV_TextAreaItem";
import PV_CommentItem from "./PV_CommentItem";
import PV_TextItem from "./PV_TextItem";

export default class PV_ListItem extends React.Component {
    static defaultProps = {
        arrayMap: []
    }
    static propTypes = {
        arrayMap: PropTypes.array,
    }
    getEditObj=()=>{
        let editObj={};
        this.props.arrayMap&&this.props.arrayMap.length>0&&
        this.props.arrayMap.map((value,index)=>{
            if(value.type==="editArea"&&value.children&&value.children.length>0){
                value.children.map((item,k)=>{
                    editObj[item.id]=this[item.id].getEditContent();
                })

            }
        })
        return editObj;
    }
    getAllObj=()=>{
        let obj={};
        this.props.arrayMap&&this.props.arrayMap.length>0&&
        this.props.arrayMap.map((value,index)=>{
            if(value.type==="editArea"&&value.children&&value.children.length>0){
                value.children.map((item,k)=>{
                    obj[item.id]=this[item.id].getEditContent();
                })

            } if(value.type==="uploadPic"&&value.children&&value.children.length>0){
                value.children.map((item,k)=>{
                    if(this[item.id]&&this[item.id].getPicArr){
                        obj[item.id]=this[item.id].getPicArr();
                    }

                })

            }
        })
        return obj;
    }
    getPicObj=()=>{
        let picObj={};
        this.props.arrayMap&&this.props.arrayMap.length>0&&
        this.props.arrayMap.map((value,index)=>{
            if(value.type==="uploadPic"&&value.children&&value.children.length>0){
                value.children.map((item,k)=>{
                    if(this[item.id]&&this[item.id].getPicArr){
                    picObj[item.id]=this[item.id].getPicArr();}
                })

            }
        })
        return picObj;
    }
    getView = (item, type,index) => {
        let viewArr = [];
        if(type==="button"){
            let buttonArr=[];
            item && item.map((value, k) => {

                let buttonStyle=item.length!==1?{
                    width:value.width?value.width:84,
                    height:44,borderRadius:22,
                }:{flex:1,height:44,borderRadius:22}
                buttonArr.push(<PV_Button key={value.buttonText} {...value}  buttonStyle={buttonStyle}/>)
            })
            viewArr.push(<View key={"buttonView"} style={{paddingHorizontal:16,paddingTop:24,paddingBottom: 38,flexDirection:'row',justifyContent:'space-between'}}>
                {buttonArr}
            </View>)
            return viewArr
        }
        item && item.map((value, k) => {
            viewArr.push(<Item key={value.name+"view3"+index} ref={o=>this[value.id?value.id:("item"+index+k)]=o}   viewType={type} {...value}/>)
            if (k === (item.length - 1)) {
                viewArr.push(<View key={value.name+"view1"} style={{width: screenWidth, height: 1, backgroundColor: COLOR_BACKGROUND_2_GRAY}}/>)
                viewArr.push(<View key={value.name+"view2"} style={{width: screenWidth, height: 8, backgroundColor: COLOR_BACKGROUND_GRAY}}/>)
            } else {
                viewArr.push(<View key={value.name+"view"} style={{width: screenWidth, height: 1, backgroundColor: COLOR_BACKGROUND_2_GRAY}}/>)
            }
        })
        return viewArr;
    }

    render() {
        let arr = [];
        this.props.arrayMap.map((value, index) => {
            arr.push(...this.getView(value.children, value.type,index))
        })
        return (
            <ScrollView style={this.props.style}>
            <View >
                {arr}
            </View>
            </ScrollView>
        )
    }
}

class Item extends React.Component {
    static propTypes = {
        viewType: PropTypes.oneOf(["text", "textArea", "select", "history","button","editArea","uploadPic","comment","commentItem"]).isRequired,
        name: PropTypes.string,
        value: PropTypes.any,
        hint: PropTypes.string,
        onPress:PropTypes.func,
        dealDot: PropTypes.string,
        dealMan:PropTypes.string,
        dealTime:PropTypes.string,
        dealDesc: PropTypes.string
    }
    getTextView=()=>{
        return <PV_TextItem {...this.props}/>
    }
    getTextAreaView=()=>{
        return <PV_TextAreaItem {...this.props}/>
    }
    getSelectView=()=>{
        return <PV_SelectItem {...this.props}/>
    }
    getHistory=()=>{
        return (<PV_History_Info urlConfig={"monitor-rescue/flowable/queryTaskByBusinessKey?businessKey="} {...this.props}/>)
    }
    getButtons=()=>{
        return (
            <View style={{paddingHorizontal:16,paddingTop:24,paddingBottom: 38}}>
                <PV_Button  {...this.props} buttonStyle={{flex:1,height:44,borderRadius:22}}/>
            </View>
           )
    }
    getEditArea=()=>{
        return <PV_EditAreaItem ref={o=>this.editRef=o} {...this.props}/>
    }
    getUploadPic=()=>{
        return <PV_UploadPicItem ref={o=>this.picRef=o} {...this.props}/>
    }
    getCommentView=()=>{
        return this.getView(this.props.type)
    }
    getCommentItemView=()=>{
        return <PV_CommentItem key={this.props.name} {...this.props}/>
    }
    getPicArr=()=>{
        return this.picRef.getPicArr();
    }
    getEditContent=()=>{
        return this.editRef.getEditContent();
    }
    getView=(viewType)=>{
        let {name, value,onPress,hint} = this.props;
        switch (viewType) {
            case "text"://只展示内容
                return this.getTextView();
            case "textArea"://展示多行文字
                return this.getTextAreaView();
            case "select"://选择条目
                return this.getSelectView();
            case "history"://操作记录
                return this.getHistory();
            case "button"://button按钮
                return this.getButtons();
            case "editArea":
                return this.getEditArea();
            case "uploadPic":
                return this.getUploadPic();
            case "comment":
                return this.getCommentView();
            case "commentItem":
                return this.getCommentItemView();
        }
        return (
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
    render() {
       return  this.getView(this.props.viewType);

    }
}

