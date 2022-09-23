import { Check, X } from 'phosphor-react';
import { Order } from '../../@types/typings';
import { deleteOrder, sendQuee } from '../../services/orders';

interface Props {
  order: Order;
}

function OrderCard({ order }: Props) {
  return (
    <div className="flex justify-between w-2/3 border-2 border-green-900 rounded-md p-2">
      <img src={order.orderItems[0]?.image} alt="" className="h-12" />
      <div>
        <h2 className="font-bold">
          {order.id} - {order.clientName}
        </h2>
        {order.orderItems.map(orderItem => (
          <p className="text-xs text-gray-400">
            {orderItem.orderQuantity}x {orderItem.name}
          </p>
        ))}
      </div>
      <div className="flex gap-4">
        <button type="button" onClick={() => sendQuee(order, order.id)}>
          <Check size={22} weight="fill" className="text-green-900" />
        </button>
        <button type="button" onClick={() => deleteOrder(order.id)}>
          <X size={22} weight="fill" className="text-red-900" />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
