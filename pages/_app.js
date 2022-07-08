import Head from 'next/head'
import { useEffect } from 'react'
import { _Global, _Main, _MainSub } from '../src/styled/global'
import { addDBStorageStart, getLocalStorage } from '../utils/localstorage'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const productDB = getLocalStorage('product');
    const cartDB = getLocalStorage('cart');
    !productDB && addDBStorageStart('product')
    !cartDB && addDBStorageStart('cart')
  }, [])
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
