const moment = require('moment')
moment.locale("zh-cn")
module.exports = {
    base: "/docs/",
    title: "石头屋",
    description: "太平洋比基尼海滩比奇堡贝克街126号石头下面",
    head: [
        ['link',{rel: 'icon',href: '/assets/img/icon.ico'}],
        ['meta',{name: 'author',content: 'coderzds'}],
        ['meta',{name: 'Keywords',content: '海绵宝宝,派大星'}],
    ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              return moment(timestamp).calendar()
            }
          }
        ],
        ['@vuepress/back-to-top']
      ],
    themeConfig: {
        logo: '/assets/img/icon.ico',
        lastUpdated: '最近更新',
        nav: [
            {text: 'Home',link: '/'},
            {text: 'about',link: '/about/'},
            {
              text: 'blogs',
              items: [
                {
                  text: 'test',link: '/blogs/2022/test'
                }
              ]
            }
        ],
        sidebar: {
            "/blogs/2022/": [
                'test',
                'test2'
            ]
        }
    }
}