import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Play from '../../components/play/Play'
import UserPage from '../../components/user/userpage/UserPage'
import styles from "../home/Home.module.css"

export default class userPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <UserPage/>
                <Footer/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}
