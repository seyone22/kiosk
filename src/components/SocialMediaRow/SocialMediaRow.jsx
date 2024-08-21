import styles from "./SocialMediaRow.module.css";
import { FaInstagram, FaEnvelope, FaDiscord } from 'react-icons/fa';

const SocialMediaRow = ({ instagram, pixiv, email, discord }) => {
    return (
        <div className={styles.socialMediaRow}>
            {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className={styles.icon} />
                </a>
            )}
            {pixiv && (
                <a href={pixiv} target="_blank" rel="noopener noreferrer" aria-label="Pixiv">
                    <FaEnvelope className={styles.icon} />
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} aria-label="Email">
                    <FaEnvelope className={styles.icon} />
                </a>
            )}
            {discord && (
                <a href={`discord.gg/${discord}`} aria-label="Discord">
                    <FaDiscord className={styles.icon}/>
                </a>
            )}
        </div>
    );
}

export default SocialMediaRow;
