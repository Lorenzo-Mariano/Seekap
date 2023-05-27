import ArtworkCard from '@/components/ArtworkCard';
import ArtworkCardsData from '../../../data/ArtworkCardsData.json';
import styles from './index.module.css';

export async function getServerSideProps(context) {
    console.log(context);
    return { props: { artworksData: [...ArtworkCardsData] } }
}

export default function ArtworksTab(props) {
    console.log(props)
    return (
        <div className={styles['cards-row']}>
            {props.artworksData.map(artwork => <ArtworkCard {...artwork}></ArtworkCard>)}
        </div>
    );
}