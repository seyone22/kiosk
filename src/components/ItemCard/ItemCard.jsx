import styles from "./ItemCard.module.css";

const ItemCard = ({ artistHandle, itemDetails }) => {
    return (
        <div className={styles.card}>
            <img src={`artist/${artistHandle}/merch/${itemDetails.itemCode}.png`} alt="" className={styles.cardImage}/>
            <div className={styles.cardDescription}>
                <h5> {itemDetails.name} </h5>
                <div className={styles.price}>
                    {itemDetails.price}
                </div>

                <span className={styles.chip}>
                {itemDetails.quantity > 0 ? "Available" : "Out of Stock"}
            </span>
            </div>
        </div>
    )
}

export default ItemCard;