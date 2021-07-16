/**
 * @file 页面信息相关定义
 */

export const defaultTitle = '七牛问答'
export const titleSuffix = ' - 七牛问答'

export enum Page {
  Index = 'index',
  Blog = 'blog',
  NotFound = 'notFound'
}

export const pageRoutes = {
  [Page.Index]: '/',
  [Page.Blog]: '/blog',
  [Page.NotFound]: '/404'
}
