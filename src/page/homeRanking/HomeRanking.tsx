import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Ranking from '../../components/home/Ranking'
import Selector from '../../components/selector/Selector'
import Play from '../../components/play/Play'
import styles from "./../home/Home.module.css"

export default class HomeRanking extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Selector/>
                <div>
                    <Ranking/>
                </div>
                <Footer/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}
