/* eslint-disable react/no-danger */

import React from 'react'

import Router from 'next/router'

import Layout from 'components/Layout'
import BlogViewer from 'components/BlogViewer'

import { Blog, getBlogByID } from 'apis/blog'

import { pageRoutes } from 'constants/page'

import { isBrowser } from 'utils'

export type Props = Blog

export default function BlogContentPage({
  title,
  description,
  keywords,
  content
}: Props) {

  title = title || '博客页面'
  description = description || '博客页面'
  keywords = keywords || '博客页面'

  return (
    <Layout
      title={title}
      description={description}
      keywords={keywords}
    >
      <BlogViewer
        content={content}
      />
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const blogs = await getBlogsList()

//   const paths: any = blogs.map(
//     (blog: Blog) => ({
//       params: { id: blog.id }
//     })
//   )

//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }: any) {
//   const blog = await getBlogByID(params.id)

//   return {
//     props: { ...blog }
//   }
// }

export async function getServerSideProps({ res, params }: any) {
  const blogID = params.id || ''
  const notFoundPageRoute = pageRoutes.notFound

  const redirectOnError = () => (
    isBrowser() ? Router.push(notFoundPageRoute) : res.writeHead(302, { Location: notFoundPageRoute }).end()
  )

  if (!blogID) {
    redirectOnError()

    return {
      props: {}
    }
  }

  try {
    const blog = await getBlogByID(blogID)

    return {
      props: { ...blog }
    }
  } catch (err) {
    const { data: { code: errCode } } = err

    if (errCode === 404) {
      redirectOnError()

      return {
        props: {}
      }
    }
  }

  return {
    props: {}
  }
}
