import React, { Component } from 'react'
import { Layout, Typography } from "antd";

export default class Footer extends Component {

    render() {
        return (
            <div style={{borderTop:"1px solid #d4d3d3"}}>
                <Layout.Footer style={{paddingBottom:"55px"}}>
                    <Typography.Title level={3} style={{ textAlign: 'center' }}>
                        版权所有@网易云
                    </Typography.Title>
                </Layout.Footer>
            </div>
        )
    }
}
