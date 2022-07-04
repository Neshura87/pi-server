import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import fsPromises from 'fs/promises'
import path from 'path'
import status from '../components/status'
import type { CustomLink, LinkList } from '../interfaces/LinkTypes'


function Services(props: LinkList) {
  const serviceList = props.services
  return (
    <>
      <Head>
        <title>Neshura Servers</title>
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Service List
      </h1>

      <p className={styles.description}>
        Lists all available Services, most likely up-to-date
      </p>
      <div className={styles.grid}>
        {serviceList.map((item: CustomLink) => (
          <Link key={item.name} href={item.href}>
            <a className={styles.contentcard}>
              <div className={styles.contenttitle} dangerouslySetInnerHTML={{ __html: item.name }} />
              <div className={status(item) == "Online" ? styles.contentonline : styles.contentoffline}>{status(item)}</div>
              <div dangerouslySetInnerHTML={{ __html: item.desc }} />
              <div className={styles.cardwarn} dangerouslySetInnerHTML={{ __html: item.warn }} />
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), './confs/pages.json')
  const jsonData = await fsPromises.readFile(filePath)
  const list = JSON.parse(jsonData.toString())

  return { props: list }
}

export default Services