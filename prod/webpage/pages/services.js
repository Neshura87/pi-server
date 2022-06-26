import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const serviceList = [
  { name: <h2>Nextcloud</h2>, 
    href: "https://nextcloud.neshura-server.net", 
    desc: <p>Self-hosted Cloud Storage Service</p> },
  { name: <h2>Komga</h2>, 
    href: "https://komga.neshura-server.net", 
    desc: <p>Self-hosted Comic Library.<br/><p className={styles.cardwarn}>Note: Registration only via Admin</p></p> },
  { name: <h2>Calibre Web</h2>, 
    href: "https://calibre.neshura-server.net", 
    desc: <p>Self-hosted Cloud Storage Service</p> },
  { name: <h2>Calibre Content Server</h2>, 
    href: "https://calibre.neshura-server.net/server", 
    desc: <p>Self-hosted Cloud Storage Service<br></br><p className={styles.cardwarn}>Note: Registration only via Admin</p></p> },
]

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Neshura Servers</title>
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Service List
        </h1>

        <p className={styles.description}>
          Lists all available Services, most likely up-to-date
        </p>
        <div className={styles.grid}>
          {serviceList.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className={styles.contentcard}>
                {item.name}
                {item.desc}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}