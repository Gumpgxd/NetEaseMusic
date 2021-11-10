import React, { Component, createRef } from 'react'
import styles from "./Play.module.css"
import PlayList from './PlayList';
import { ProfileFilled, SoundOutlined } from "@ant-design/icons"
import { StepBackwardOutlined, StepForwardOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Slider,Dropdown } from 'antd';
import music from "../../music/music.json"

interface State {
    time: number,
    nowTime: number,
    minTime: string,
    minNowTime: string,
    play: boolean,
    id: number,
    list: boolean
}

export default class Play extends Component<any, State> {
    audioRef = createRef<HTMLAudioElement>();
    constructor(props) {
        super(props)
        this.state = {
            time: music[0].time,
            nowTime: 0,
            minTime: "00:00",
            minNowTime: "00:00",
            play: true,
            id: 0,
            list: false
        }
    }

    render() {
        const time = this.state.nowTime
        const { list } = this.state
        const slider = (<div className={styles.dropdown_slider}>
            <Slider vertical disabled={false} defaultValue={30} style={{color:"#000"}}/>
        </div>)
        return (
            <div className={styles.play_hone}>
                <div className={styles.play}>
                    {/* 播放暂停 */}
                    <ul className={styles.icon_font}>
                        <li onClick={this.lastHandle} style={{cursor:"pointer"}}><StepBackwardOutlined /></li>
                        <li className={styles.play_button} onClick={this.handlePlay} style={{ cursor: "pointer" }}>
                            {
                                this.state.play === false ? <PauseCircleOutlined /> : <PlayCircleOutlined />
                            }
                        </li>
                        <li onClick={this.nextHandle} style={{cursor:"pointer"}}><StepForwardOutlined /></li>
                    </ul>
                    {/* 音乐播放 */}
                    <div className={styles.music_play}>
                        {/* 头像 */}
                        <div className={styles.music_avater}>
                            <img src={music[this.state.id].img} className={styles.avater_img} alt="music_img" />
                        </div>
                        {/* 进度条和信息 */}
                        <div className={styles.message_font}>
                            {/* 信息 */}
                            <div className={styles.music_all}>
                                <span className={styles.music_font}>{music[this.state.id].name}</span>
                                <span className={styles.music_star}>{music[this.state.id].star}</span>
                            </div>
                            {/* 进度条 */}
                            <div className={styles.progress_box}>
                                <Slider value={time} disabled={false} max={this.state.time} style={{ margin: "3px 0 0" }} onChange={this.SliderChange} onAfterChange={this.AfterChange} tipFormatter={null} />
                            </div>
                        </div>
                        <div className={styles.music_time}>
                            <span>{this.state.minNowTime}</span>
                            <span>/</span>
                            <span>{this.state.minTime}</span>
                        </div>
                        <audio ref={this.audioRef} id="audio"></audio>
                    </div>
                    <div className={styles.music_right}>
                        <div style={{ marginRight: "10px" }}>
                            <span style={{ color: "#898989", fontSize: "20px", cursor: "pointer" }} onClick={this.isListTrue} className={styles.hover_color}>
                                <ProfileFilled />
                            </span>
                        </div>
                        <div>
                            <span style={{ color: "#898989", fontSize: "20px", cursor: "pointer",display:"none" }} className={styles.hover_color}>
                                <Dropdown overlay={slider} placement="topCenter">
                                    <SoundOutlined />
                                </Dropdown>
                            </span>
                            
                        </div>
                    </div>
                    {
                        list ? (<div style={{ position: "fixed", bottom: "50px", width: "100%" }}>
                            <div>
                                <PlayList getdata={this.getDatas.bind(this)} list = {this.state.list}/>
                            </div>
                        </div>) : (<div></div>)
                    }
                </div>
            </div>
        )
    }
    //滑动事件
    SliderChange = (e) => {
        this.audioRef.current?.pause()
        //得到当前时间
        const get_time = this.geTime(e)
        this.setState(() => {
            return {
                nowTime: e,
                minNowTime: get_time
            }
        })
        //滑动改变播放时间
        let audio = document.getElementById("audio") as HTMLAudioElement
        audio.currentTime = e
    }
    
