import React,{ useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import RankingList from './RankingList'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from "./Recommend.module.css"
import style from "./../user/userpage/userPage.module.css"

const Ranking: React.FC<RouteComponentProps> = (props) => {

    const urlMessage:any = props.match.params
    const id:string = urlMessage.id
    const [isActive, setActive] = useState<String>("1")

    useEffect(() => {
        window.scrollTo(0,0)
        setActive(id)
    },[id])

    const rankingOne = () => {
        setActive("1")
    }

    const rankingTwo = () => {
        setActive("2")
    }

    const rankingThird = () => {
        setActive("3")
    }

    return <div className={styles.ranking_home}>
        <Row>
            <Col span={6} style={{borderRight:"1px solid #d4d3d4"}}>
                <div style={{ marginLeft: "20px", fontSize: "17px", fontWeight: 500, paddingBottom: "10px" }}>
                    <span>
                        云音乐特色榜
                    </span>
                </div>
                <div className={isActive === "1" ? styles.left_name_active:styles.left_name} onClick={rankingOne}>
                    <div className={styles.name_left}>
                        <img src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" style={{ height: "50px", width: "50px" }} alt="img" />
                    </div>
                    <div className={styles.name_right}>
                        <div>
                            <span style={{ fontSize: "13px" }}>飙升榜</span>
                        </div>
                        <div style={{ paddingTop: "3px" }}>
                            <span style={{ color: "#898989", fontSize: "14px" }}>刚刚更新</span>
                        </div>
                    </div>
                </div>
                <div className={isActive === "2" ? styles.left_name_active:styles.left_name} onClick={rankingTwo}>
                    <div className={styles.name_left}>
                        <img src="https://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" style={{ height: "50px", width: "50px" }} alt="img" />
                    </div>
                    <div className={styles.name_right}>
                        <div>
                            <span style={{ fontSize: "13px" }}>新歌榜</span>
                        </div>
                        <div style={{ paddingTop: "3px" }}>
                            <span style={{ color: "#898989", fontSize: "14px" }}>刚刚更新</span>
                        </div>
                    </div>
                </div>
                <div className={isActive === "3" ? styles.left_name_active:styles.left_name} onClick={rankingThird}>
                    <div className={styles.name_left}>
                        <img src="https://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" style={{ height: "50px", width: "50px" }} alt="img" />
                    </div>
                    <div className={styles.name_right}>
                        <div>
                            <span style={{ fontSize: "13px" }}>热歌榜</span>
                        </div>
                        <div style={{ paddingTop: "3px" }}>
                            <span style={{ color: "#898989", fontSize: "14px" }}>刚刚更新</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={18}>
                <div className={styles.right_box}>
                    <div style={{ width: "100%" }}>
                        <div className={styles.header}>
                            <div style={{ width: "93%", display: "flex" }}>
                                <span style={{ fontSize: "20px" }}>飙升榜</span>
                            </div>
                        </div>
                        <div className={style.body_table}>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                            <div className={styles.list_component}>
                                <RankingList />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}

export default withRouter(Ranking)