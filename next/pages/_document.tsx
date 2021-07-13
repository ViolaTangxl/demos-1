import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

import { wwwHost } from 'constants/env'

export default class MyDocument extends Document {
  render() {
    const externalsLoaderUrl = `${wwwHost}/externals/loader.js`

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          {/* https://stackoverflow.com/a/57888310 */}
          <script> </script>
          <script src={externalsLoaderUrl}></script>
          <Main />
          <NextScript />
          {/* https://stackoverflow.com/a/42969608 修复 Chrome 下 transition 会立即触发的问题 */}
          <script> </script>
        </body>
      </Html>
    )
  }
}
