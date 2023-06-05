import styles from './ArtworkModal.module.css';
import Image from 'next/image';


// apparently portals are good for modals
// so maybe use that next time around
export default function ArtworkModal({ image, title, author, yearCreated, fullDesc, onClose }) {
	return (
		<div className={styles['modal-shadow']}>
			<div className={styles['modal']}>
				<Image
					className={styles['artist-image']}
					alt='artist full image'
					src={image}
					width={0}
					height={0}
					sizes='100vw'
				>
				</Image>
				<div className={styles['title']}>{title}</div>
				<div className={styles['author']}>{author}</div>
				<div className={styles['date']}>{yearCreated}</div>
				<div className={styles['full-description']}>{fullDesc}</div>
				<button onClick={onClose} className={styles['close-button']}>Close</button>
			</div>
		</div>
	)
}