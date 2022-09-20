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
import {Platform, Text, TouchableOpacity, Image, View, Modal} from "react-native";
import {
    baseScaleWidth,
    COLOR_BACKGROUND_2_GRAY,
    COLOR_BACKGROUND_WHITE_100, COLOR_TEXT_BLACK_30,
    COLOR_TEXT_BLUE,
    screenWidth
} from "../../index";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";
import Sound from "react-native-sound";

export default class PV_UploadPicItem extends React.Component {
    static defaultProps = {
        needAdd: true,
    }
    static propTypes = {
        name: PropTypes.string,
        fileIds: PropTypes.string,
        id: PropTypes.string,
        needAdd: PropTypes.bool
    }

    constructor(props) {
        super(props);
        this.state = {
            photoSource: [],
            showPhotoSource: [],
            initialPageNum: 0,
            showSelectImage: false,
        }
    }

    componentDidMount() {
    }

    getPicArr = () => {
        return this.state.photoSource
    }
    showImagePickerOverLay=(callback) =>{
    }
    render() {
        let {name, needAdd} = this.props;
        let picArr = [];
        let ins = 1;
        if (this.state.photoSource && this.state.photoSource.length > 0) {
            ins = Math.floor(this.state.photoSource.length / 5) + 1;
            this.state.photoSource.map((value, index) => {
                let image=value;
                let styles={
                    width:64,
                    height:64
                }
                console.log("文件类型",value)
                if(value.fileName.endsWith("aac")||value.fileName.endsWith("mp3")){
                    image=require('../../img/yinpinbofang_48.png')
                    styles={
                        width:36,
                        height:36
                    }
                }
                if(value.fileName.endsWith("mp4")||value.fileName.endsWith("3gp")){
                    image=require('../../img/shipin_48.png')
                    styles={
                        width:48,
                        height:36
                    }
                }
                console.log("image",image)

                picArr.push(<TouchableOpacity key={index} style={{
                    width: 64, height: 64,
                    marginTop: Math.floor(index / 5) > 0 ? 4 : 8,
                    justifyContent: 'center', alignItems: 'center', borderRadius: 5,
                    marginLeft: index % 5 !== 0 ? 4 : 0,
                    borderWidth: 1, borderStyle: "dashed", borderColor: "#DDE3E9"
                }} onPress={() => {
                    if(value.fileName.endsWith("aac")||value.fileName.endsWith("mp3")){
                        this.whoosh = new Sound(value.path?value.path:value.uri, '', (err) => {
                            if (err) {
                                return console.warn(err)
                            }
                            this.whoosh.play(success => {
                                if (success) {
                                    console.log("音频播放完毕")
                                } else {
                                    console.log("音频播放失败")
                                }
                            })
                        })
                    }else{
                        this.setState({
                            initialPageNum: index,
                            showSelectImage: true
                        })
                    }


                }}>
                    <Image source={image} style={[{ borderRadius: 5},styles]}/>
                    {needAdd ? <TouchableOpacity style={{position: 'absolute', top: 0, right: 0, width: 16, height: 16}}
                                                 onPress={() => {
                                                     let imageArr = [...this.state.photoSource];
                                                     imageArr.splice(index, 1);
                                                     let showImageArr = [...this.state.showPhotoSource];
                                                     showImageArr.splice(index, 1);
                                                     this.setState({
                                                         photoSource: imageArr,
                                                         showPhotoSource: showImageArr,
                                                     })
                                                 }}>

                        <Image source={require('../../img/shanchu.png')} style={{width: 16, height: 16}}/>
                    </TouchableOpacity> : null}

                </TouchableOpacity>)
            })
        }
        needAdd ? this.props.id && picArr.push(
            <TouchableOpacity key={"add" + this.props.id} style={{
                width: 64,
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: this.state.photoSource.length % 5 === 0 ? 0 : 4,
                marginTop: ins > 1 ? 4 : 8,
                borderRadius: 5,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: "#DDE3E9"
            }} onPress={() => {
                this.showImagePickerOverLay((data)=>{
                    let names = data.path.split("/");
                    let source={
                        uri: data.uri, isStatic: true, fileName: names[names.length-1],path:data.path
                    }
                    this.setState({
                        photoSource: [...this.state.photoSource, source],
                        showPhotoSource: [...this.state.showPhotoSource, {
                            source: {
                                uri: source.uri,
                                path:data.path,
                                dimensions: {width: 150, height: 150}
                            }
                        }],
                    })
                })
            }}>
                <Image source={require("../../img/add.png")} style={{width: 24, height: 24}}/>
            </TouchableOpacity>
        ) : null
        return (
            <View >
                <View style={{height: 60 + 80 * ins}}>
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
                        <Text style={{
                            color: this.props.needAdd && this.props.id ? COLOR_TEXT_BLUE : COLOR_TEXT_BLACK_30,
                            marginLeft: 4,
                            fontSize: 14
                        }} onPress={() => {
                            // this.props.needAdd && this.props.id && this.selectPhoto();
                            this.props.needAdd && this.props.id && this.showImagePickerOverLay((data)=>{
                                console.log("data1",data)
                                let names = data.path.split("/");
                                let source={
                                    uri: data.uri, isStatic: true, fileName: names[names.length-1],path:data.path
                                }
                                this.setState({
                                    photoSource: [...this.state.photoSource, source],
                                    showPhotoSource: [...this.state.showPhotoSource, {
                                        source: {
                                            uri: source.uri,
                                            path:data.path,
                                            dimensions: {width: 150, height: 150}
                                        }
                                    }],
                                })
                            });
                        }}>{"选择"}</Text>
                    </View>
                    <View style={{paddingHorizontal: 23}}>
                        <View
                            style={{height: 1, width: 330 * baseScaleWidth, backgroundColor: COLOR_BACKGROUND_2_GRAY}}/>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 32,
                        paddingVertical: 2,
                        backgroundColor: COLOR_BACKGROUND_WHITE_100,
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {picArr}
                    </View>
                </View>

                <Modal visible={this.state.showSelectImage} onRequestClose={() => {
                    this.setState({
                        showSelectImage: false
                    })
                }}>

                    <View style={{position:'absolute',bottom:20,width:screenWidth}}>
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({
                                    showSelectImage: false
                                })
                            }}>
                                <Image source={require('../../img/view_image_pop.png')} width={40} height={40}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )

    }

    selectPhoto() {
        // More info on all the options is below in the README...just some common use cases shown here
        var options = {
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '图库',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else {
                let source = {
                    uri: 'data:image/jpeg;base64,' + response.data,
                    isStatic: true,
                    fileName: response.fileName
                };

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true, fileName: response.fileName};
                } else {
                    let filename = encodeURIComponent(response.fileName)
                    source = {uri: response.uri, isStatic: true, fileName: filename};
                }
                this.setState({
                    photoSource: [...this.state.photoSource, source],
                    showPhotoSource: [...this.state.showPhotoSource, {
                        source: {
                            uri: source.uri,
                            dimensions: {width: 150, height: 150}
                        }
                    }],
                })

            }

        });
    }

}


