import React,{useEffect} from 'react'
import { Row, Col } from 'antd'
import { PlayCircleOutlined, CustomerServiceOutlined } from "@ant-design/icons"
import { Pagination } from 'antd';
import styles from "./Recommend.module.css"

const NewSong: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return <div className={styles.home}>
        <Row>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} className={styles.img}/>
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
            <Col span={6}>
                <div className={styles['music-message']}>
                    <img src="http://cool.gumpxd.cn/file/1634544086699.png" alt="img" style={{ width: "100%" }} />
                    <div className={styles.play_list}>
                        <div style={{ position: "absolute", left: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <span>
                                <CustomerServiceOutlined />
                            </span>
                            <span style={{fontSize:"16px"}}>12423</span>
                        </div>
                        <span style={{ position: "absolute", right: "10px", bottom: "0px", lineHeight: "30px", fontSize: "19px", color: "#fff" }}>
                            <PlayCircleOutlined />
                        </span>
                    </div>
                </div>
                <div className={styles.music_name}>
                    <span>送你一朵小红花</span>
                    <span>-</span>
                    <span>赵英俊</span>
                </div>
            </Col>
        </Row>
        <div style={{paddingTop:"30px",margin:"0 auto",textAlign:"center"}}>
            <Pagination defaultCurrent={1} total={1000} defaultPageSize={20} pageSize={20} showSizeChanger={false}/>
        </div>
    </div>
}

export default NewSong