import React, { Component} from 'react'
import styles from './Main.module.css'
import { HeartFilled, PlayCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
type myState = {
    mouse: boolean
}

type myProps = {
    id:number,
    r:object,
    num:number
}

interface List {
    state: myState,
    props:myProps
}

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mouse: false
        }
    }
    render() {
        const message:any = this.props.r
        const num:number = this.props.num
        return (
            <div>
                <li className={styles.item_li} onMouseOver={this.mouseActive} onMouseLeave={this.mouseLeave}>
                    <div className={styles.item_left}>
                        <span className={num >= 3 ? styles.color : styles.color1 }>{this.props.id + 1}</span>
                        <span style={{ margin: "0 12px" }}>
                            <span className={styles.item_a}>{message.name}</span>
                        </span>
                    </div>
                    <div className={this.state.mouse ? styles.item_active : styles.item_right}>
                        <span style={{ fontSize: "18px", color: "#898989", margin: "0 5px" }}><PlayCircleOutlined /></span>
                        <span style={{ fontSize: "18px", color: "#898989", margin: "0 5px" }}><PlusCircleOutlined /></span>
                        <span style={{ fontSize: "18px", color: "#898989", margin: "0 5px" }}><HeartFilled /></span>
                    </div>
                </li>
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

export default List