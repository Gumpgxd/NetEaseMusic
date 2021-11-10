import React, { Component } from 'react'
import { PlayCircleOutlined } from "@ant-design/icons"
import styles from "../../main/Main.module.css"

export default class SongList extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <div className={styles.header}>
                    <div style={{ width: "93%", display: "flex" }}>
                        <span style={{ fontSize: "20px" }}>我的歌单</span>
                    </div>
                </div>
                <div className={styles['song-list']}>
                    <div style={{width:"20%"}}>
                        <div style={{ width: "150px", height: "150px",cursor:"pointer",position:"relative" }}>
                            <img src="http://cool.gumpxd.cn/file/1634536349841.png" alt="list-logo" style={{ width: "100%" }} />
                            <div className={styles.play_list}>
                                <span style={{position:"absolute",right:"7px",bottom:"0px",lineHeight:"30px",fontSize:"17px",color:"#fff"}}>
                                    <PlayCircleOutlined/>
                                </span>
                            </div>
                        </div>
                        <div style={{padding:"5px 0"}}>
                            <span style={{fontSize:"15px",color:"#898989"}}>我喜欢的音乐</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
