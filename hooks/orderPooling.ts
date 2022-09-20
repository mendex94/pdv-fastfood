import { useState } from 'react';
import { Order } from '../@types/typings';
import { getOrders, getQuee } from '../services/orders';

function UseOrderPooling() {
  const [orders, setOrders] = useState<Order[]>([] as Order[]);
  const [quee, setQuee] = useState<Order[]>([] as Order[]);
  function getQueeData() {
    getQuee().then(queeResponse => setQuee(queeResponse));
  }

  function orderPooling() {
    getOrders().then(ordersResponse => setOrders(ordersResponse));
  }
  return {
    orders,
    orderPooling,
    quee,
    getQueeData,
  };
}

export default UseOrderPooling;
