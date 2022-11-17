const moment = require('moment')
moment.locale("zh-cn")
module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
          return moment(timestamp).format("l HH:mm:ss dddd")
        }
    },
    '@vuepress/back-to-top': true
}