    //滑动完毕
    AfterChange = (e) => {
        if (!this.state.play) {
            this.audioRef.current?.play()
            //拖放到尾部时暂停
            if (e >= music[0].time) {
                this.audioRef.current?.pause()
            }
        }
    }

    // 生命周期
    componentDidMount = () => {
        const time: number = this.state.time
        const get_time = this.geTime(time)
        this.setState({
            minTime: get_time
        })
        let audio = document.getElementById("audio") as HTMLAudioElement
        audio.src = music[0].url
    }

    //点击播放
    handlePlay = () => {
        //同步更新state
        this.setState(() => ({
            play: !this.state.play
        }))
        if (this.state.play) {
            this.isPlay()
        }
    }

    //计算时间
    geTime = (time: number) => {
        var minString: any;
        var sString: any;
        const min: number = Math.floor((time - 1) / 60 % 60)
        const s: number = Math.floor((time - 1) % 60) + 1
        if (min < 10) {
            minString = "0" + min
        } else {
            minString = min
        }
        if (s < 10) {
            sString = "0" + s
        } else {
            sString = s
        }
        const get_time = minString + ":" + sString
        return get_time
    }

    //上一首
    lastHandle = () => {
        this.audioRef.current?.pause()
        let audio = document.getElementById("audio") as HTMLAudioElement
        audio.currentTime = 0
        if (this.state.id >= 1 && this.state.id <= music.length) {
            this.setState(() => ({
                id: this.state.id - 1,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[this.state.id - 1].time)
            }))
            audio.src = music[this.state.id - 1].url
        } else {
            this.setState(() => ({
                id: music.length - 1,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[music.length - 1].time)
            }))
            audio.src = music[music.length - 1].url
        }
        this.isPlay()
    }

    //下一首
    nextHandle = () => {
        this.audioRef.current?.pause()
        let audio = document.getElementById("audio") as HTMLAudioElement
        audio.currentTime = 0
        if (this.state.id < music.length - 1) {
            this.setState(() => ({
                id: this.state.id + 1,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[this.state.id + 1].time)
            }))
            audio.src = music[this.state.id + 1].url
        } else {
            this.setState(() => ({
                id: 0,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[0].time)
            }))
            audio.src = music[0].url
        }
        this.isPlay()
    }

    //播放完毕后下一首
    nextMusic = () => {
        this.audioRef.current?.pause()
        let audio = document.getElementById("audio") as HTMLAudioElement
        audio.currentTime = 0
        if (this.state.id < music.length - 1) {
            this.setState(() => ({
                id: this.state.id + 1,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[this.state.id + 1].time)
            }))
            audio.src = music[this.state.id].url
        } else {
            this.setState(() => ({
                id: 0,
                nowTime: 0,
                minNowTime: "00:00",
                play: false,
                minTime: this.geTime(music[0].time)
            }))
            audio.src = music[0].url
        }
        this.isPlay()
    }

    //播放
    isPlay = () => {
        //清除计时器
        let stopTimer: any = setInterval(";")
        for (var i = 0; i < stopTimer; i++) {
            clearInterval(i)
        }
        let audio = document.getElementById("audio") as HTMLAudioElement
        //播放
        this.audioRef.current?.play()
        var fun = () => {
            if (audio.currentTime > 0) {
                var now: number = this.state.nowTime + 1
                const get_time = this.geTime(now)
                this.setState({
                    nowTime: now,
                    minNowTime: get_time,
                    time:music[this.state.id].time
                })
            }
            //清除计时器
            if (this.state.play) {
                clearInterval(sh)
                this.audioRef.current?.pause()
            } else if (this.state.nowTime >= music[this.state.id].time) {//播放完毕
                clearInterval(sh)
                //播放结束 使时间归零
                audio.currentTime = 0
                this.nextMusic()
            }
        }
        var sh = setInterval(fun, 1000)
        clearInterval(sh)
        sh = setInterval(fun, 1000)
    }

    isListTrue = () => {
        this.setState({
            list:true
        })
    }

    getDatas = (msg) => {
        this.setState({
            list:msg
        })
    }
}
