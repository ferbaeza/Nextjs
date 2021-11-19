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
        <h1 className={styles.title}>
          Next app 
        </h1>


        <div className={styles.grid}>
          <a href="/view1" className={styles.card}>
            <h2>Count &rarr;</h2>
            <p>Simple counter</p>
          </a>

          <a href="/color" className={styles.card}>
            <h2>Color &rarr;</h2>
            <p>Lets play with colors!</p>
          </a>

          <a
            href="/view2"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover an api</p>
          </a>

          <a className={styles.card}>
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
