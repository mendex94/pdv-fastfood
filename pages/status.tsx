import GridContainer from '../components/GridContainer/GridContainer';
import useOrderFetch from '../hooks/orderFetch';
import UseOrderPooling from '../hooks/queeFetch';

function Status() {
  const { quee } = UseOrderPooling();
  const { orders } = useOrderFetch();

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
