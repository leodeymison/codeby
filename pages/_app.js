import Head from 'next/head'
import { _Global, _Main, _MainSub } from '../src/styled/global'

function MyApp({ Component, pageProps }) {
  return (
    <_Main>
      <_MainSub>
        <Head>
          <title>CODEBY</title>
        </Head>
        <_Global />
        <Component {...pageProps} />
      </_MainSub>
    </_Main>
  )
}

export default MyApp
