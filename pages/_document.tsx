import { Html, Head, Main, NextScript } from 'next/document'
import { Locale } from '@/core/lib/i18n';

export default function Document() {
  return (
    <Html lang={Locale.ru}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
