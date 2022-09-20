import { useEffect } from 'react';
import GridContainer from '../components/GridContainer/GridContainer';
import UseOrderPooling from '../hooks/orderPooling';

function Status() {
  const { orders, orderPooling, getQueeData, quee } = UseOrderPooling();
  useEffect(() => {
    setTimeout(orderPooling, 10000);
    setTimeout(getQueeData, 10000);
  }, [orderPooling, getQueeData]);

  return (
    <GridContainer>
      <div className="border-r-2 border-gray-400 h-screen flex flex-col gap-8">
        <h1 className="font-bold text-5xl">Preparando:</h1>
        {orders.map(order => (
          <h2 className="font-bold text-5xl text-center text-gray-400">
            {order.clientName}
          </h2>
        ))}
      </div>
      <div className="pl-8 flex flex-col gap-8">
        <h1 className="font-bold text-5xl">Pronto:</h1>
        {quee.map(order => (
          <h2 className="font-bold text-5xl text-center text-green-900">
            {order.clientName}
          </h2>
        ))}
      </div>
    </GridContainer>
  );
}

export default Status;
