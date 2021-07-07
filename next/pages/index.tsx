import React from 'react'

import Link from 'next/link'

import Layout from 'components/Layout'

export default function Index() {
  return (
    <Layout
      title=""
      description=""
      keywords=""
    >
      <Link href="/blog">到博客页</Link>
    </Layout>
  )
}
