import { useContext } from 'react';

import { AppConxtext } from '../App';

export const useCard = () => {
  const { cardItems, setCardItems } = useContext(AppConxtext);
  const totalPrice = cardItems.reduce((sum, obj) => obj.price + sum, 0);
  return {
    cardItems,
    setCardItems,
    totalPrice,
  };
};
