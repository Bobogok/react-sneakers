import React, { Fragment } from 'react';

function Card() {
  return (
    <Fragment>
      <div className="card">
        <img
          className="card__image"
          src="/img/content/sneakers/nike-blazer-mid-suede-green.png"
          alt="nbms"
        />
        <div className="card__name">
          Мужские Кроссовки <br />
          Nike Blazer Mid Suede
        </div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">12 999 руб.</div>
          </div>
          <button className="card__button">
            <img className="card__icon" src="/img/content/plus.svg" alt="ci" />
          </button>
        </div>
      </div>
      <div className="card">
        <img
          className="card__image"
          src="/img/content/sneakers/nike-air-max-270.png"
          alt="nbms"
        />
        <div className="card__name">
          Мужские Кроссовки <br />
          Nike Blazer Mid Suede
        </div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">12 999 руб.</div>
          </div>
          <button className="card__button">
            <img className="card__icon" src="/img/content/plus.svg" alt="ci" />
          </button>
        </div>
      </div>
      <div className="card">
        <img
          className="card__image"
          src="/img/content/sneakers/nike-blazer-mid-suede-white.png"
          alt="nbms"
        />
        <div className="card__name">
          Мужские Кроссовки <br />
          Nike Blazer Mid Suede
        </div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">12 999 руб.</div>
          </div>
          <button className="card__button">
            <img className="card__icon" src="/img/content/plus.svg" alt="ci" />
          </button>
        </div>
      </div>
      <div className="card">
        <img
          className="card__image"
          src="/img/content/sneakers/puma-x-aka-boku-future-rider.png"
          alt="nbms"
        />
        <div className="card__name">
          Мужские Кроссовки <br />
          Nike Blazer Mid Suede
        </div>
        <div className="card__info">
          <div className="card__price">
            <div className="card__text">Цена:</div>
            <div className="card__sum">12 999 руб.</div>
          </div>
          <button className="card__button">
            <img className="card__icon" src="/img/content/plus.svg" alt="ci" />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
