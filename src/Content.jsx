import React from 'react';
import Card from './Card';

function Content() {
  return (
    <div className="content">
      <div className="content__inner container">
        <h1 className="content__title">Все кроссовки</h1>
        <div className="content__products">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Content;
