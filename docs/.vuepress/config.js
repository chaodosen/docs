const pluginConfig = require("./config/plugin")
const headConfig = require("./config/head")
const nav = require("./config/nav")
const sidebar = require("./config/sidebar")
module.exports = {
    base: "/docs/",
    title: "石头屋",
    description: "太平洋比基尼海滩比奇堡贝克街126号石头下面",
    head: headConfig,
    plugins: pluginConfig,
    themeConfig: {
        logo: '/assets/img/icon.ico',
        lastUpdated: '最近更新',
        nav: nav,
        sidebar: sidebar 
    }
}