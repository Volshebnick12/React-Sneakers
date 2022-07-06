function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onClose} className="remove-btn cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className="items">
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
                                        <b>21 498 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="Стрелочка кнопки" /></button>
                            </div>
                        </div>
                        : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Пустая корзина" />
                            <h2>Пустая корзина</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кросовок, что бы сделать заказ</p>
                            <button onClick={onClose} className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" />Вернуться назад
                            </button>
                        </div>
                }

            </div>
        </div>
    );
}

export default Drawer;