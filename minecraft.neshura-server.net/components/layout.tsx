import Footer from './footer'
import Navbar from './navbar'
import styles from '/styles/Home.module.css'
import UseSWR from 'swr'

const fetcher = (url:string) => fetch(url).then((res) => res.json())

function Layout({ children }: {children: React.ReactNode} ):JSX.Element {
  const { data, error } = UseSWR('/api/navbar', fetcher)

  let layout: JSX.Element = <></>

  if (error) layout = <><div>Failed to load data</div></>
  if (!data) {
    layout = <></> 
  }
  if(data) {
    layout =
      <>
        <Navbar links={data.links} />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </>
  }

  return layout
}

export default Layout;