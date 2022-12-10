module.exports = [
    { text: '首页', link: '/', icon: 'reco-home' },
    {
        text: '后端',
        icon: 'iconfont icon-kafei',
        items: [
            { text: 'Linux专栏', link: '/Linux/', icon: 'iconfont icon-centos' },
            { text: 'JavaSE', link: '/back-end/Java/chap16_reflex/', icon: 'iconfont icon-Coffee' }
        ]
    },

    { text: 'BUG', link: '/bugs/prob-in-work/method-breakpoints', icon: 'iconfont icon-bug' },
    { text: '面试题', link: '/interview/Java', icon: 'iconfont icon-mianshi' },
    {
        text: '计划',
        icon: 'iconfont icon-schedule',
        items: [
            {
                text: '电影',
                icon: 'iconfont icon-movie',
                link: '/schedule/movies/to-be-seen'
            }
        ]
    },
    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    { text: '日记', link: '/diary/2022/11', icon: 'iconfont icon-diary' },
    { text: '关于我', link: '/about/about-me', icon: 'iconfont icon-wowowo' }
]