import React from "React"
import { Input, Pagination } from "antd"
import RankingList from "../home/RankingList"
import style from "./Search.module.css"
import styles from "../home/Recommend.module.css"

const Search: React.FC = () => {
    const { Search } = Input
    return <div className={style.home}>
        <div className={style.search}>
            <Search placeholder="input search text" size="large" style={{ width: 400 }} />
        </div>
        <div>
            <span style={{ fontSize: "13px", color: "#898989" }}>搜索到"东哥"，找到100首歌曲</span>
        </div>
        <div className={styles.right_box} style={{width:"100%",paddingTop:"10px"}}>
            <div style={{ width: "100%" }}>
                <div>
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
        <div style={{margin:"0 auto",textAlign:"center",paddingBottom:"30px"}}>
            <Pagination defaultCurrent={1} total={1000} defaultPageSize={20} pageSize={20} showSizeChanger={false}/>
        </div>
    </div>
}

export default Search