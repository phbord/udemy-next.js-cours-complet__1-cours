import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    // Structure de base des pages crées (en Nextjs)
    return (
      <Html lang="de">
        <Head/>
        <body className="loader-on">
          <Main/>
          <NextScript/>
          <div className="modal">Hello world</div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
