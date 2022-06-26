import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const serverList = [
  { name: "Minecraft", href: "https://minecraft.neshura-server.net", desc: "View all currently available Minecraft Servers" },
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
          Server List
        </h1>

        <p className={styles.description}>
          Lists all available Services, probably up-to-date
        </p>
        <div className={styles.grid}>
          {serverList.map((item) => (
            <Link href={item.href}>
              <a className={styles.contentcard}>
                <h2 >{item.name}</h2>
                <p>{item.desc}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}