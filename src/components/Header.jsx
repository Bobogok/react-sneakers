import React from 'react';
import { Link } from 'react-router-dom';

import { useCard } from '../hooks/useCard';

function Header({ onOpen }) {
  const { totalPrice } = useCard();

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__block-left">
          <Link to="/">
            <img
              className="header__logo"
              width={40}
              height={40}
              src="/img/header/logo.png"
              alt="Logo"
            />
          </Link>
          <div className="header__info">
            <h3 className="header__title">REACT SNEAKERS</h3>
            <div className="header__text">Магазин лучших кроссовок</div>
          </div>
        </div>
        <div className="header__block-right">
          <div className="header__basket" onClick={onOpen}>
            <img
              width={18}
              height={18}
              src="/img/header/basket.svg"
              alt="Basket"
            />
            <div className="header__price">{totalPrice} руб.</div>
          </div>
          <Link to="/favorites">
            <img
              className="header__like"
              width={21}
              height={19}
              src="/img/header/like.svg"
              alt="Like"
            />
          </Link>
          <Link to="/orders">
            <img
              className="header__personal-area"
              width={20}
              height={20}
              src="/img/header/personal-area.svg"
              alt="Personal-area"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
