import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valley Icons</title>
        <meta name="description" content="Icons of the Valley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Valley Icons
        </h1>

        <p className={styles.description}>
          The iconography of Meili.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sippy.cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Sippy
        </a>
      </footer>
    </div>
  )
}
