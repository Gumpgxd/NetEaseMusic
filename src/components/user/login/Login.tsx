import React, { useState, useRef } from 'react'
import { message } from 'antd'
import { connect } from "react-redux"
import axios from 'axios'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from "./Login.module.css"

interface Props {
    sendAction: Function
}

const Login: React.FC<Props & RouteComponentProps> = (props) => {
    //创建ref 获取输入框值
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const userLogonRef = useRef<HTMLInputElement>(null)
    const passLogonRef = useRef<HTMLInputElement>(null)
    //创建state
    const [isAccount, setAccount] = useState<boolean>(true)

    const Login = async () => {
        const user_name: any = usernameRef.current?.value
        const password: any = passwordRef.current?.value
        if (user_name.trim() === "") {
            message.error("请填写用户名！")
            return
        } else if (password === "") {
            message.error('请填写密码！')
            return
        } else if (user_name.length < 3 || user_name.length > 16) {
            message.error('用户名长度为3-16位')
            return
        } else if (password.length < 6 || password.length > 16) {
            message.error('密码长度为6-16位')
            return
        } else {
            const loginMessage: object = {
                user_name,
                password
            }
            try {
                const { data: res }: any = await axios.post('/api/v1/user/login', loginMessage)
                if (res.code === 200) {
                    message.success('登录成功！')
                    window.sessionStorage.setItem("token", res.data.token)
                    props.sendAction("add_token", res.data.token)
                    props.history.push('/')
                } else {
                    message.error(res.msg)
                }
            } catch (err) {
                if (err) {
                    message.error('服务器错误')
                }
            }
        }
    }

    const Logon = async () => {
        const username: any = userLogonRef.current?.value
        const pass_word: any = passLogonRef.current?.value
        if (username.trim() === "") {
            message.error("请填写用户名！")
            return
        } else if (pass_word === "") {
            message.error('请填写密码！')
            return
        } else if (username.length < 3 || username.length > 16) {
            message.error('用户名长度为3-16位')
            return
        } else if (pass_word.length < 6 || pass_word.length > 16) {
            message.error('密码长度为6-16位')
            return
        } else {
            const loginMessage: object = {
                username,
                pass_word
            }
            try {
                const { data: res }: any = await axios.post('/api/v1/user/register', loginMessage)
                console.log(res)
                if (res.code === 200) {
                    message.success('注册成功！')
                    setAccount(true)
                } else {
                    message.error(res.msg)
                }
            } catch (err) {
                if(err) {
                    message.error('服务器错误')
                }
            }
        }
    }

    return <div className={styles.home}>
        <div className={styles.login_message}>
            <div className={styles.home_left}>
                <div className={styles.left_item}>
                    {
                        isAccount ? (<div>
                            <span className={styles.item_font}>登 录</span>
                            <form style={{ paddingTop: "10px" }}>
                                <div className={styles.item_input_box}>
                                    <input placeholder="用户名" type="text" className={styles.item_input} ref={usernameRef} />
                                </div>
                                {/* 错误提示 */}
                                <div className={styles.error_message}>
                                    <span className={styles.error_font}></span>
                                </div>
                                <div className={styles.item_input_box}>
                                    <input placeholder="密码" type="password" className={styles.item_input} ref={passwordRef} />
                                </div>
                                {/* 错误提示 */}
                                <div className={styles.error_message}>
                                    <span className={styles.error_font}></span>
                                </div>
                            </form>
                            <div className={styles.item_forgot}>
                                <span className={styles.item_a}>忘记密码</span>
                            </div>
                            <button className={styles.item_button} onClick={Login}>登录</button>
                        </div>) : (<div>
                            <span className={styles.item_font}>注 册</span>
                            <form style={{ paddingTop: "10px" }}>
                                <div className={styles.item_input_box}>
                                    <input placeholder="用户名" type="text" className={styles.item_input} ref={userLogonRef} />
                                </div>
                                {/* 错误提示 */}
                                <div className={styles.error_message}>
                                    <span className={styles.error_font}></span>
                                </div>
                                <div className={styles.item_input_box}>
                                    <input placeholder="密码" type="password" className={styles.item_input} ref={passLogonRef} />
                                </div>
                                {/* 错误提示 */}
                                <div className={styles.error_message}>
                                    <span className={styles.error_font}></span>
                                </div>
                            </form>
                            <button className={styles.item_button} onClick={Logon}>注册</button>
                        </div>)
                    }
                </div>
            </div>
            <div className={styles.home_right}>
                <div className={styles.right_item}>
                    {
                        isAccount ? (<div>
                            <span className={styles.item_right_font}>没有账号？</span>
                            <div className={styles.item_right_box}>
                                <span>立即注册加入我们，和我们一起开始听音乐吧</span>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <button className={styles.item_button_right} onClick={() => {
                                    setAccount(!isAccount)
                                }}>注册</button>
                            </div>
                        </div>) : (<div>
                            <span className={styles.item_right_font}>已有账号？</span>
                            <div className={styles.item_right_box}>
                                <span>立即登录加入我们，和我们一起开始听音乐吧</span>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <button className={styles.item_button_right} onClick={() => {
                                    setAccount(!isAccount)
                                }}>登录</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}


let mapDispatchToProps = (dispatch: any) => {
    return {
        sendAction: (e: string, payload: string) => {
            dispatch({
                type: e,
                payload: payload
            })
        }
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Login))
