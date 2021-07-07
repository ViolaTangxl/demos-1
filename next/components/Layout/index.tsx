/* eslint-disable react/no-danger */

/**
 * @file 全局的 Layout 组件
 * @description 每个页面的内容都应该用本组件包起来
 */

import React, { useCallback, ReactNode, PropsWithChildren } from 'react'

import Head from 'next/head'

import { defaultTitle, titleSuffix } from 'constants/page'

export type Props = {
  /** 页面 title */
  title: string
  /** 页面 keywords（SEO 用） */
  keywords: string
  /** 页面 description（SEO 用） */
  description: string
  children: ReactNode
}

export default function Layout({
  title,
  keywords,
  description,
  children
}: Props) {

  const pageTitle = !title ? defaultTitle : (title + titleSuffix)

  const keywordsMeta = keywords && (
    <meta name="keywords" content={keywords} />
  )

  const descriptionMeta = description && (
    <meta name="description" content={description} />
  )

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0,width=device-width,user-scalable=no"
        />
        <link
          rel="shortcut icon"
          href="//qiniu.staticfile.org/favicon.ico"
          type="image/x-icon"
        />
        {keywordsMeta}
        {descriptionMeta}
      </Head>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  )
}

type LoaderComponentType = 'header' | 'footer' | 'feedback-entry' | 'cps-visit-reporter'

// 加载官网提供的动态组件
function Loader({ component }: { component: LoaderComponentType }) {
  const containerId = `comp-${component}-container`
  const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
    (window as any).__qiniu_www_externals__.load(component, wrapper) // eslint-disable-line no-underscore-dangle
  }, [component])

  // header 给一个初始高度
  const initialStyle = component === 'header' && (
    <style dangerouslySetInnerHTML={{ __html: `
      #${containerId} { width: 100%; height: 80px; }
      @media screen and (max-width: 767px) {
        #${containerId} { height: 52px; }
      }
    ` }}
    />
  )

  return (
    <div
      id={containerId}
      ref={wrapperRef}
    >
      {initialStyle}
    </div>
  )
}

function ContentWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Loader component="header" />
      {children}
      <Loader component="footer" />
    </>
  )
}
