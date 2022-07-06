import Card from "../components/Card"


function Home({ items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart
}) {
    return (
        <div className="content p-40">
            <div className="content-wraper d-flex aline-center mb-40 justify-between">
                <h1 className="wraper-title">{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="clear" />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />

                </div>
            </div>

            <div className="d-flex wrapper-card justify-center">

                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                    <Card
                        key={item.id}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;