function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">Корзина <img className="remove-btn cu-p" src="/img/btn-remove.svg" alt="remove"></img></h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/sneakers1.jpg' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кросовки Nike Air Max 270</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"></img>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/sneakers1.jpg' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кросовки Nike Air Max 270</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"></img>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div className="cartItemImg" style={{ backgroundImage: 'url(/img/sneakers/sneakers1.jpg' }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские кросовки Nike Air Max 270</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"></img>
                    </div>

                </div>

                <div className="cardTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div className="items"></div>
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
        </div>
    );
}

export default Drawer;