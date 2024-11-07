// main tools
import { useRouter } from 'next/router'
import Head from 'next/head'

// components
import { PageLoader } from '@molecules/page-loader'

// providers
import { AppContextProvider } from 'context/app/provider'
import { SSRProvider } from 'react-bootstrap'

// dayjs
import { locales } from 'lib/dayjs/locales'
import 'lib/dayjs/plugins'
import dayjs from 'dayjs'

// styles
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'styles/globals.scss'

// types
import type { AppProps } from 'next/app'
import { NextPage } from 'next'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter()
  const permalink = 'https://josejmv.vercel.app'
  dayjs.locale(locales[locale as keyof typeof locales])

  return (
    <>
      <Head>
        <title>JoseYanez</title>
        <link rel='canonical' href={permalink} />
        <meta name='theme-color' content='#d59938' />
        <link rel='manifest' href='/manifest.json' />
        <meta property='og:type' content='website' />
        <meta name='robots' content='index follow' />
        <meta property='og:url' content={permalink} />
        <meta name='description' content='Portafolio' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta property='og:description' content='Portafolio' />
        <meta property='og:title' content='JoseYanez - portafolio' />
        <meta
          property='og:image'
          content={`${permalink}/assets/logox/icon-256x256.png`}
        />
      </Head>

      <SSRProvider>
        <AppContextProvider>
          <PageLoader>
            <Component {...pageProps} />
          </PageLoader>
        </AppContextProvider>
      </SSRProvider>
    </>
  )
}

export default MyApp
