import { useState } from 'react';
import useOrder from '../../hooks/order';

function Exchange() {
  const { exchangeCalc } = useOrder();
  const [cash, setCash] = useState<any>();

  const exchange = exchangeCalc(cash);

  return (
    <div className="grid grid-cols-2 text-xs">
      <div>
        <p>Valor entregue</p>
        <form>
          <input
            type="text"
            placeholder="Valor"
            onKeyUp={e => setCash((e.target as HTMLInputElement).value)}
          />
        </form>
      </div>
      <div>
        <p>Troco</p>
        <p>R$ {exchange}</p>
      </div>
    </div>
  );
}

export default Exchange;
