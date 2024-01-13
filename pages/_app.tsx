import 'normalize.css';
import '@/core/styles/global.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';
import AppContexts from '@/components/Common/Contexts';
import AnimatedLayout from '@/components/Common/AnimatedLayout';
import Head from "next/head";
import { DictionaryKey, TCommonDictionary } from '@/core/lib/i18n';
import usePageTranslation from '@/core/hooks/UsePageTranslation';

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
  const {t} = usePageTranslation<TCommonDictionary>(DictionaryKey.Common)
  return (
    <>
      <Head>
        <title>{t.common.meta.title}</title>
        <meta name="description" content={t.common.meta.description} />
      </Head>
      <div className={roboto.className}>
        <AppContexts>
          <AnimatedLayout>
            <Component {...pageProps} />
          </AnimatedLayout>
        </AppContexts>
      </div>
    </>
  )
}
