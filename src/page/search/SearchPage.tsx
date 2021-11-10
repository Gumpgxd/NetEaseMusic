import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Play from '../../components/play/Play'
import Search from "../../components/search/Search"
import styles from "./../home/Home.module.css"

export default class SearchPage extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <Header/>
                <Search/>
                <div className={styles.playPosition}>
                    <Play/>
                </div>
            </div>
        )
    }
}