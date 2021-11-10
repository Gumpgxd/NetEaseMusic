import React,{useState,useEffect} from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from './Selector.module.css'
import { useTranslation } from "react-i18next"
// import i18n from "i18next";
// import { connect } from "react-redux"

const Selector:React.FC<RouteComponentProps> = (props,state) => {
    const { t } = useTranslation()
    const [isActive,setActive] = useState<number>(1)

    const Recommend = () => {
        props.history.push('/')
    }

    const newMusic = () => {
        props.history.push('/home/newsong')
    }

    const ranking = () => {
        props.history.push('/home/ranking/1')
    }

    useEffect(() => {
        // const myPorps:any = props
        // const my_langauge = myPorps.language.language
        // i18n.changeLanguage(my_langauge)
        if(props.match.path === '/home/newsong') {
            setActive(2)
        }else if(props.match.path === "/home/recommend" || props.match.path === "/") {
            setActive(1)
        }else if(props.match.path === "/home/ranking/:id") {
            setActive(3)
        }
    },[props.match.path])

    return <div className={styles.home}>
        <div className={styles["list-home"]}>
            <ul className={styles.list}>
                <li><div className={isActive === 1 ? styles["list-active"]:styles["list-none-active"]} onClick={Recommend}>{t("header.recommend")}</div></li>
                <li><div className={isActive === 2 ? styles["list-active"]:styles["list-none-active"]} onClick={newMusic}>{t("header.new_song")}</div></li>
                <li><div className={isActive === 3 ? styles["list-active"]:styles["list-none-active"]} onClick={ranking}>{t("header.ranking_list")}</div></li>
            </ul>
        </div>
    </div>
}

// function mapStateToProps(state) {
//     return {
//         language:state.language
//     }
// }

export default withRouter(Selector)