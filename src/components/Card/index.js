import React from 'react';
import styles from './Card.module.scss'

function Card({ imageURL, title, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        onPlus({ title, imageURL, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heard-disliked.svg" alt="disliked" />
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