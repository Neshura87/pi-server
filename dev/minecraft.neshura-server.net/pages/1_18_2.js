import Head from 'next/head'
import styles from '/styles/Server.module.css'
import Link from 'next/link'
import status from '/components/status'
import UseSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Server_1_18_2() {
  const { data, error } = UseSWR('/api/servers', fetcher)
  let mods = {}

  if (error) {
    mods = [{ "name": "Error", "href": "" }]
  }
  if (!data) {
    mods = [{ "name": "Loading..", "href": "" }]
  }
  if (data) {
    console.log(data)
    mods = data.v1182.mods
    const url = data.url
    const port = data.port
  }

  return (
    <>
      <Head>
        <title>1.18.2 Server</title>
        <meta name="description" content="Minecraft Server running Version 1.18.2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>1.18.2 Server</h1>

      <div className={styles.card}>
        <h2>Mod & Version info</h2>
        {mods.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className={styles.link}>{item.name} Version: {item.version}</a>
          </Link>
        ))}
      </div>
      <div className={styles.card}>
        <h2>Status</h2>
      </div>
    </>
  )
}

export default Server_1_18_2;