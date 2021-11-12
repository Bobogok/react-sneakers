import Card from '../components/Card';
import React, { Fragment } from 'react';

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  addCard,
  onAddToFavorites,
}) {
  return (
    <Fragment>
      <div className="content">
        <div className="content__inner container">
          <div className="content__items">
            <h1 className="content__title">
              {searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}
            </h1>
            <div className="content__search-block">
              <img
                className="content__magnifier"
                width={14}
                height={14}
                src="/img/content/magnifier.svg"
                alt="magnifier"
              />
              <input
                className="content__search"
                type="text"
                placeholder="Поиск..."
                onChange={onChangeSearchInput}
                value={searchValue}
              />
              {searchValue && (
                <img
                  className="content__delete"
                  width={11}
                  height={11}
                  src="/img/basket/delete.svg"
                  alt="clear"
                  onClick={() => setSearchValue('')}
                />
              )}
            </div>
          </div>
          <div className="content__products">
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item) => (
                <Card
                  key={item.id}
                  onPlus={(obj) => addCard(obj)}
                  onFavorites={(obj) => onAddToFavorites(obj)}
                  {...item}
                />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
