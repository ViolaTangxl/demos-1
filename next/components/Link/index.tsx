/**
 * @file 自动判断是否应使用 next/Link <Link> or <a> 的链接组件
 */

import React, { AnchorHTMLAttributes } from 'react'
import cls from 'classnames'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { isExternal } from 'utils'
import { checkInSite } from 'utils/route'

import { host } from 'constants/env'

import styles from './index.less'
import sourceUrls from './source-url'

export type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  blue?: boolean
}

export default function Link({ href, className, blue, children, ...others }: Props) {
  const { pathname } = useRouter()
  const classname = cls(className, blue && styles.blue)

  // 对于 hash 直接走 a 标签，next/link 会干掉 hrefe: hash 点击触发的 hashchange 事件
  if (href && href.indexOf('#') > -1) {
    // 当前页跳转 处于 /kodo 想跳转到 /kodo#target，生成 #target
    if (href.indexOf(pathname + '#') === 0) {
      return (
        <a
          className={classname}
          href={'#' + href.split('#')[1]}
          {...others}
        >
          {children}
        </a>
      )
    }

    // 不同页跳转 处于 /plsv 想跳转到 /kodo#target，不处理。交给 next/link 单页跳转

    // # 开头
    if (href[0] === '#') {
      return (
        <a
          className={classname}
          href={href}
          {...others}
        >
          {children}
        </a>
      )
    }
  }

  const checked = checkInSite(href)

  if (!checked.inSite) {
    // 站外链接默认新页面打开
    return (
      <a
        className={classname}
        target="_blank"
        rel="noopener"
        href={href}
        {...others}
      >
        {children}
      </a>
    )
  }

  // 当前内容嵌入其他站点时走此逻辑
  if (isExternal() && href != null) {
    href = new URL(href, host).href

    return (
      <a
        className={classname}
        href={href}
        {...others}
      >
        {children}
      </a>
    )
  }

  // NextLink 只适用于指向站内的 page，每个 page 会生成对应的 pagename.js 并 prefetch
  // 目标页面是被镜像回源到老官网的话，没有对应的 js，prefetch 会报错
  const shouldNotPrefetch = sourceUrls.some(url => url.test(checked.path))
  // https://github.com/vercel/next.js/blob/master/errors/prefetch-true-deprecated.md
  const prefetchProps = shouldNotPrefetch ? { prefetch: false } : {}

  return (
    <NextLink
      href={checked.path}
      {...prefetchProps}
    >
      <a
        className={classname}
        {...others}
      >
        {children}
      </a>
    </NextLink>
  )
}
