import React, { Fragment } from 'react';

function Basket(props) {
  return (
    <Fragment>
      <div className="overlay">
        <div className="basket">
          <div className="basket__inner">
            <h3 className="basket__title">Корзина</h3>
            <img
              className="basket__close"
              width={11}
              height={11}
              src="/img/basket/close.svg"
              alt="close"
              onClick={props.onClose}
            />
            <div className="basket__items">
              <div className="basket__item">
                <img
                  className="basket__image"
                  src="/img/basket/nike-air-max-270.png"
                  alt="nam270"
                />
                <div className="basket__info">
                  <div className="basket__text">
                    Мужские Кроссовки Nike Air Max 270
                  </div>
                  <div className="basket__price">12 999 руб.</div>
                </div>
                <img
                  className="basket__delete"
                  width={32}
                  height={32}
                  src="/img/basket/delete.svg"
                  alt="delete"
                />
              </div>
              <div className="basket__item">
                <img
                  className="basket__image"
                  src="/img/basket/puma-x-aka-boku.png"
                  alt="pxab"
                />
                <div className="basket__info">
                  <div className="basket__text">
                    Мужские Кроссовки Nike Blazer Mid Suede
                  </div>
                  <div className="basket__price">8 499 руб.</div>
                </div>
                <img
                  className="basket__delete"
                  width={32}
                  height={32}
                  src="/img/basket/delete.svg"
                  alt="delete"
                />
              </div>
            </div>
            <div className="basket__order">
              <div className="basket__block-total">
                <div className="basket__text basket__text_size_m">Итого: </div>
                <div className="basket__band"></div>
                <div className="basket__price basket__price_size_m">
                  21 498 руб.{' '}
                </div>
              </div>
              <div className="basket__block-tax">
                <div className="basket__text basket__text_size_m">
                  Налог 5%:{' '}
                </div>
                <div className="basket__band"></div>
                <div className="basket__price basket__price_size_m">
                  1074 руб.{' '}
                </div>
              </div>
              <button className="basket__button">
                Оформить заказ
                <img
                  className="basket__arrow"
                  width={13}
                  height={12}
                  src="/img/basket/arrow.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Basket;
