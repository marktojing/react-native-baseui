/**
 * @program: 青海高速路网app
 *
 * @description:
 *
 * @author: SunRain
 *
 * @create: 2021-07-01 09:36
 **/
import React from "react";
import {View, Text, TouchableOpacity, Platform, Image} from "react-native";
import { screenHeight, screenWidth} from "../../index";
import {AudioRecorder, AudioUtils} from "react-native-audio";
import moment from 'moment';
export default class RecordSoundView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isPlaying:false,
            hasPermission: false,
            audioUri:'',
            audioTime:'',
            audioPath:(Platform.OS === 'ios' ? AudioUtils.DocumentDirectoryPath : AudioUtils.DownloadsDirectoryPath) +"/"+moment().format("YYYY-MM-DD")+ `/${moment().format("HHmmss")}audio.aac`,
        }
    }
    prepareRecordingPath = (path) => {
        const option = {
            SampleRate: 44100.0, //采样率
            Channels: 2, //通道
            AudioQuality: 'High', //音质
            AudioEncoding: 'aac', //音频编码 aac
            OutputFormat: 'mpeg_4', //输出格式
            MeteringEnabled: false, //是否计量
            MeasurementMode: false, //测量模式
            AudioEncodingBitRate: 32000, //音频编码比特率
            IncludeBase64: true, //是否是base64格式
            AudioSource: 0, //音频源
        }
        AudioRecorder.prepareRecordingAtPath(path, option)
    }
    componentDidMount() {
        AudioRecorder.requestAuthorization()
            .then(isAuthor => {
                if (!isAuthor) {
                    return alert('APP需要使用录音，请打开录音权限允许APP使用')
                }
                this.setState({hasPermission: isAuthor})
                this.prepareRecordingPath(this.state.audioPath);
                // 录音进展
                AudioRecorder.onProgress = (data) => {
                    this.setState({
                        audioTime: Math.ceil(data.currentTime)
                    });
                };
                // 完成录音
                AudioRecorder.onFinished = (data) => {
                    console.log("Data",{data})
                    // if (CommonUtil.isAndroid()) {
                    //     NativeModules.BarHeightModule.getUri(this.state.audioPath, (uri) => {
                    //         this.setState({audioUri: uri});
                    //         this.props.callback&&this.props.callback({uri:uri,path:this.state.audioPath},this.state.audioPath);
                    //     });
                    // }
                };
            })
    }
    componentWillUnmount() {
        // AudioRecorder.stopRecording()
    }

    render() {
        return (
            <View style={{width:screenWidth,height:screenHeight,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
                <TouchableOpacity onPress={()=>{
                    if(!this.state.isPlaying){
                        //开始录音
                        this.setState({isPlaying:true})
                        this.prepareRecordingPath(this.state.audioPath)
                        try {
                            AudioRecorder.startRecording();
                        } catch (err) {
                            this.setState({isAudio: false, audioTime: 0})
                        }
                    }else{
                        //结束录音
                        AudioRecorder.stopRecording();
                        // this.props.callback&&this.props.callback();
                    }

                }}>

                    <Image source={!this.state.isPlaying?require('../../img/zanting.png'):require('../../img/luyin.png')} style={{width: 64, height: 64}}/>
                </TouchableOpacity>
                {
                    this.state.isPlaying&&<Text style={{color:'white',marginTop:4}}>{"录音"+this.state.audioTime+"s"}</Text>
                }
            </View>
        );
    }

}

