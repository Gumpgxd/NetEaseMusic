import React, { Component } from 'react'
import { CaretRightFilled, FolderAddFilled, RestFilled } from "@ant-design/icons"
import styles from "./Play.module.css"

interface myState {
    mouse: boolean
}

export default class PlayListItem extends Component<any, myState> {
    constructor(props) {
        super(props)
        this.state = {
            mouse: false
        }
    }
    render() {
        const { mouse } = this.state
        return (
            <div className={styles.item_home} onMouseOver={this.mouseActive} onMouseLeave={this.mouseLeave} style={{cursor:"pointer"}}>
                <div style={{ width: "7%", textAlign: "center" }}>
                    <span style={{ fontSize: "16px", lineHeight: "30px", color: "red", display: "none" }}><CaretRightFilled /></span>
                </div>
                <div style={{ width: "40%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>晴天</div>
                <div style={{ width: "10%", margin: "0 auto", display: "flex" }}>
                    {mouse ? (<div style={{display:"flex"}}>
                        <div style={{ paddingRight: "7px", cursor: "pointer" }} ><FolderAddFilled /></div>
                        <div style={{ cursor: "pointer" }}><RestFilled /></div>
                    </div>) : (<div></div>)}
                </div>
                <div style={{ width: "33%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>周杰伦</div>
                <div style={{ width: "10%", textAlign: "center" }}>03:24</div>
            </div>
        )
    }

    mouseActive = () => {
        this.setState({
            mouse: true
        })
    }

    mouseLeave = () => {
        this.setState({
            mouse: false
        })
    }
}
