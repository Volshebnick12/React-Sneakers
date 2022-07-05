import styles from './Card.module.scss'

function Card(probs) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heard-disliked.svg" alt="disliked" />
            </div>
            <img src={probs.imageURL} width={133} height={112} alt="Кросовки" />
            <h5>{probs.title}</h5>
            <div className="d-flex justify-between ">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{probs.price} руб.</b>
                </div>
                <button className={styles.button} onClick={probs.onClick}>
                    <svg className={styles.iconPlus} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Card;