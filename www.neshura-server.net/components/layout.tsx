import Footer from './footer'
import Navbar from './navbar'
import styles from '/styles/Home.module.css'

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (  
        <div className={styles.page}>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;