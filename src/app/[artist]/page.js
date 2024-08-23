import styles from "./page.module.css";
import {getArtistByHandle} from "@/services/server/artistService";
import {getItemsByArtist} from "@/services/server/itemService";
import ItemCard from "@/components/ItemCard/ItemCard";
import SocialMediaRow from "@/components/SocialMediaRow/SocialMediaRow";
import Image from "next/image";
import BackButton from "@/components/BackButton/BackButton";

export default async function ArtistPage({params}) {
    const handle = params.artist;
    const artistData = await getArtistByHandle(handle)

    const artistMerchandise = await getItemsByArtist(artistData.artistCode)

    return (
        <main>
            <BackButton />
            <div className={styles.container}>
                <div className={styles.coverBanner}>
                    <Image src={`/artist/${handle}/cover.png`} alt="Cover Image" width="1080" height="24" className={styles.coverImage}/>
                </div>
                <div className={styles.profileArea}>
                    <Image src={`/artist/${handle}/icon.png`} alt="Profile Icon" width="100" height="100" className={styles.profileIcon}/>
                    <h1 className={styles.title}> {artistData.name} </h1>
                    <h3 className={styles.subTitle}> @{artistData.handle} </h3>
                    <SocialMediaRow instagram={artistData.instagramLink} discord={artistData.discordId}
                                    email={artistData.email} pixiv={artistData.pixivLink}/>
                </div>

                <div className={styles.content}>
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

                    <h2> Merchandise </h2>
                    <div className={styles.merchandiseList}>
                        {
                            artistMerchandise.length > 0 &&
                            artistMerchandise.map(merch => (
                                <ItemCard artistHandle={handle} itemDetails={merch} key={merch._id}/>
                            ))
                        }
                    </div>
                </div>

                <footer className={styles.footer}>

                </footer>
            </div>
        </main>
    )
}