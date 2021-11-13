import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/Card';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://618fa890f6bf4500174849c9.mockapi.io/order'
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsloading(false);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="orders">
        <div className="orders__inner container">
          <div className="orders__items">
            <h1 className="orders__title">Мои заказы</h1>
            <div className="orders__products">
              {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                <Card key={index} loading={isLoading} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
