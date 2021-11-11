import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/Home';
import { Link, Route } from 'react-router-dom';

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
  }, []);

  const onAddToFavorites = (obj) => {
    console.log(obj);
    axios.post('https://618d6117fe09aa0017440709.mockapi.io/favorite', obj);
    setFavorites((prev) => [...prev, obj]);
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
      <Route path="/favorites"></Route>
    </Fragment>
  );
}

export default Content;
