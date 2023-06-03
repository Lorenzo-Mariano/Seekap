import styles from './ArtworkCard.module.css';
import Image from 'next/image';

export default function ArtworkCard({ image, title, author, yearCreated, description, openModalHandler }) {

    return (
        <div className={styles['artwork-card']}>
            <Image
                className={styles['img-preview']}
                alt={title}
                width={250}
                height={140}
                src={image}
                onClick={openModalHandler}>
            </Image>
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