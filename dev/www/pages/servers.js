import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/Home.module.css'
import fsPromises from 'fs/promises'
import path from 'path'

function Servers(props) {
  const serverList = props.servers
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
            <Link key={item.name} href={item.href}>
            <a className={styles.contentcard}>
              <div className={styles.contenttitle} dangerouslySetInnerHTML={{ __html: item.name }}/>
              <div dangerouslySetInnerHTML={{ __html: item.desc }}/>
            </a>
          </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), '/confs/pages.json')
  const jsonData = await fsPromises.readFile(filePath)
  const list = JSON.parse(jsonData)

  return {props: list}
}

export default Servers