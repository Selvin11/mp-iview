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
      'pages/address/main',
      'pages/selector/main',
      'pages/list/main',
      'pages/switch/main',
      'pages/checkbox/main',
      'pages/radio/main',
      'pages/slider/main',
      'pages/uploader/main',
      'pages/badge/main',
      'pages/gallery/main',
      'pages/grid/main',
      'pages/icons/main',
      'pages/panel/main',
      'pages/progress/main',
      'pages/actionsheet/main',
      'pages/dialog/main',
      'pages/msg/main',
      'pages/picker/main',
      'pages/toast/main',
      'pages/tabbar/main',
      'pages/alert/main', // alert
      'pages/avatar/main', // avatar
      'pages/drawer/main', // drawer
      'pages/input/main',
      'pages/input_number/main',
      'pages/keyboard/main',
      'pages/notice_bar/main',
      'pages/spin/main',
      'pages/steps/main',
      'pages/tabs/main',
      'pages/tag/main',
      'pages/layout/main',
      'pages/card/main', // card
      'pages/page/main'
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
