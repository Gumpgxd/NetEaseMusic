import React from "react";
import SongRanking from "./SongRanking";
import SongList from "./songList";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from "./userPage.module.css"

const UserPage: React.FC<RouteComponentProps> = (props) => {
    const setting = () => {
        props.history.push('/user/setting')
    }
    return <div className={styles.home}>
        <div className={styles.header}>
            <div className={styles["header-box"]}>
                <div className={styles["header-left"]}>
                    <img src="http://cool.gumpxd.cn/file/$2A$05$4OJZ29FAMEAJONWM0DZBNUQDGJA5VHEOW92CI5JZ0YXTR60B7KBRY.JPG" alt="avatar" />
                </div>
                <div className={styles["header-right"]}>
                    <div className={styles.right_header}>
                        <div style={{ width: "83.5%" }}>
                            <span style={{ fontSize: "22px", fontWeight: 600 }}>国如欧巴</span>
                        </div>
                        <div style={{ width: "16.5%" }}>
                            <button className={styles.user_button} onClick={setting}>编辑个人资料</button>
                        </div>
                    </div>
                    <div className={styles.right_middle}>
                        <div className={styles["middle-item-one"]}>
                            <span className={styles.number}>0</span>
                            <span className={styles.font}>歌曲</span>
                        </div>
                        <div className={styles["middle-item-tow"]}>
                            <span className={styles.number}>0</span>
                            <span className={styles.font}>歌单</span>
                        </div>
                    </div>
                    <div className={styles.right_bottom}>
                        <div>所在地区：四川省-成都市</div>
                        <div>性别：保密</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.middle_box}>
            <SongRanking/>
        </div>
        <div className={styles.middle_bottom}>
            <SongList/>
        </div>
    </div>
}

export default withRouter(UserPage)