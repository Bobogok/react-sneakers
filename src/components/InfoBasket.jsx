import React from 'react';
// import { ContentConxtext } from './Content';

const InfoBasket = ({
  title,
  img,
  description,
  onCloseCard,
  isBlockScroll,
}) => {
  const blockScrollCloseBasket = () => {
    isBlockScroll();
    onCloseCard();
  };

  return (
    <div className="basket__result">
      <img className="basket__image" width={120} src={img} alt="empty-basket" />
      <div className="basket__text basket__text_size_max basket__text_margin-top">
        <b>{title}</b>
      </div>
      <div className="basket__text basket__text_size_m basket__text--grey basket__text_margin-top">
        {description}
      </div>
      <button
        className="basket__button"
        onClick={() => blockScrollCloseBasket()}
      >
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
  );
};

export default InfoBasket;
