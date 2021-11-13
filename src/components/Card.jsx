import React, { Fragment, useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';

import { ContentConxtext } from './Content';

function Card({
  id,
  title,
  imageUrl,
  price,
  onPlus,
  onFavorites,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(ContentConxtext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorites({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <Fragment>
      <div className="card">
        {loading ? (
          <ContentLoader
            speed={2}
            width={165}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="1" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        ) : (
          <Fragment>
            <div className="card__favorite" onClick={onClickFavorite}>
              <img
                className="card__unliked"
                width={32}
                height={32}
                src={
                  isFavorite ? '/img/card/liked.svg' : '/img/card/unliked.svg'
                }
                alt="liked"
              />
            </div>
            <img
              className="card__image"
              width="100%"
              height={135}
              src={imageUrl}
              alt="sneaker"
            />
            <div className="card__name">{title}</div>
            <div className="card__info">
              <div className="card__price">
                <div className="card__text">Цена:</div>
                <div className="card__sum">{price} руб.</div>
              </div>
              <img
                className="card__icon"
                src={
                  isItemAdded(id)
                    ? '/img/card/cheked.png'
                    : '/img/card/nocheked.png'
                }
                alt="ci"
                onClick={onClickPlus}
              />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default Card;
