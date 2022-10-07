import { ServerStyleSheets } from '@mui/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (context) => {
  const materialSheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        materialSheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(context)
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  }
}
