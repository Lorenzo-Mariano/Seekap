import styles from './ArtworkModal.module.css';
import Image from 'next/image';

export default function ArtworkModal({ image, title, author, date, fullDesc, onClose }) {
	return (
		<div className='modal-shadow'>
			<div className='modal'>
				<Image
					alt='full image'
					src={image}
					width={1315}
					height={956}
				>
				</Image>
				<div className='title'>{title}</div>
				<div className='author'>{author}</div>
				<div className='date'>{date}fasdfasdafsd</div>
				<div className='full-description'>{fullDesc}fasdfasdfsda</div>
				<button onClick={onClose} className='close-button'>Close</button>
			</div>
		</div>
	)
}