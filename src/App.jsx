import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Basket from './components/Basket';

function App() {
  const [cardOpened, setCardOpened] = useState(false);

  return (
    <div className="wrapper">
      {cardOpened && <Basket onClose={() => setCardOpened((prev) => !prev)} />}
      <Header onOpen={() => setCardOpened((prev) => !prev)} />
      <Content />
    </div>
  );
}

export default App;
