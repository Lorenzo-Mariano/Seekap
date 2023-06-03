import Link from "next/link";
import styles from './NavBar.module.css';
import nightMode from './night-mode.svg';
import lightMode from './light-mode.svg';
import { useTheme } from "next-themes";
import Image from 'next/image';


export default function NavBar() {

    const { resolvedTheme: theme, setTheme } = useTheme();

    console.log(styles)
    console.log(theme)

    return (
        <>
            <div className={styles['nav-bar']}>
                <Link className={styles['seekap-button']} href={'/'}>See-kap</Link>
                <Link href={'/'}>Home</Link>
                <Link href={'/artworksTab'}>Artworks</Link>
                <Link href={'/artistsTab'}>Artists</Link>
                <Link href={'/loginTab'}>Log In</Link>
                <Link href={'/signUpTab'}>Sign Up</Link>
                {/* todo: fix size difference */}
                {
                    theme === 'light' ?
                        <Image
                            alt={'currently light mode'}
                            onClick={() => setTheme('dark')}
                            height={21}
                            width={21}
                            className={styles['dark-mode-toggle']} src={nightMode.src}>
                        </Image>
                        :
                        <Image
                            alt={'currently dark mode'}
                            onClick={() => setTheme('light')}
                            height={21}
                            width={21}
                            className={styles['dark-mode-toggle']}
                            src={lightMode.src}>
                        </Image>
                }
            </div >
            <div className={styles['nav-bar__border-bottom']}></div>
        </>
    );
}