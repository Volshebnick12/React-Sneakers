import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12999', imageURL: "/img/sneakers/sneakers1.jpg" },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: '15699', imageURL: "/img/sneakers/sneakers2.jpg" },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8999', imageURL: "/img/sneakers/sneakers3.jpg" },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8999', imageURL: "/img/sneakers/sneakers4.jpg" },
  { title: 'Мужские Кроссовки Under Armour Curry 8', price: '15199', imageURL: "/img/sneakers/sneakers5.jpg" },
  { title: 'Мужские Кроссовки Nike Kyrie 7', price: '11299', imageURL: "/img/sneakers/sneakers6.jpg" },
  { title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10799', imageURL: "/img/sneakers/sneakers7.jpg" },
  { title: 'Мужские Кроссовки Nike LeBron XVIII', price: '16499', imageURL: "/img/sneakers/sneakers8.jpg" },
  { title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '13999', imageURL: "/img/sneakers/sneakers9.jpg" },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8499', imageURL: "/img/sneakers/sneakers10.jpg" },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8999', imageURL: "/img/sneakers/sneakers11.jpg" },
  { title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '11299', imageURL: "/img/sneakers/sneakers12.jpg" },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="content-wraper d-flex aline-center mb-40 justify-between">
          <h1 className="wraper-title">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />

          </div>
        </div>

        <div className="d-flex wrapper-card justify-center">

          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>


      </div>
    </div>
  );
}

export default App;
