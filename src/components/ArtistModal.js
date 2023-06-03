import styles from './ArtistModal.module.css';
import Image from 'next/image';

export default function ArtistModal({ image, title, author, date, fullDesc, onClose }) {
	return (
		<div className='modal-shadow'>
			<div className='modal'>
				<Image
					alt='full image'
					src={image}
					// somehow need to make it have full and stuff
					width={1315}
					height={956}
					onClick={onClose}
				>
				</Image>
				<div className='title'>{title}</div>
				<div className='author'>{author}</div>
				<div className='date'>{date}</div>
				<div className='full-description'>{fullDesc}</div>
				<button onClick={onClose} className='close-button'>Close</button>
			</div>
		</div>
	)
}