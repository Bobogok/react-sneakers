import React, { Fragment, useState, createContext, useContext } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { AppConxtext } from '../App';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Orders from '../pages/Orders';

export const ContentConxtext = createContext({});

function Content() {
  const { favorites, setFavorites, cardItems, setCardItems, items, isLoading } =
    useContext(AppConxtext);

  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCard = async (obj) => {
    try {
      const findItem = cardItems.find(
        (cardObj) => Number(cardObj.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCardItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://618d466cfe09aa001744065f.mockapi.io/card/${findItem.id}`
        );
      } else {
        setCardItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://618d466cfe09aa001744065f.mockapi.io/card',
          obj
        );
        setCardItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.log(error);
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
    return cardItems.some((obj) => Number(obj.parentId) === Number(id));
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
        <Route path="/orders">
          <Orders />
        </Route>
      </Fragment>
    </ContentConxtext.Provider>
  );
}

export default Content;
