import React from "react";
import Home from "./page/home/Home";
import LoginPage from "./page/login/LoginPage";
import userPage from "./page/user/userPage";
import HomeRecommend from "./page/homeRecommend/HomeRecommend";
import HomeNewSong from "./page/homeNewSong/HomeNewSong";
import HomeRanking from "./page/homeRanking/HomeRanking";
import SearchPage from "./page/search/SearchPage";
import userMusicPage from "./page/userMusic/userMusicPage";
import SettingPage from "./page/setting/SettingPage";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {connect} from "react-redux"
import i18n from "i18next";
import axios from 'axios'
axios.defaults.baseURL = "http://wangyi.isekko.cn:3030"

interface appState {
  state:object
}

class App extends React.Component<appState&any> {
  render() {
    const my_langauge = this.props.language.language
    i18n.changeLanguage(my_langauge)
    axios.interceptors.request.use((config:any) => {
      if(config.url !== "users/login") {
        config.headers.token = 'Bearer ' + window.sessionStorage.getItem("token")
        return config
      }
    })
    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/user" component={userPage} />
            <Route path="/home/recommend" component={HomeRecommend} />
            <Route path="/home/newsong" component={HomeNewSong} />
            <Route path="/home/ranking/:id" component={HomeRanking} />
            <Route path="/user/music" component={userMusicPage} />
            <Route path="/user/setting" component={SettingPage} />
            <Route path="/search/:text" component={SearchPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps (state){
  return {
      token:state.token,
      language:state.language
  }
}

export default connect(mapStateToProps)(App)
