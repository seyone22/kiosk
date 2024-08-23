import styles from "./BackButton.module.css";
import Image from "next/image";
import { FaArrowCircleLeft } from 'react-icons/fa';


const BackButton = () => {
    return (
        <div className={styles.backButton}>
            <a href={"/"}>
                <FaArrowCircleLeft className={styles.icon} />
            </a>
        </div>
    )
}

export default BackButton;