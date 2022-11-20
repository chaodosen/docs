const moment = require('moment')
moment.locale("zh-cn")
module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => {
      return moment(timestamp).format("l HH:mm:ss dddd")
    }
  },
  '@vuepress/back-to-top': true,
  '@vuepress/google-analytics': require('./google-analytics'),
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  }
}