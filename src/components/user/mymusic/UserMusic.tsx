import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import RankingList from '../../home/RankingList'
import { PlayCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from "../../home/Recommend.module.css"
import style from "./../userpage/userPage.module.css"

const Ranking: React.FC<RouteComponentProps> = (props) => {

    const urlMessage: any = props.match.params
    const id: string = urlMessage.id
    const [isActive, setActive] = useState<String>("1")

    useEffect(() => {
        window.scrollTo(0, 0)
        setActive(id)
    }, [id])

    const rankingOne = () => {
        setActive("1")
    }

    return <div className={styles.ranking_home} style={{paddingBottom:"30px"}}>
        <Row>
            <Col span={6} style={{ borderRight: "1px solid #d4d3d4" }}>
                <div style={{ marginLeft: "20px", fontSize: "17px", fontWeight: 500, paddingBottom: "10px" }}>
                    <span>
                        我的歌单
                    </span>
                </div>
                <div className={isActive === "1" ? styles.left_name_active : styles.left_name} onClick={rankingOne}>
                    <div className={styles.name_left}>
                        <img src="https://p1.music.126.net/Km5BmpcnNzUjLHp2wpTCjQ==/3389794349236377.jpg?param=40y40" style={{ height: "50px", width: "50px" }} alt="img" />
                    </div>
                    <div className={styles.name_right}>
                        <div>
                            <span style={{ fontSize: "13px" }}>我喜欢的音乐</span>
                        </div>
                        <div style={{ paddingTop: "3px" }}>
                            <span style={{ color: "#000", fontSize: "13px" }}>42首</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span={18}>
                <div className={styles.right_box}>
                    <div style={{ width: "100%" }}>
                        <div className={style["header-box"]}>
                            <div className={style["header-left"]}>
                                <img src="https://p1.music.126.net/Km5BmpcnNzUjLHp2wpTCjQ==/3389794349236377.jpg?param=200y200" alt="avatar" />
                            </div>
                            <div className={style["header-right"]}>
                                <div className={style.right_header}>
                                    <span style={{ fontSize: "22px", fontWeight: 600 }}>我喜欢的音乐</span>
                                </div>
                                <div className={style.right_middle} style={{ display: "flex", lineHeight: "40px" }} >
                                    <div>
                                        <img src="http://cool.gumpxd.cn/file/$2A$05$4OJZ29FAMEAJONWM0DZBNUQDGJA5VHEOW92CI5JZ0YXTR60B7KBRY.JPG" alt="img" style={{ width: "40px", height: "40px" }} />
                                    </div>
                                    <div style={{ margin: "0 10px", color: "#0c73c2", cursor: "pointer" }}>
                                        <span>国如欧巴</span>
                                    </div>
                                </div>
                                <div className={style.right_bottom}>
                                    <div>
                                        <Button type="primary" icon={<PlayCircleOutlined />}>
                                            播放
                                        </Button>
                                        <Button type="primary" icon={<PlusOutlined />} style={{margin:"0 2px",padding:"3.4px 0"}}></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.header} style={{ display: "flex", lineHeight: "40px" }}>
                            <div>
                                <span style={{ fontSize: "20px" }}>歌曲列表</span>
                            </div>
                            <div style={{ padding: "0 20px" }}>
                                <span style={{ fontSize: "14px" }}>42首</span>
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