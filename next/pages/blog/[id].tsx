/* eslint-disable react/no-danger */

import React from 'react'

import Layout from 'components/Layout'

import { Blog, getBlogByID } from 'apis/blog'

export type Props = Blog

export default function BlogPage({
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
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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

  if (!blogID) {
    res.setHeader('Location', '/404')
    res.statusCode = 307
    res.end()
  }

  try {
    const blog = await getBlogByID(blogID)

    return {
      props: { ...blog }
    }
  } catch (err) {
    const { data: { code: errCode } } = err

    if (errCode === 404) {
      res.setHeader('Location', '/404')
      res.statusCode = 307
      res.end()
    }
  }

  return {
    props: {}
  }
}
