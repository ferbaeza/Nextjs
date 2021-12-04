import Head from 'next/head'
import Link from 'next/link'
import Index from 'atlasView'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Atlas</title>
      </Head>
      <div className="back">
          <Link href="/">
              <a>Home</a>
          </Link>
      </div>
      <div className="back">
          <Link href="/newatlas">
              <a>New</a>
          </Link>
      </div>  
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
   
      </>
  )
}

export default MyApp

