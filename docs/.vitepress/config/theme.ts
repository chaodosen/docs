import { nav } from "./nav"
import { sidebar } from "./sidebar"
export const themeConfig = {
  nav: nav,
  sidebar: sidebar,
  logo: '/logo.png',
  outline: 'deep', // 右侧大纲标题层级
  outlineTitle: '目录', // 右侧大纲标题文本配置
  outlineBadges: false, // 是否在大纲中显示 Badge 文本
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true

  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  // 编辑链接配置
  editLink: {
    pattern: 'https://github.com/chaodosen/chaodosen.github.io/edit/main/docs/:path',
    text: '敬请雅正'
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/chaodosen' }
  ],
  // 自定义扩展: 文章元数据配置
  articleMetadataConfig: {
    author: 'chaodosen', // 文章全局默认作者名称
    authorLink: '/about/me', // 点击作者名时默认跳转的链接
    showViewCount: false // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
    licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    copyright: `Copyright © 2019-${new Date().getFullYear()} chaodosen` // 版权信息
  }
}