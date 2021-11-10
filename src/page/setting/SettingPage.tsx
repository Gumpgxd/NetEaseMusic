import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Play from '../../components/play/Play'
import Setting from '../../components/user/setting/Setting'
import styles from "./../home/Home.module.css"

export default class SettingPage extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <Header/>
                <Setting/>
                <Footer/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}
