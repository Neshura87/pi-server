import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkList, CustomLink } from '../interfaces/LinkTypes';

function Navbar(props: LinkList) {
  const router = useRouter();
  const navLinks = props.links
  return (
    <div className={styles.header}>
      <Link key="home" href="https://www.neshura-server.net">
        <a className={styles.home}>Home</a>
      </Link>
      <nav className={styles.navbar}>
        {navLinks.map((item: CustomLink) => (
          <Link key={item.name} href={item.href}>
            <a className={router.pathname == item.href ? styles.navelem_active : styles.navelem}>{item.name}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;