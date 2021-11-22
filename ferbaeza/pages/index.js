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
            <h2>Examples simple Api &rarr;</h2>
            <p>Discover an api</p>
          </a>

          <a 
          href="/newapi"
          className={styles.card}>
            <h2>Example Api2 &rarr;</h2>
            <p>
              Second
            </p>
          </a>
          <a 
          href="/view3"
          className={styles.card}>
            <h2>Example Api3 &rarr;</h2>
            <p>
              Third
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
