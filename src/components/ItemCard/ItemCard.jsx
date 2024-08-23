import styles from "./ItemCard.module.css";
import Image from "next/image";

const ItemCard = ({artistHandle, itemDetails}) => {
    return (<div className={styles.card}>
        <Image src={`/artist/${artistHandle}/merch/${itemDetails.itemCode}.png`} width="200" height="200" alt=""
               className={styles.cardImage}/>
        <div className={styles.cardDescription}>
            <h5> {itemDetails.name} </h5>
            <div className={styles.price}>
                Rs.{itemDetails.price}
            </div>

            <div className={styles.chipRow}>
                <span className={styles.chip}>
                    {itemDetails.quantity > 0 ? "Available" : "Out of Stock"}
                </span>
                <span className={styles.chip}>
                    {itemDetails.quantity}
                </span>
            </div>
        </div>
    </div>)
}

export default ItemCard;