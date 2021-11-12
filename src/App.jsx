import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Content from './components/Content';
import Basket from './components/Basket';

function App() {
  const [cardOpened, setCardOpened] = useState(false);
  const [cardItems, setCardItems] = useState([]);

  const onAddToCard = (obj) => {
    axios.post('https://618d466cfe09aa001744065f.mockapi.io/card', obj);
    setCardItems((prev) => [...prev, obj]);
  };

  useEffect(() => {
    axios
      .get('https://618d466cfe09aa001744065f.mockapi.io/card')
      .then((res) => {
        setCardItems(res.data);
      });
  }, []);

  const onRemoveItem = (id) => {
    console.log(cardItems);
    setCardItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
    axios.delete(`https://618d466cfe09aa001744065f.mockapi.io/card/${id}`);
  };

  return (
    <div className="wrapper">
      {cardOpened && (
        <Basket
          items={cardItems}
          onClose={() => setCardOpened((prev) => !prev)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onOpen={() => setCardOpened((prev) => !prev)} />
      <Content addCard={onAddToCard} />
    </div>
  );
}

export default App;
