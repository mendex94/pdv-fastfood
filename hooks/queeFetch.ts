import { useEffect, useState } from 'react';
import { Order } from '../@types/typings';
import supabase from '../services/supabaseClient';

function UseOrderPooling() {
  const [quee, setQuee] = useState<Order[]>([] as Order[]);
  const [errorMessage, setError] = useState<string | null>('');
  const queeSubscription = async () => {
    supabase
      .from('quee')
      .on('INSERT', data => {
        setQuee(prev => [...prev, data.new]);
      })
      .on('DELETE', data => {
        setQuee(prev => prev.filter(order => order.id !== data.old.id));
      })
      .subscribe();
  };

  useEffect(() => {
    const getQueeList = async () => {
      const { data, error } = await supabase.from('quee').select('*');
      if (error) {
        setError(error.message);
      }
      if (data) {
        setQuee(data);
      }
    };
    getQueeList();
    queeSubscription();
  }, []);

  return {
    quee,
    errorMessage,
  };
}

export default UseOrderPooling;
