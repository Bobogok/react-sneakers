import Card from './Card';

function Favorites({ items, addCard, onAddToFavorites }) {
  return (
    <>
      <div className="favorites">
        <div className="favorites__inner container">
          <div className="favorites__items">
            <h1 className="favorites__title">Избранное</h1>
            <div className="favorites__products">
              {items.map((item, index) => (
                <Card
                  key={item.id}
                  favorited={true}
                  onPlus={(obj) => addCard(obj)}
                  onFavorites={(obj) => onAddToFavorites(obj)}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
