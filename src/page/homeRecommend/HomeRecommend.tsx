import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Recommend from '../../components/home/Recommend'
import Selector from '../../components/selector/Selector'
import Play from '../../components/play/Play'
import styles from "./../home/Home.module.css"

export default class HomeRecommend extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Selector/>
                <div>
                    <Recommend/>
                </div>
                <Footer/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}
