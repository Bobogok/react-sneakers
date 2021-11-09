import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__block-left">
          <img
            className="header__icon"
            width={40}
            height={40}
            src="/img/header/icon.png"
            alt="Logo"
          />
          <div className="header__info">
            <h3 className="header__title">REACT SNEAKERS</h3>
            <div className="header__text">Магазин лучших кроссовок</div>
          </div>
        </div>
        <div className="header__block-right">
          <img
            className="header__basket"
            width={18}
            height={18}
            src="/img/header/basket.svg"
            alt="Basket"
          />
          <div className="header__price">1500 руб.</div>
          <img
            className="header__like"
            width={21}
            height={19}
            src="/img/header/like.svg"
            alt="Like"
          />
          <img
            className="header__personal-area"
            width={20}
            height={20}
            src="/img/header/personal-area.svg"
            alt="Personal-area"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
