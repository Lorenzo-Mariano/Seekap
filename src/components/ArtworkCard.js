import styles from './ArtworkCard.module.css';
import Image from 'next/image';

export default function ArtworkCard({ image, title, author, yearCreated, description }) {
    console.log(image);
    // 250 x 182
    return (
        <div className={styles['artwork-card']}>
            <Image className={styles['img-preview']} width={250} height={182} src={image}></Image>
            <div className={styles['card-text-container']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['card-details']}>
                    <div className={styles['author']}>{author}</div>
                    <div className={styles['year-created']}>{yearCreated}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>
        </div>
    )
}