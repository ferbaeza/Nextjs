import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <a href="/view1" className={styles.card}>
            <h2>Count &rarr;</h2>
            <p>Simple counter</p>
          </a>

          <a href="/form" className={styles.card}>
            <h2>Form &rarr;</h2>
            <p>Lets gonna fill a form!</p>
          </a>

          <a
            href="/view2"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover an api</p>
          </a>

          <a 
          href="/"
          className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
