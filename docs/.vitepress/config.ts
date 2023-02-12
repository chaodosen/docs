import { head } from "./config/head"
import { markdown } from "./config/markdown"
import { themeConfig } from "./config/theme"

export default {
    base: '/docs',
    cleanUrls: true,
    title: '知识星球',
    description: 'Just playing around.',
    themeConfig: themeConfig,
    markdown: markdown,
    head: head
  }
  