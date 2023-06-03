import styles from './ArtistCard.module.css';
import Image from 'next/image';

export default function ArtistCard({ image, name, artField, dateAwarded, lifetime, description, onModalOpen }) {
    return (
        <div className={styles['artist-card']}>
            <Image
                className={styles['img-preview']}
                alt={name}
                width={250}
                height={250}
                src={image}
                onClick={onModalOpen}
            >
            </Image>
            <div className={styles['card-text-container']}>
                <div className={styles['name']}>{name}</div>
                <div className={styles['card-details']}>
                    <div className={styles['field-and-date-awarded']}>{`National Artist for ${artField} - Awarded ${dateAwarded}`}</div>
                    <div className={styles['lifetime']}>{lifetime}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>
        </div>
    )
}