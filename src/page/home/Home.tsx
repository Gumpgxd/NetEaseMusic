import React, { Component } from 'react'
import Play from '../../components/play/Play'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import styles from "./Home.module.css"
import Images from '../../components/carousel/Images'
import Main from '../../components/main/Main'
import Selector from '../../components/selector/Selector'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Selector/>
                <Images/>
                <div>
                    <Main/>
                </div>
                <Footer/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}

export default Home
