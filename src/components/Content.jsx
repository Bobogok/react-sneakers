import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/Home';
import { Route } from 'react-router-dom';
import Favorites from './Favorites';

function Content({ addCard }) {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get('https://618c2615ded7fb0017bb943e.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get('https://618e408950e24d0017ce118f.mockapi.io/favorite')
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://618e408950e24d0017ce118f.mockapi.io/favorite/${obj.id}`
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

  return (
    <Fragment>
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          addCard={addCard}
          onAddToFavorites={onAddToFavorites}
        />
      </Route>
      <Route path="/favorites">
        <Favorites
          items={favorites}
          addCard={addCard}
          onAddToFavorites={onAddToFavorites}
        />
      </Route>
    </Fragment>
  );
}

export default Content;
