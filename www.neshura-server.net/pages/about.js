import Head from 'next/head'
import styles from '/styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Neshura Servers</title>
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        About
      </h1>
      <p className={styles.description}>
        This website is primarily for managing my game servers in one spot
      </p>
    </>
  )
}
