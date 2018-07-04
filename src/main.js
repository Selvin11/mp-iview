import Vue from 'vue'
import App from './App'
import LUI from '../packages'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(LUI)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/index/main',
      'pages/button/main',
      'pages/list/main',
      'pages/switch/main',
      'pages/checkbox/main',
      'pages/radio/main',
      'pages/slider/main',
      'pages/uploader/main',
      'pages/badge/main',
      'pages/footer/main',
      'pages/gallery/main',
      'pages/grid/main',
      'pages/icons/main',
      'pages/panel/main',
      'pages/preview/main',
      'pages/progress/main',
      'pages/actionsheet/main',
      'pages/dialog/main',
      'pages/msg/main',
      'pages/msg_success/main',
      'pages/msg_fail/main',
      'pages/picker/main',
      'pages/toast/main',
      'pages/navbar/main',
      'pages/tabbar/main',
      'pages/searchbar/main',
      'pages/alert/main', // alert
      'pages/avatar/main', // avatar
      'pages/drawer/main', // drawer
      'pages/input/main',
      'pages/input_number/main',
      'pages/notice_bar/main',
      'pages/spin/main',
      'pages/steps/main',
      'pages/tabs/main',
      'pages/tag/main',
      'pages/card/main' // card
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'MpLui',
      navigationBarBackgroundColor: '#f8f8f8',
      backgroundColor: '#f8f8f8'
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000
    },
    debug: true
  }
}
