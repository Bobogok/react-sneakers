import React, { Fragment } from 'react';
import Card from './Card';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '13999',
    imageUrl: '/img/content/sneakers/nike-blazer-mid-suede-green.png',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '15999',
    imageUrl: '/img/content/sneakers/nike-air-max-270.png',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8499',
    imageUrl: '/img/content/sneakers/nike-blazer-mid-suede-white.png',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '6999',
    imageUrl: '/img/content/sneakers/puma-x-aka-boku-future-rider.png',
  },
];

function Content() {
  return (
    <Fragment>
      <div className="content">
        <div className="content__inner container">
          <div className="content__item">
            <h1 className="content__title">Все кроссовки</h1>
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
              />
            </div>
          </div>
          <div className="content__products">
            {arr.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onClick={() => console.log('Нажали плюс')}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
