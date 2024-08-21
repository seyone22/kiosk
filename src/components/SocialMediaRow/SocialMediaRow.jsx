import styles from "./SocialMediaRow.module.css";
import { FaInstagram, FaEnvelope, FaDiscord } from 'react-icons/fa';

const SocialMediaRow = ({ instagram, pixiv, email, discord }) => {
    return (
        <div className={styles.socialMediaRow}>
            {email && (
                <a className={styles.smIcon} href={`mailto:${email}`} aria-label="Email">
                    <FaEnvelope/>
                </a>
            )}
            {instagram && (
                <a className={styles.smIcon} href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram/>
                </a>
            )}
            {pixiv && (
                <a className={styles.smIcon} href={pixiv} target="_blank" rel="noopener noreferrer" aria-label="Pixiv">
                    <FaEnvelope/>
                </a>
            )}
            {discord && (
                <a className={styles.smIcon} href={`discord.gg/${discord}`} aria-label="Discord">
                    <FaDiscord/>
                </a>
            )}
        </div>
    );
}

export default SocialMediaRow;
