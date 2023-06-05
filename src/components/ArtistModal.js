import styles from './ArtistModal.module.css';
import Image from 'next/image';

export default function ArtistModal({ image, name, artField, dateAwarded, lifetime, fullDesc, onClose }) {
	return (
		<div className={styles['modal-shadow']}>
			<div className={styles['modal']}>
				<Image
					className={styles['artist-image']}
					alt='full image'
					src={image}
					width={0}
					height={0}
					sizes='100vw'
				>
				</Image>
				<div className={styles['name']}>{name}</div>
				<div className={styles['field-and-year-awarded']}>
					{`National Artist for ${artField} - awarded ${dateAwarded}`}
				</div>
				<div className={styles['lifetime']}>{lifetime}</div>
				<div className={styles['full-description']}>{fullDesc}</div>
				<button onClick={onClose} className={styles['close-button']}>Close</button>
			</div>
		</div>
	)
}