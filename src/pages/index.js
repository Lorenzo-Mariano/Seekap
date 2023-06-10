import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles['parent-all']}>
      <div className={styles['spacer-top']}></div>

      <div className={styles['mission-statement']}>
        We are dedicated to keeping the memory of our great forebearers in the domain of visual arts.
      </div>

      <div className={styles['spacer-bottom']}></div>

      <div className={styles['links']}>
        <Link href={'/artworksTab'} >
          See Artworks
        </Link >
        <Link href={'/artistsTab'}>
          See Artists
        </Link >
      </div>

      {/* <div className={styles['footer']}>
        <Image
          className={styles['next-js']}
          alt='next.js'
          src={'next.svg'}
          height={80}
          width={394}
        >
        </Image>
      </div> */}

      <style jsx global>{`
        body {
          background-image: url('/home/home-background.jpg');
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
        }`}
      </style>

    </div>
  );
}
