import ArtistsCardsData from '../../../data/ArtistsCardsData.json';
import ArtistCard from '@/components/ArtistCard';
import styles from './index.module.css';
import { useState } from 'react';
import ArtistModal from '@/components/ArtistModal';

export async function getServerSideProps(context) {
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // await delay(10000);
    console.log(context);
    return { props: { artistsData: [...ArtistsCardsData] } }
}

export default function ArtistsPage(props) {

    const [modal, setModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    function ModalHandler(artworkSelected) {
        if (modal) {
            setModal(false);
        } else {
            setModal(true);
            setSelectedItem(artworkSelected);
        }
    }

    return (
        <>
            {modal && <ArtistModal {...selectedItem} onClose={ModalHandler} ></ArtistModal>}
            <div className={styles['cards-row']} >
                {props.artistsData.map(artist =>
                    <ArtistCard
                        key={artist.name}
                        {...artist}
                        onModalOpen={() => ModalHandler(artist)}>
                    </ArtistCard>
                )}
            </div>
        </>
    );
}