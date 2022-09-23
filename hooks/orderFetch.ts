/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Order } from '../@types/typings';
import supabase from '../services/supabaseClient';

function useOrderFetch() {
  const [orders, setOrders] = useState<Order[]>([] as Order[]);
  const [errorMessage, setError] = useState<string | null>('');
  const orderSubscription = async () => {
    supabase
      .from('orders')
      .on('INSERT', data => {
        setOrders(prev => [...prev, data.new]);
      })
      .on('DELETE', data => {
        setOrders(prev => prev.filter(order => order.id !== data.old.id));
      })
      .subscribe();
  };

  useEffect(() => {
    const getOrderList = async () => {
      const { data, error } = await supabase.from('orders').select('*');
      if (error) {
        setError(error.message);
      }
      if (data) {
        setOrders(data);
      }
    };
    getOrderList();
    orderSubscription();
  }, []);

  return {
    orders,
    setOrders,
    errorMessage,
  };
}

export default useOrderFetch;
