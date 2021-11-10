import React, { Component } from 'react'
import { Menu, Input, Dropdown } from 'antd'
import styles from './Header.module.css'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { SearchOutlined, GlobalOutlined } from '@ant-design/icons';
import { withTranslation, WithTranslation } from "react-i18next"
import i18n from 'i18next';
import { connect } from "react-redux"
import logo from '../../logo.png'
import axios from 'axios'
import './Header.css'

interface myState {
    isLogin: boolean,
    avatar: string,
    isActive: number
}

interface Props {
    sendAction: Function,
    language:{
        language:string
    }
}

class Header extends Component<RouteComponentProps & WithTranslation & Props, myState> {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            avatar: "",
            isActive: 0
        }
    }
    render() {
        const languageList = [
            { name: "简体中文", code: "zh_cn" },
            { name: "繁體中文", code: "zh_tw" },
            { name: "English", code: "en" }
        ]
        const { t } = this.props
        const isLogin = this.state.isLogin
        const isActive = this.state.isActive
        const avatar = this.state.avatar

        const menu = (
            <Menu>
                <Menu.Item>
                    <span onClick={this.userHome}>{t("header.center")}</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.setting}>{t("header.setting")}</span>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.LogOut}>{t("header.logout")}</span>
                </Menu.Item>
            </Menu>
        );

        let menu_language = (
            <Menu>
                {
                    languageList.map((l) => {
                        return <Menu.Item key={l.code}>
                            <span onClick={() =>this.changeLanguage(l.code)}>{l.name}</span>
                        </Menu.Item>
                    })
                }
            </Menu>
        );
        return (
            <div className={styles.header}>
                <div className={styles.header_width}>
                    {/* logo */}
                    <div className={styles.logo_box} onClick={() => { this.props.history.push('/') }}>
                        <div className={styles.img_logo_box}>
                            <img src={logo} alt="logo" className={styles.logo_img} />
                        </div>
                        <span className={styles.logo_span}>{t("header.name")}</span>
                    </div>
                    {/* menu */}
                    <div style={{ position: "relative" }}>
                        <Menu mode={"horizontal"} theme={"dark"}>
                            <Menu.Item key="1" className={isActive === 1 ? styles['active-menu'] : styles.menu_color} onClick={this.findMusic}>{t("header.find_music")}</Menu.Item>
                            <Menu.Item key="2" className={isActive === 2 ? styles['active-menu'] : styles.menu_color} onClick={this.myMusic}>{t("header.my_music")}</Menu.Item>
                        </Menu>
                        {
                            isActive === 1 ? (<div className={styles.trangle}></div>) : (<></>)
                        }
                        {
                            isActive === 2 ? (<div className={styles.trangle2}></div>) : (<></>)
                        }
                    </div>
                    <div style={{ lineHeight: "60px" }}>
                        <Dropdown.Button overlay={menu_language} placement="bottomCenter" icon={<GlobalOutlined />}>
                        {t("header.type")}
                        </Dropdown.Button>
                    </div>
                    {/* search */}
                    <div className={styles.search_user}>
                        <div>
                            <Input placeholder={t("header.input")} prefix={<SearchOutlined />} onPressEnter={this.entersearch} />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            {
                                !isLogin ? (<Dropdown overlay={menu} placement="bottomCenter" arrow><img src={avatar} className={styles.user_avater} alt="user_avater" /></Dropdown>) : (<div style={{ width: "40px" }}><span style={{ color: "#898989", cursor: "pointer", fontSize: "13px" }} onClick={() => { this.props.history.push('/login') }}>{t("header.login")}</span></div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        const my_langauge = this.props.language.language
        i18n.changeLanguage(my_langauge)
        this.getUser()
        if (this.state.avatar === "") {
            this.setState({
                avatar: "http://cool.gumpxd.cn/file/$2A$05$3Q1BUA7T.TZN0NPB81VAPUT3M6XKIXHAINLDY7AUN3KBEKW47QA7K.png"
            })
        }
        if (this.props.match.path === '/user/music') {
            this.setState({
                isActive: 2
            })
        } else if (this.props.match.path === "/home/newsong" || this.props.match.path === "/home/recommend" || this.props.match.path === "/" || this.props.match.path === "/home/ranking/:id") {
            this.setState({
                isActive: 1
            })
        } else {
            this.setState({
                isActive: 0
            })
        }
    }

    getUser = async () => {
        if (window.sessionStorage.token) {
            const { data: res }: any = await axios.get('/api/v1/user/user_info')
            console.log(res)
            // if (res.code === 200) {
            //     const avatar = res.data[0].avater
            //     this.setState({
            //         avatar,
            //         isLogin: true
            //     })
            // } else if (res.code === 300) {
            //     message.error(res.msg)
            //     this.setState({
            //         avatar: "",
            //         isLogin: false
            //     })
            // } else {
            //     message.error(res.msg)
            //     this.setState({
            //         avatar: "",
            //         isLogin: false
            //     })
            // }
        }
        this.setState({
            avatar: '',
            isLogin: true
        })
    }

    LogOut = () => {
        window.sessionStorage.removeItem("token")
        this.setState({
            avatar: "http://cool.gumpxd.cn/file/$2A$05$3Q1BUA7T.TZN0NPB81VAPUT3M6XKIXHAINLDY7AUN3KBEKW47QA7K.png",
            isLogin: false
        })
    }

    userHome = () => {
        this.setState({
            isActive: 0
        })
        this.props.history.push('/user')
    }

    myMusic = () => {
        this.setState({
            isActive: 2
        })
        this.props.history.push('/user/music')
    }

    findMusic = () => {
        this.setState({
            isActive: 1
        })
        this.props.history.push('/')
    }

    setting = () => {
        this.props.history.push('/user/setting')
    }

    entersearch = () => {
        this.props.history.push('/search/1')
    }

    changeLanguage = (obj)=> {
        this.props.sendAction("change_language",obj)
    }
}

function mapStateToProps(state) {
    return {
        token: state.token,
        language:state.language
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendAction: (e:string,obj: string) => {
            dispatch({
                type: e,
                payload:obj
            })
        }
    }
}

export default withTranslation()(connect(mapStateToProps,mapDispatchToProps)(withRouter(Header)))