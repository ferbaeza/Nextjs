import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className="next">
          Next app 
        </h1>


        <div className={styles.grid}>
          <Link href="/view1">
          <a  className={styles.card}>
            <h2>Count &rarr;</h2>
            <p>Simple counter</p>
          </a>
          </Link>

          <Link href="/dina">
          <a  className={styles.card}>
            <h2>Event Listener &rarr;</h2>
            <p>Dinamic source</p>
          </a>
          </Link>


          <Link href="/form">
          <a  className={styles.card}>
            <h2>Form &rarr;</h2>
            <p>Lets gonna fill a form!</p>
          </a>
          </Link>
          
          <Link href="/view2">
          <a className={styles.card}>
            <h2>Examples Api1 &rarr;</h2>
            <p>Discover an api</p>
          </a>
          </Link>
          
          <Link href="/newapi">
          <a 
          className={styles.card}>
            <h2>Example Api2 &rarr;</h2>
            <p>
              Second
            </p>
          </a>
          </Link>
          
          <Link href="/view3">
          <a 
          className={styles.card}>
            <h2>Example Api3 &rarr;</h2>
            <p>
              Third
            </p>
          </a>
          </Link>

          <Link href="/ref">
          <a 
          className={styles.card}>
            <h2>Ref &rarr;</h2>
            <p>
              ref Hook
            </p>
          </a>
          </Link>

          <Link href="/memoView">
          <a 
          className={styles.card}>
            <h2>Memo &rarr;</h2>
            <p>
              memo Hook
            </p>
          </a>
          </Link>

          <Link href="/atlasViews">
          <a 
          className={styles.card}>
            <h2>Atlas &rarr;</h2>
            <p>
              dbConnect
            </p>
          </a>
          </Link>


        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>FerBaeza Nextjs</a>
        </Link>
      </footer>
    </div>
  )
}
