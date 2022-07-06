import React from 'react';
import styles from './Card.module.scss'

function Card({ imageURL, title, price, id, onFavorite, onPlus, favorited = false }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({ title, imageURL, price, id });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ title, imageURL, price, id });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div>
                <img className={styles.favorite} onClick={onClickFavorite} src={isFavorite ? "/img/liked.svg" : "/img/disliked.svg"} alt="disliked" />
            </div>
            <img src={imageURL} width={133} height={112} alt="Кросовки" />
            <h5>{title}</h5>
            <div className="d-flex justify-between ">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.plus} alt="В корзину" onClick={onClickPlus} src={isAdded ? "/img/add-in-bag.svg" : "/img/plus.svg"} />
            </div>
        </div>
    );
}

export default Card;