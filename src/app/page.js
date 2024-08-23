import Image from "next/image";
import styles from "./page.module.css";
import {getAllArtists} from "@/services/server/artistService";
import ArtistCard from "@/components/ArtistCard/ArtistCard";

export default async function Home() {
    const artistData = await getAllArtists()

    return (<main className={styles.main}>
            <Image className={styles.backgroundImage} width="1920" height="1080" src="/background.png"/>

            <div className={styles.container}>
                <Image className={styles.mainLogo} width="500" height="216" src="/animelk.png"/>

                <div className={styles.artistGrid}>
                    {artistData.map(artist => (<ArtistCard key={artist._id} artist={artist}/>))}
                </div>

            </div>
        </main>);
}
