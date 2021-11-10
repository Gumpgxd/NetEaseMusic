import React, { useEffect, useState, useRef } from 'React'
import PlayListItem from './PlayListItem'
import { CloseOutlined } from "@ant-design/icons"
import styles from "./Play.module.css"

const PlayList: React.FC<any> = (props) => {
    const divRef = useRef<any>(null)
    const [isList,setList] = useState<boolean>(false)
    const closeList = () => {
        props.getdata(isList)
    }

    useEffect(() => {
        // if(isList) {
            document.addEventListener("click",clickCallback,false)
            return () => {
                document.removeEventListener("click", clickCallback, false);
            };
        // }
    },[isList])

    const clickCallback = (e) => {
        if(divRef.current?.contains(e.target)) {
            return;
        }
        props.getdata(isList)
    }

    return <div className={styles.play_list_home} >
        <div className={styles.play_list_item} ref={divRef}>
            <div className={styles.list_header}>
                <span>播放列表</span>
                <span>（0）</span>
                <div className={styles.list_cha}>
                    <span style={{ cursor: "pointer" }} onClick={closeList}>
                        <CloseOutlined />
                    </span>
                </div>
            </div>
            <div className={styles.list_body}>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
                <ul className={styles.list_ul}>
                    <li><PlayListItem /></li>
                </ul>
            </div>
        </div>
    </div>
}

    //  cosnt closeList = () => {
    //     this.props.getdata(this.state.isList)
    // }

    // componentDidMount = () => {
    //     setTimeout(() => {
    //         if (this.props.list) {
    //             document.addEventListener("click", this.clickCallback.bind(this,1), false);
    //             document.removeEventListener("click", this.clickCallback.bind(this,2), false);
    //         }
    //     }, 200)
    // }

    // clickCallback = (e,x) => {
    //     console.log(x)
    //     console.log
    //     if (this.divRef.current?.contains(e.target)) {
    //         return;
    //     }else {
    //         this.props.getdata(this.state.isList)
    //     }


export default PlayList
