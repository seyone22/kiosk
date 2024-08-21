import styles from "./page.module.css";
import {getArtistByHandle} from "@/services/server/artistService";
import {getItemsByArtist} from "@/services/server/itemService";
import ItemCard from "@/components/ItemCard/ItemCard";
import SocialMediaRow from "@/components/SocialMediaRow/SocialMediaRow";

export default async function ArtistPage({params}) {
    const handle = params.artist;
    const artistData = await getArtistByHandle(handle)

    const artistMerchandise = await getItemsByArtist(artistData._id)

    return (
        <main>
            <div className={styles.container}>
                <div className={styles.coverBanner}>
                    <img src={`artist/${handle}/cover.png`} alt="Cover Image" className={styles.coverImage}/>
                </div>
                <div className={styles.profileArea}>
                    <img src={`artist/${handle}/icon.png`} alt="Profile Icon" className={styles.profileIcon}/>
                    <h1 className={styles.title}> {artistData.name} </h1>
                    <h3 className={styles.subTitle}> @{artistData.handle} </h3>
                    <SocialMediaRow instagram={artistData.instagramLink} discord={artistData.discordId}
                                    email={artistData.email} pixiv={artistData.pixivLink}/>
                </div>

                <div className={styles.descriptionBody}>
                    <p> {artistData.description}</p>
                    <div className={styles.split}>
                        <div className={styles.column}>
                            <h4>Artistic Interests</h4>
                            <p> {artistData.textBlurbOne} </p>
                        </div>
                        <div className={styles.column}>
                            <h4>My Anime Tastes</h4>
                            <p> {artistData.textBlurbTwo} </p>
                        </div>
                    </div>
                </div>


                <div className={styles.merchandiseList}>
                    {artistMerchandise.map(merch =>
                        <ItemCard artistHandle={handle} itemDetails={merch} key={merch._id}/>
                    )}
                </div>

                <footer className={styles.footer}>

                </footer>
            </div>
        </main>
    )
}