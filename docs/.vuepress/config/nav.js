module.exports = [
    {text: '首页',link: '/', icon: 'reco-home'},
    {text: 'Linux专栏',link: '/Linux/',icon: 'iconfont icon-centos'},
    {text: 'BUG',link: '/bugs/prob-in-work/method-breakpoints',icon: 'iconfont icon-bug'},
    {text: '面试题',link: '/interview/Java',icon: 'iconfont icon-mianshi'},
    {
        text:'计划',
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
    {
        text: '联系我',
        icon: 'reco-account',
        items: [
            {
                text: '关于我',
                link: '/about/',
                icon: 'iconfont icon-wowowo'
            },
            {
                text: 'Github',
                link: 'https://github.com/coderzds',
                icon: 'reco-github'
            },
            {
                text: 'CSDN',
                link: 'https://blog.csdn.net/coderzds',
                icon: 'reco-csdn'
            },
        ]
    },
]