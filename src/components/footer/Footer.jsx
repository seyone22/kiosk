import styles from "./Footer.module.css";
import Image from "next/image";
import {FaInstagram, FaFacebook, FaGlobe, FaDiscord} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <Image
                    src="/animelk.png"
                    alt="anime.lk logo"
                    width={125}
                    height={54}
                />
            </div>
            <div className={styles.footerText}>
                ©2024 Anime.lk. All Rights Reserved.
            </div>
            <div className={styles.footerLinks}>
                <a href="https://instagram.com/animelk" target="_blank" rel="noopener noreferrer"
                   className={styles.footerLink}>
                    <FaInstagram/>
                </a>
                <a href="https://www.facebook.com/groups/AnimeMangaAddictsSriLanka/" target="_blank"
                   rel="noopener noreferrer"
                   className={styles.footerLink}>
                    <FaFacebook/>
                </a>
                <div className={styles.divider} />
                <a href="https://anime.lk/discord" target="_blank" rel="noopener noreferrer"
                   className={styles.footerLink}>
                    <FaDiscord/>
                </a>
                <div className={styles.divider} />
                <a href="https://anime.lk" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                    <FaGlobe/>
                </a>
                <a href="mailto:contact@anime.lk" target="_blank" rel="noopener noreferrer"
                   className={styles.footerLink}>
                    <MdEmail/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
