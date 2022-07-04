import Head from 'next/head'
import styles from '/styles/Server.module.css'
import Link from 'next/link'
import { Mod, ServerData } from '../interfaces/ServerType'

function Server_1_18_2(props: ServerData) {
  const mods = props.server.mods
  const address = props.server.url + ":" + String(props.server.port)
  const info = props.server.status.data
  return (
    <>
      <Head>
        <title>1.18.2 Server</title>
        <meta name="description" content="Minecraft Server running Version 1.18.2" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/> 
      </Head>
      <h1 className={styles.title}>1.18.2 Server</h1>
      <p className={styles.description}>{address}</p>
      <div className={styles.card}>
        <h2>Mod & Version info</h2>
        {mods.map((item: Mod) => (
          <Link key={item.name} href={item.href}>
            <a className={styles.link}>{item.name} Version: {item.version}</a>
          </Link>
        ))}
      </div>
      <div className={styles.card}>
        <h2>Status: <a className={styles.online}>{props.server.status.online}</a></h2>
        <p>Players: {info.players.online}/{info.players.max}</p>
        <p>Players currently online:
          {info.players.sample !== null
            ? info.players.sample.map((player: any, index: any) => <span key={index}>{(index ? ', ' : ' ') + player.name}</span>)
            : <span> -</span>}</p>
      </div>
    </>
  )
}

export const getServerSideProps: any = async () => {
  const mcutil = require('minecraft-server-util')
  const res = await fetch('https://minecraft.neshura-server.net/api/servers')
  const data = await res.json()
  const options = {
    timeout: 1000 * 5, //timeout in multiples of 1000ms
    enableSRV: true
  }
  if (data) {
    const sdata = await mcutil.status(data.v1182.url, data.v1182.port, options)
    if (sdata) {
      const serverData = { "data": sdata, "online": "Online" }
      const server = { "mods": data.v1182.mods, "status": serverData, "url": data.v1182.url, "port": data.v1182.port }
      return { props: { server } }
    }
  }
}

export default Server_1_18_2;