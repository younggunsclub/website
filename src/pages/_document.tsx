import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class DocumentWithLang extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentWithLang
