import React, { Fragment } from 'react';

function Basket({ onClose, items = [], onRemove }) {
  return (
    <Fragment>
      <div className="overlay">
        <div className="basket">
          <div className="basket__inner">
            <h3 className="basket__title">Корзина</h3>
            <img
              className="basket__close"
              width={32}
              height={32}
              src="/img/basket/close.svg"
              alt="close"
              onClick={onClose}
            />

            {items.length > 0 ? (
              <div className="basket__items">
                {items.map((obj) => (
                  <div className="basket__item">
                    <img
                      className="basket__image"
                      width={90}
                      height={70}
                      src={obj.imageUrl}
                      alt="nam270"
                    />
                    <div className="basket__info">
                      <div className="basket__text">{obj.title}</div>
                      <div className="basket__price">{obj.price} руб.</div>
                    </div>
                    <img
                      className="basket__delete"
                      width={11}
                      height={11}
                      src="/img/basket/delete.svg"
                      alt="delete"
                      onClick={() => onRemove(obj.id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="basket__empty">
                <img
                  className="basket__image"
                  src="/img/basket/empty-basket.png"
                  alt="empty-basket"
                />
                <div className="basket__text basket__text_size_max basket__text_margin-top">
                  <b>Корзина пустая</b>
                </div>
                <div className="basket__text basket__text_size_m basket__text--grey basket__text_margin-top">
                  Добавьте хотя бы одну пару <br />
                  кроссовок, чтобы сделать заказ.
                </div>
                <button className="basket__button" onClick={onClose}>
                  Вернуться назад
                  <img
                    className="basket__arrow--left"
                    width={13}
                    height={12}
                    src="/img/basket/arrow-left.svg"
                    alt="arrow-l"
                  />
                </button>
              </div>
            )}
            {items.length > 0 ? (
              <div className="basket__order">
                <div className="basket__block-total">
                  <div className="basket__text basket__text_size_m">
                    Итого:{' '}
                  </div>
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
                    className="basket__arrow--right"
                    width={13}
                    height={12}
                    src="/img/basket/arrow-right.svg"
                    alt="arrow-r"
                  />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Basket;
