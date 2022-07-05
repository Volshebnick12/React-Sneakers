import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://62c4311e7d83a75e39f2fe2d.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json)
    });
  }, []);

  const onAddToCart = (obj) =>{
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="content-wraper d-flex aline-center mb-40 justify-between">
          <h1 className="wraper-title">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />

          </div>
        </div>

        <div className="d-flex wrapper-card justify-center">

          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageURL={item.imageURL}
              onFavorite={() => alert('добавили в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>


      </div>
    </div>
  );
}

export default App;
