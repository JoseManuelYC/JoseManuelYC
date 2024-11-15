// main tools
import Document, { Html, Head, Main, NextScript } from 'next/document'

// types
import { DocumentContext, DocumentInitialProps } from 'next/document'

export default class MyDocument extends Document {
  private keywords = ['joseyanez', 'nodejs', 'cypress', 'nestjs', 'portafolio']

  static getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='author' content='JoseYanez' />
          <meta name='copyright' content='JoseYanez' />
          <meta name='keywords' content={this.keywords.join()} />
          <link rel='shortcut icon' href='/assets/logos/JY.png' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald&family=Anton&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
