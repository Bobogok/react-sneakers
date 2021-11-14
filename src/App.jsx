import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Content from './components/Content';
import Basket from './components/Basket';

export const AppConxtext = createContext({});

function App() {
  const [blockScroll, setBlockScroll] = useState(false);

  const [cardOpened, setCardOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cardItems, setCardItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isBlockScroll = () => {
    setBlockScroll((prev) => !prev);
    document.body.style.overflow = blockScroll ? 'auto' : 'hidden';
  };

  const onRemoveItem = (id) => {
    setCardItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
    axios.delete(`https://618d466cfe09aa001744065f.mockapi.io/card/${id}`);
  };

  useEffect(() => {
    async function fetchData() {
      const cardResponse = await axios.get(
        'https://618d466cfe09aa001744065f.mockapi.io/card'
      );
      const favoritesResponse = await axios.get(
        'https://618e408950e24d0017ce118f.mockapi.io/favorite'
      );
      const itemsResponse = await axios.get(
        'https://618c2615ded7fb0017bb943e.mockapi.io/items'
      );

      setIsLoading(false);

      setCardItems(cardResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <AppConxtext.Provider
        value={{
          items,
          cardItems,
          setCardItems,
          favorites,
          setFavorites,
          setItems,
          // onAddToFavorites,
          isLoading,
        }}
      >
        <Basket
          onClose={() => setCardOpened((prev) => !prev)}
          onRemoveItem={onRemoveItem}
          opened={cardOpened}
          isBlockScroll={isBlockScroll}
        />
        {/* {cardOpened && (
          <Basket
            onClose={() => setCardOpened((prev) => !prev)}
            onRemoveItem={onRemoveItem}
          />
        )} */}
        <Header
          onOpen={() => setCardOpened((prev) => !prev)}
          isBlockScroll={isBlockScroll}
        />
        <Content />
      </AppConxtext.Provider>
    </div>
  );
}

export default App;
