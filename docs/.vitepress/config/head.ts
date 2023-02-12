import { metaData } from './constants'

export const head = [
  ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
  ['meta', { name: 'author', content: 'chaodosen' }],
  ['meta', { name: 'keywords', content: '知识星球,知识库, 博客, chaodosen' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: metaData.locale }],
  ['meta', { property: 'og:title', content: metaData.title }],
  ['meta', { property: 'og:description', content: metaData.description }],
  ['meta', { property: 'og:site_name', content: metaData.title }],


]