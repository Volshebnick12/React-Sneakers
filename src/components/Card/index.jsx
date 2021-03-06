import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from "react-content-loader";
import AppContext from '../../context';

function Card({
    imageURL,
    title,
    price,
    id,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, imageURL, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {
                loading ? (
                    <ContentLoader
                        speed={2}
                        width={180}
                        height={265}
                        viewBox="0 0 160 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                        <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>
                ) : (
                    <>
                        {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                            <img src={isFavorite ? "/img/liked.svg" : "/img/disliked.svg"} alt="disliked" />
                        </div>}
                        <img src={imageURL} width='100%' height={135} alt="Кросовки" />
                        <h5>{title}</h5>
                        <div className="d-flex justify-between ">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>{Number(price).toLocaleString('ru-RU')} руб.</b>
                            </div>
                            {onPlus && <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? "/img/add-in-bag.svg" : "/img/plus.svg"} alt="В корзину"
                            />}
                        </div>
                    </>
                )}
        </div>
    );
}

export default Card;