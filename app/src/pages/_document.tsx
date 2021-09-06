import Document, { Head, Html, Main, NextScript } from 'next/document'


export default class MYDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700,500,400,600,800&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />

        </body>
      </Html>
    )
  }
}