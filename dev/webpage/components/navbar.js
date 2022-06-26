import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
  { name: "Home", href: "/"},
  { name: "About", href: "/about"},
  { name: "Servers", href: "/servers"},
  { name: "Services", href: "/services"}
]

const Navbar = () => {
  const router = useRouter();
  
  return (
      <nav className={styles.navbar}>
        {navLinks.map((item) => (
          <Link href={item.href}>
            <a className={router.pathname == item.href ? styles.navelem_active : styles.navelem}>{item.name}</a>
          </Link>
        ))}
      </nav>
  );
}

export default Navbar;