import React, { Component } from 'react'
import { Carousel } from 'antd'
// import styles from "./Images.module.css"
import "./Images.css"

type StateType = {
    img0: string,
    img1: string,
    img2: string,
    img3: string,
    color: string
}

interface Images {
    state: StateType
}

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img0: "http://p1.music.126.net/CZr34Ni3xO6TyA1pYeGmCA==/109951166508594259.jpg?imageView&quality=89",
            img1: "http://p1.music.126.net/QH1PDIrEvICkW5EwAlDGOQ==/109951166508785471.jpg?imageView&quality=89",
            img2: "http://p1.music.126.net/3MO8PMy1Gfd-XpZj9N83hQ==/109951166508628091.jpg?imageView&quality=89",
            img3: "http://p1.music.126.net/E7w7NDkD4_cGDSAvFgVvkg==/109951166511120535.jpg?imageView&quality=89",
            color: ""
        }
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "rgba(36, 33, 40, 255)" }}>
                    <Carousel autoplay style={{ display: "block", backgroundColor: this.state.color }} afterChange={this.changeSwipe}>
                        <div id="img">
                            <h3>
                                <canvas id="canvas" width="1000px" height="360px"></canvas>
                            </h3>
                        </div>
                        <div id="img1">
                            <h3>
                                <canvas id="canvas1" width="1000px" height="360px"></canvas>
                            </h3>
                        </div>
                        <div id="img2">
                            <h3>
                                <canvas id="canvas2" width="1000px" height="360px"></canvas>
                            </h3>
                        </div>
                        <div id="img3">
                            <h3>
                                <img src={this.state.img3} alt="carousel-img"/>
                            </h3>
                        </div>
                    </Carousel>
                    <canvas id="canvas3" width="1000px" height="360px" style={{ display: "none" }}></canvas>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        const image = this.state.img0
        const getImgBox = document.getElementById('img') as HTMLDivElement
        let img = new Image()
        let canvas = document.getElementById('canvas') as HTMLCanvasElement
        let ctx: any = canvas.getContext('2d')
        img.src = `${image}`
        img.crossOrigin = "anonymous"
        img.onload = function () {
            ctx.drawImage(img, 0, 0, img.width, img.height)
            img.style.display = 'none'
            const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
            getImgBox.style.background = `rgba(${r}, ${g}, ${b}, ${a})`
        }
    }

    changeSwipe = (e) => {
        var images = ""
        if (e === 0) {
            images = this.state.img0
            const getImgBox = document.getElementById('img') as HTMLImageElement
            let img = new Image()
            let canvas = document.getElementById('canvas') as HTMLCanvasElement
            let ctx: any = canvas.getContext('2d')
            img.src = `${images}`
            img.crossOrigin = "anonymous"
            img.onload = function () {
                ctx.drawImage(img, 0, 0, img.width, img.height)
                img.style.display = 'none'
                const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
                getImgBox.style.background = `rgba(${r}, ${g}, ${b}, ${a})`
            }
        } else if (e === 1) {
            images = this.state.img1
            const getImgBox = document.getElementById('img1') as HTMLImageElement
            let img = new Image()
            let canvas = document.getElementById('canvas1') as HTMLCanvasElement
            let ctx: any = canvas.getContext('2d')
            img.src = `${images}`
            img.crossOrigin = "anonymous"
            img.onload = function () {
                ctx.drawImage(img, 0, 0, img.width, img.height)
                img.style.display = 'none'
                const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
                getImgBox.style.background = `rgba(${r}, ${g}, ${b}, ${a})`
            }
        } else if (e === 2) {
            images = this.state.img2
            const getImgBox = document.getElementById('img2') as HTMLImageElement
            let img = new Image()
            let canvas = document.getElementById('canvas2') as HTMLCanvasElement
            let ctx: any = canvas.getContext('2d')
            img.src = `${images}`
            img.crossOrigin = "anonymous"
            img.onload = function () {
                ctx.drawImage(img, 0, 0, img.width, img.height)
                img.style.display = 'none'
                const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
                getImgBox.style.background = `rgba(${r}, ${g}, ${b}, ${a})`
            }
        } else if (e === 3) {
            const _this = this
            images = this.state.img3
            let img = new Image()
            let canvas = document.getElementById('canvas3') as HTMLCanvasElement
            let ctx: any = canvas.getContext('2d')
            img.src = `${images}`
            img.crossOrigin = "anonymous"
            img.onload = function () {
                ctx.drawImage(img, 0, 0, img.width, img.height)
                img.style.display = 'none'
                const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
                _this.setState({
                    color: `rgba(${r}, ${g}, ${b}, ${a})`
                })
            }
        }
    }
}

export default Images