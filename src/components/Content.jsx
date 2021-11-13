import React, { Fragment, useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from '../pages/Home';
import Favorites from './Favorites';

export const ContentConxtext = createContext({});

function Content({
  favorites,
  setFavorites,
  cardItems,
  setCardItems,
  items,
  isLoading,
}) {
  console.log(items);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCard = (obj) => {
    if (cardItems.find((cardObj) => Number(cardObj.id) === Number(obj.id))) {
      axios.delete(
        `https://618d466cfe09aa001744065f.mockapi.io/card/${obj.id}`
      );
      setCardItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post('https://618d466cfe09aa001744065f.mockapi.io/card', obj);
      setCardItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://618e408950e24d0017ce118f.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          'https://618e408950e24d0017ce118f.mockapi.io/favorite',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (err) {
      alert('Не удалось добавить в фавориты!');
    }
  };

  const isItemAdded = (id) => {
    return cardItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <ContentConxtext.Provider
      value={{
        items,
        cardItems,
        searchValue,
        onChangeSearchInput,
        setSearchValue,
        onAddToCard,
        onAddToFavorites,
        isLoading,
        favorites,
        isItemAdded,
      }}
    >
      <Fragment>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Fragment>
    </ContentConxtext.Provider>
  );
}

export default Content;
