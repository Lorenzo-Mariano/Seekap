import ArtistsCardsData from '../../../data/ArtistsCardsData.json';
import ArtistCard from '@/components/ArtistCard';
import styles from './index.module.css';

export async function getServerSideProps(context) {
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // await delay(10000);
    console.log(context);
    return { props: { artistsData: [...ArtistsCardsData] } }
}

export default function ArtistsPage(props) {
    return (
        <div className={styles['cards-row']} >
            {props.artistsData.map(artist => <ArtistCard {...artist}></ArtistCard>)}
        </div>
    );
}