import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import FavoritesList from './pages/FavoritesList';
import Home from './pages/Home';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://62c4311e7d83a75e39f2fe2d.mockapi.io/items').then(res => {
      setItems(res.data)
    });
    axios.get('https://62c4311e7d83a75e39f2fe2d.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    });
    axios.get('https://62c4311e7d83a75e39f2fe2d.mockapi.io/favorites').then(res => {
      setFavorites(res.data)
    });
  }, []);


  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://62c4311e7d83a75e39f2fe2d.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://62c4311e7d83a75e39f2fe2d.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62c4311e7d83a75e39f2fe2d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://62c4311e7d83a75e39f2fe2d.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://62c4311e7d83a75e39f2fe2d.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route exact path='/' element={<Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />} />
        <Route exact path='/favoriteslist' element={<FavoritesList items={favorites} onAddToFavorite={onAddToFavorite} />} />
      </Routes>


    </div>
  );
}

export default App;
