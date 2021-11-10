import React from "React"
import TableList from "./TableList"
import styles from "../../main/Main.module.css"
import style from "./userPage.module.css"

const SongRanking: React.FC = () => {
    return <div style={{ width: "100%" }}>
        <div className={styles.header}>
            <div style={{ width: "93%", display: "flex" }}>
                <span style={{ fontSize: "20px" }}>听歌排行</span>
            </div>
        </div>
        <div className={style.body_table}>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
            <div className={styles.list_component}>
                <TableList/>
            </div>
        </div>
    </div>
}

export default SongRanking