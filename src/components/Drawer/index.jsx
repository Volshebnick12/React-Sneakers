import React from 'react';
import axios from 'axios';

import Info from '../Card/Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderID, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const tax = (totalPrice / 20).toFixed(2);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://62c4311e7d83a75e39f2fe2d.mockapi.io/orders', { items: cartItems });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://62c4311e7d83a75e39f2fe2d.mockapi.io/cart/' + item.id);
                await delay(0);
            }

        } catch (error) {
            console.error('Ошибка при создании заказа :(', error);
        }
        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>

                {items.length > 0 ?
                    <div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageURL})` }}></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="remove-btn" src="/img/btn-remove.svg" alt="remove" />
                                </div>
                            ))}
                        </div>
                        <div className="cardTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{tax} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Стрелочка кнопки" /></button>
                        </div>
                    </div>
                    :
                    <Info
                        title={isOrderComplete ? "Заказ оформелн" : "Пустая корзина"}
                        desccription={isOrderComplete ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кросовок, что бы сделать заказ"}
                        image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                    />
                }

            </div>
        </div>
    );
}

export default Drawer;