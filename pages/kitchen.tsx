import { useEffect } from 'react';
import GridContainer from '../components/GridContainer/GridContainer';
import OrderCard from '../components/OrderCard/OrderCard';
import QueeCard from '../components/QueeCard/QueeCard';
import UseOrderPooling from '../hooks/orderPooling';

function Kitchen() {
  const { orders, orderPooling, getQueeData, quee } = UseOrderPooling();
  useEffect(() => {
    setTimeout(orderPooling, 10000);
    setTimeout(getQueeData, 10000);
  }, [orderPooling, getQueeData]);

  return (
    <GridContainer>
      <div className="border-r-2 border-gray-400 h-screen">
        <h2 className="font-bold text-2xl pb-8">Preparando:</h2>
        <div className="px-8 flex flex-col gap-8">
          {orders.map(order => (
            <OrderCard order={order} key={order.id} />
          ))}
        </div>
      </div>
      <div className="px-8">
        <h2 className="font-bold text-2xl pb-8">Pronto:</h2>
        {quee.map(order => (
          <QueeCard order={order} key={order.id} />
        ))}
      </div>
    </GridContainer>
  );
}

export default Kitchen;
