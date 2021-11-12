import React, { Fragment, useState } from 'react';

function Card({ id, title, imageUrl, price, onPlus, onFavorites, favorited }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorites({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card__favorite" onClick={onClickFavorite}>
          <img
            className="card__unliked"
            width={32}
            height={32}
            src={isFavorite ? '/img/card/liked.svg' : '/img/card/unliked.svg'}
            alt="liked"
          />
        </div>
        <img className="card__image" src={imageUrl} alt="sneaker" />
        <div className="card__name">{title}</div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">{price} руб.</div>
          </div>
          <img
            className="card__icon"
            src={isAdded ? '/img/card/cheked.png' : '/img/card/nocheked.png'}
            alt="ci"
            onClick={onClickPlus}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
