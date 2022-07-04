import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neshura Servers</title>
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to my Servers Webpage
      </h1>

      <p className={styles.description}>
        Feel free to look around
      </p>
      <div className={styles.grid}>
        <Link key="about" href="/about">
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Useless Info, don&apos;t bother</p>
          </a>
        </Link>

        <Link key="servers" href="/servers">
          <a className={styles.card}>
            <h2>Servers &rarr;</h2>
            <p>List of all available Servers</p>
          </a>
        </Link>

        <Link key="services" href="/services">
          <a className={styles.card}>
            <h2>Services &rarr;</h2>
            <p>List of available Services</p>
          </a>
        </Link>

      </div>
    </>
  )
}
