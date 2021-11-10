import React, { Component } from 'react'
import { PlayCircleOutlined, PlusOutlined, HeartFilled } from "@ant-design/icons"
import style from "./userPage.module.css"

interface myFtate {
    mouse: boolean
}

export default class TableList extends Component<any, myFtate> {
    constructor(props) {
        super(props)
        this.state = {
            mouse: false
        }
    }
    render() {
        const mouse = this.state.mouse
        return (
            <div className={style.item} onMouseOver={this.mouseActive} onMouseLeave={this.mouseLeave}>
                <div style={{ marginLeft: "20px", width: "70%", display: "flex" }}>
                    <span>1.</span>
                    <div style={{ margin: "0 10px", color: "#898989", fontSize: "17px", lineHeight: "40px" }}>
                        <PlayCircleOutlined />
                    </div>
                    <div className={style.pass_word}>
                        <span>wake</span>
                        <div style={{ margin: "5px", lineHeight: "28px" }}>
                            <span style={{ color: "#898989" }}>  -  </span>
                        </div>
                        <span style={{ color: "#898989" }}>Hillsong</span>
                    </div>
                </div>
                <div style={{ width: "30%" }}>
                    {
                        !mouse ? (<div style={{width:"40px",textAlign:"center"}}><span>3次</span></div>) : (
                            <div style={{ fontSize: "17px", color: "#898989", display: "flex" }}>
                                <div style={{ margin: "0 3px 0 0", cursor: "pointer" }}><PlusOutlined /></div>
                                <div style={{ margin: "0 0 0 3px", cursor: "pointer" }}><HeartFilled /></div>
                            </div>
                        )
                    }
                </div>
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
