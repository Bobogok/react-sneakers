import React, { useContext } from 'react';

import Card from './Card';
import { ContentConxtext } from './Content';

function Favorites() {
  const { favorites, onAddToFavorites, onAddToCard } =
    useContext(ContentConxtext);
  return (
    <>
      <div className="favorites">
        <div className="favorites__inner container">
          <div className="favorites__items">
            <h1 className="favorites__title">Избранное</h1>
            <div className="favorites__products">
              {favorites.map((item, index) => (
                <Card
                  key={item.id}
                  favorited={true}
                  onPlus={(obj) => onAddToCard(obj)}
                  onFavorites={(obj) => onAddToFavorites(obj)}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
