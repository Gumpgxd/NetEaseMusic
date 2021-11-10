import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Play from '../../components/play/Play'
import UserMusic from "../../components/user/mymusic/UserMusic"
import styles from "../home/Home.module.css"

export default class userMusicPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <UserMusic/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}
