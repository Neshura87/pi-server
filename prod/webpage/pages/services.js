import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import fsPromises from 'fs/promises'
import path from 'path'
import status from '../components/status'

function Services(props) {
  const router = useRouter()
  const serviceList = props.services
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
                <div className={styles.contenttitle} dangerouslySetInnerHTML={{ __html: item.name }}/>
                <div className={status(item) == "Online" ? styles.contentonline : styles.contentoffline} dangerouslySetInnerHTML={{ __html: status(item)}}></div>
                <div dangerouslySetInnerHTML={{ __html: item.desc }}/>
                <div className={styles.cardwarn} dangerouslySetInnerHTML={{ __html: item.warn }}/>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), './confs/pages.json')
  const jsonData = await fsPromises.readFile(filePath)
  const list = JSON.parse(jsonData)

  return {props: list}
}

export default Services