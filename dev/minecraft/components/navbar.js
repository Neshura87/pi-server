import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar(props) {
  const router = useRouter();
  const navLinks = props.links
  return (
      <nav className={styles.navbar}>
        {navLinks.map((item, index) => (
          <Link key={item.name} href={item.href}>
            <a className={router.pathname == item.href ? styles.navelem_active : styles.navelem}>{item.name}</a>
          </Link>
        ))}
      </nav>
  );
}

export default Navbar;