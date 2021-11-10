import React, { Fragment, useState } from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card__favorite" onClick={props.onFavorite}>
          <img
            className="card__unliked"
            src="/img/content/heart-unliked.svg"
            alt="unliked"
          />
        </div>
        <img className="card__image" src={props.imageUrl} alt="nbms" />
        <div className="card__name">{props.title}</div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">{props.price} руб.</div>
          </div>
          <img
            className="card__icon"
            src={
              isAdded ? '/img/content/cheked.png' : '/img/content/nocheked.png'
            }
            alt="ci"
            onClick={onClickPlus}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
