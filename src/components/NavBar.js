import Link from "next/link";
import styles from './NavBar.module.css';
import icon from './night-mode.svg'

export default function NavBar() {
    console.log(styles)
    console.log(icon)
    return (
        <>
            <div className={styles['nav-bar']}>
                <Link className={styles['seekap-button']} href={'/'}>See-kap</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/artworksTab'}>Arts</Link>
                <Link href={'/artistsTab'}>Artists</Link>
                <img className={styles['dark-mode-toggle']} src={icon.src}></img>
                {/* <button>[night mode svg here]</button> */}
                <Link>login here</Link>
                <Link>sign up?? here</Link>
            </div >
            <div className={styles['nav-bar__border-bottom']}></div>
        </>
    );
}