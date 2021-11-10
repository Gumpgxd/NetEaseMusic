import React, { useState } from "React"
import styles from "./Setting.module.css"
import { Tabs, Form, Input, Button, Radio, DatePicker, Cascader, Upload } from 'antd';

const Setting: React.FC = () => {
    // const [loading] = useState<boolean>(false)
    const imgUrl: string = 'http://cool.gumpxd.cn/file/$2A$05$4OJZ29FAMEAJONWM0DZBNUQDGJA5VHEOW92CI5JZ0YXTR60B7KBRY.JPG'
    const { TabPane } = Tabs;
    const [currentTab, setCurrentTab] = useState<string>("1");
    const tabChange = (e) => {
        setCurrentTab(e)
    }

    const avater = () => {
        setCurrentTab("3")
    }
    const uploadButton = (
        <div>
            <div style={{ marginTop: 8, width: "200px" }}>点击上传</div>
        </div>
    );
    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];
    return <div className={styles.home}>
        <div><span style={{ fontSize: "24px", fontWeight: 500 }}>个人设置</span></div>
        <div style={{ paddingTop: "20px" }}>
            <Tabs type="card" activeKey={currentTab} onTabClick={tabChange}>
                <TabPane tab="基本设置" key="1" >
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "400px" }}>
                            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                                <Form.Item label="昵称" name="username">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="介绍" name="introduce">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item label="生日" name="birthday">
                                    <DatePicker placeholder="请选择" />
                                </Form.Item>
                                <Form.Item label="地区" name="area">
                                    <Cascader options={options} placeholder="请选择地区" />
                                </Form.Item>
                                <Form.Item label="性别" name="sex" style={{ paddingLeft: "2px" }}>
                                    <Radio.Group style={{ lineHeight: "42px" }}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                        <Radio value={3}>保密</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Form>
                            <div style={{ textAlign: "center" }}><Button type="primary">保存</Button></div>
                        </div>
                        <div style={{ width: "300px", marginLeft: "30px" }}>
                            <div style={{ width: "200px", height: "200px", position: "relative" }}>
                                <img src="http://cool.gumpxd.cn/file/$2A$05$4OJZ29FAMEAJONWM0DZBNUQDGJA5VHEOW92CI5JZ0YXTR60B7KBRY.JPG" style={{ width: "100%" }} />
                                <div className={styles.div} onClick={avater}><span>修改头像</span></div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="密码设置" key="2">
                    <div style={{width:"500px"}}>
                        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                            <Form.Item label="旧密码" name="oldPassword">
                                <Input/>
                            </Form.Item>
                            <Form.Item label="新密码" name="Password">
                                <Input/>
                            </Form.Item>
                            <Form.Item label="确认密码" name="newPassword">
                                <Input/>
                            </Form.Item>
                        </Form>
                        <div style={{width:"500px",textAlign:"center",paddingTop:"30px"}}>
                            <Button type="primary">修改</Button>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="头像设置" key="3">
                    <div style={{ width: "800px", display: "flex" }}>
                        <div style={{ width: "200px" }}>
                            <span style={{ fontSize: "25px", fontWeight: 500 }}>头像预览</span>
                            <img src={imgUrl} style={{ width: "200px", height: "200px", paddingTop: "20px" }} />
                        </div>
                        <div style={{ width: "300px", textAlign: "center", paddingTop: "100px" }}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action=""
                            >
                                {uploadButton}
                            </Upload>
                        </div>
                    </div>
                    <div style={{ width: "500px", margin: "0 auto", paddingTop: "40px" }}>
                        <Button type="primary">修改</Button>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    </div>
}

export default Setting