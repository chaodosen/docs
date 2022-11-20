module.exports = {
    base: "/docs/",
    title: "石头屋",
    description: "太平洋比基尼海滩比奇堡贝克街126号石头下面",
    head: require("./config/head"),
    plugins: require("./config/plugin"),
    theme: 'reco',
    themeConfig: {
        logo: '/assets/img/icon.ico',
        lastUpdated: '最近更新',
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        subSidebar: 'auto',
        noFoundPageByTencent: false
    }
}