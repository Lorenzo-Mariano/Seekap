import Link from "next/link";
import styles from './NavBar.module.css';

export default function NavBar() {
    console.log(styles)
    return (
        <div className={styles['nav-bar']}>
            <Link href={'/'}>See-kap</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/artworksTab'}>Arts</Link>
            <Link href={'/artistsTab'}>Artists</Link>
        </div>
    );
}