import ArtworkCard from '@/components/ArtworkCard';
import ArtworkCardsData from '../../../data/ArtworkCardsData.json';
import styles from './index.module.css';
import { useState } from 'react';
import ArtworkModal from '@/components/ArtworkModal';

export async function getServerSideProps(context) {
    console.log(context);
    return { props: { artworksData: [...ArtworkCardsData] } };
};

export default function ArtworksTab(props) {

    const [modal, setModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    function ModalHandler(artworkSelected) {
        if (modal) {
            setModal(false);
            document.body.style.overflow = 'unset';
        } else {
            setModal(true);
            setSelectedItem(artworkSelected);
            document.body.style.overflow = 'hidden';
        };
    };

    return (
        <>
            {
                modal && <ArtworkModal {...selectedItem} onClose={ModalHandler}></ArtworkModal>
            }
            <div className={styles['cards-row']}>
                {
                    props.artworksData.map(artwork =>
                        <ArtworkCard
                            openModalHandler={() => ModalHandler(artwork)}
                            key={artwork.title}
                            {...artwork}
                        >
                        </ArtworkCard>
                    )
                }
            </div>
        </>
    );
};