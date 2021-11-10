import React, { Component } from 'react'
import { FireTwoTone, CaretRightFilled, HeartFilled, PlayCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"
import styles from "./Main.module.css"
import { Row, Col } from 'antd';
import List from './List'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LeftOutlined, RightOutlined, ProfileTwoTone ,AppstoreTwoTone } from "@ant-design/icons"
import list from "../../music/home_music.json"

type myState = {
    last: boolean,
    next: boolean,
    mouse: boolean
}

interface Main {
    state: myState
}

class Main extends Component<RouteComponentProps> {
    constructor(props) {
        super(props)
        this.state = {
            last: false,
            next: false,
            mouse: false
        }
    }
    render() {
        let mylist: any = list[0].music
        let newlist: any = list[1].music
        let bangd1: any = list[2].music[0]
        let bangd2: any = list[2].music[1]
        let bangd3: any = list[2].music[2]
        let next: boolean = this.state.next
        let last: boolean = this.state.last
        return (
            <div>
                <div className={styles.home}>
                    {/* 头部 */}
                    <div className={styles.header}>
                        <div style={{ width: "93%", display: "flex" }}>
                            <div className={styles.icon}>
                                <FireTwoTone twoToneColor="#BE3A26" />
                            </div>
                            <span style={{ fontSize: "20px" }}>{list[0].name}</span>
                        </div>
                        {/* 更多 */}
                        <div className={styles.right} onClick={this.recmmend}>
                            <span>更多</span>
                            <CaretRightFilled style={{ color: "#BE3A26" }} />
                        </div>
                    </div>
                    {/* 身体第一部分 */}
                    <div>
                        <Row>
                            {
                                mylist.map((r, index) => {
                                    return <Col span={6} key={index}>
                                        <div className={styles.album}>
                                            <div className={styles.message}>
                                                <img src={r.img} alt="logo" className={styles.img}/>
                                                <div className={styles.play}>
                                                    <div style={{ width: "80%", fontSize: "18px" }}>
                                                        <span style={{zIndex:999}}>
                                                            <HeartFilled style={{ color: "red", margin: "0 5px" }} />
                                                        </span>
                                                        <span style={{ color: "#fff" }}>{r.love}</span>
                                                    </div>
                                                    <div style={{ fontSize: "25px", color: "#fff", cursor: "pointer" }}>
                                                        <PlayCircleOutlined />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.music_message}>
                                                <span>{r.name}</span>
                                                <span>-</span>
                                                <span>{r.star}</span>
                                            </div>
                                        </div>
                                    </Col>
                                })
                            }
                        </Row>
                    </div>
                </div>
                {/* 身体第二部分 */}
                <div className={styles.body_second}>
                    <div className={styles.header}>
                        <div style={{ width: "93%", display: "flex" }}>
                            <div className={styles.icon}>
                                <AppstoreTwoTone twoToneColor="#BE3A26" />
                            </div>
                            <span style={{ fontSize: "20px" }}>{list[1].name}</span>
                        </div>
                        {/* 更多 */}
                        <div className={styles.right} onClick={this.newMusic}>
                            <span>更多</span>
                            <CaretRightFilled style={{ color: "#BE3A26" }} />
                        </div>
                    </div>
                    {/* 滑动部分 */}
                    <div className={styles.move_box}>
                        <div className={styles.left_botton} onClick={this.lastList}>
                            <LeftOutlined style={{ color: "#898989", fontWeight: "bold", lineHeight: "240px" }} />
                        </div>
                        <div className={styles.box_width}>
                            <div className={[last ? styles.item_next_change : null, next ? styles.item_last_change : null].join("")} style={{ width: "2000px", display: "flex" }}>
                                {
                                    newlist.map((r, index) => {
                                        return <div className={styles.father_img} key={index}>
                                            <img className={styles.img_secend} src={r.img} alt="logo" />
                                            <div className={styles.music_message}>
                                                <span>{r.name}</span>
                                                <span>-</span>
                                                <span>{r.star}</span>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.right_button} onClick={this.nextList}>
                            <RightOutlined style={{ color: "#898989", fontWeight: "bold", lineHeight: "240px" }} />
                        </div>
                    </div>
                </div>
                {/* 身体第三部分 */}
                <div className={styles.body_third}>
                    <div className={styles.header}>
                        <div style={{ width: "93%", display: "flex" }}>
                            <div className={styles.icon}>
                                <ProfileTwoTone twoToneColor="#BE3A26" />
                            </div>
                            <span style={{ fontSize: "20px" }}>{list[2].name}</span>
                        </div>
                        {/* 更多 */}
                        <div className={styles.right} onClick={this.rankingOne}>
                            <span>更多</span>
                            <CaretRightFilled style={{ color: "#BE3A26" }} />
                        </div>
                    </div>
                    <div className={styles.max_table}>
                        <div className={styles.table_father1}>
                            <div className={styles.img_father}>
                                <div className={styles.image}>
                                    <img src={bangd1.image} alt="logo"/>
                                    <div className={styles.button}>
                                        <div className={styles.name_list} style={{ marginLeft: "10px" }}>
                                            <span>{bangd1.name}</span>
                                        </div>
                                        <div className={styles.button_icon}>
                                            <span>
                                                <PlayCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 10px", cursor: "pointer" }} />
                                            </span>
                                            <span>
                                                <PlusCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 0 10px 0", cursor: "pointer" }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table_box}>
                                <ul className={styles.item_ul}>
                                    {
                                        bangd1.list_music.map((r, index) => {
                                            if (index === 0) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} key={index} num={index}/>
                                                </div>
                                            } else if (index === 1) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} key={index} num={index}/>
                                                </div>
                                            } else if (index === 2) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} key={index} num={index}/>
                                                </div>
                                            } else {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} key={index} num={index}/>
                                                </div>
                                            }
                                        })
                                    }
                                    <div className={styles.list_component}>
                                        <li className={styles.item_li} style={{ position: "relative" }}>
                                            <span style={{ position: "absolute", right: "30px" ,cursor:"pointer"}} onClick={this.rankingOne}>查看全部&gt; </span>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.table_father2}>
                            <div className={styles.img_father}>
                                <div className={styles.image}>
                                    <img src={bangd2.image} alt="logo"/>
                                    <div className={styles.button}>
                                        <div className={styles.name_list} style={{ marginLeft: "10px" }}>
                                            <span>{bangd2.name}</span>
                                        </div>
                                        <div className={styles.button_icon}>
                                            <span>
                                                <PlayCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 10px", cursor: "pointer" }} />
                                            </span>
                                            <span>
                                                <PlusCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 0 10px 0", cursor: "pointer" }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table_box}>
                                <ul className={styles.item_ul}>
                                    {
                                        bangd2.list_music.map((r, index) => {
                                            if (index === 0) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else if (index === 1) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else if (index === 2) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            }
                                        })
                                    }
                                    <div className={styles.list_component}>
                                        <li className={styles.item_li} style={{ position: "relative" }}>
                                            <span style={{ position: "absolute", right: "30px" ,cursor:"pointer"}} onClick={this.rankingTwo}>查看全部&gt; </span>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.table_father3}>
                            <div className={styles.img_father}>
                                <div className={styles.image}>
                                    <img src={bangd3.image} alt="logo"/>
                                    <div className={styles.button}>
                                        <div className={styles.name_list} style={{ marginLeft: "10px" }}>
                                            <span>{bangd3.name}</span>
                                        </div>
                                        <div className={styles.button_icon}>
                                            <span>
                                                <PlayCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 10px", cursor: "pointer" }} />
                                            </span>
                                            <span>
                                                <PlusCircleOutlined style={{ color: "#898989", fontSize: "27px", margin: "0 0 10px 0", cursor: "pointer" }} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.table_box}>
                                <ul className={styles.item_ul}>
                                    {
                                        bangd3.list_music.map((r, index) => {
                                            if (index === 0) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else if (index === 1) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else if (index === 2) {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            } else {
                                                return <div className={styles.list_component} key={index}>
                                                    <List id={index} r={r} num={index}/>
                                                </div>
                                            }
                                        })
                                    }
                                    <div className={styles.list_component}>
                                        <li className={styles.item_li} style={{ position: "relative" }}>
                                            <span style={{ position: "absolute", right: "30px",cursor:"pointer" }} onClick={this.rankingThrid}>查看全部&gt; </span>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    lastList = () => {
        this.setState({
            next: true,
            last: false
        })
    }

    nextList = () => {
        this.setState({
            last: true,
            next: false
        })
    }

    recmmend = () => {
        this.props.history.push('/home/recommend')
    }

    newMusic = () => {
        this.props.history.push('/home/newsong')
    }

    rankingOne = () => {
        this.props.history.push('/home/ranking/1')
    }

    rankingTwo = () => {
        this.props.history.push('/home/ranking/2')
    }

    rankingThrid = () => {
        this.props.history.push('/home/ranking/3')
    }
}

export default withRouter(Main)
