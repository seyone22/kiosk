import styles from "./ArtistCard.module.css";
import Image from "next/image";

const ArtistCard = ({artist}) => {
    return (
        <a href={`/${artist.handle}`}>
            <div className={styles.card}>
                <Image src={`/artist/${artist.handle}/icon.png`} width="200" height="200" alt=""
                       className={styles.cardImage}/>
                <div className={styles.cardDescription}>
                    <h5>{artist.handle.length > 15 ? `${artist.handle.slice(0, 15)}...` : artist.handle}</h5>
                </div>
            </div>
        </a>
    )
}

export default ArtistCard;