import Footer from './footer'
import Navbar from './navbar'
import styles from '/styles/Home.module.css'
import UseSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Layout({ children }) {
  const { data, error } = UseSWR('/api/navbar', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) {
    return 
  }
  if(data) {
    return (
      <>
        <Navbar links={data.links} />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;