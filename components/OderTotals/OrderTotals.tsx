import { Order, Product } from '../../@types/typings';

interface Props {
  order: Order;
}

function OrderTotals({ order }: Props) {
  return (
    <div
      className={
        order.orderItems.length === 0
          ? 'hidden'
          : 'w-full border-2 border-gray-400 rounded-md p-12'
      }
    >
      <div className="border-b-gray-400 border-2 border-dashed pb-4 flex flex-col mb-4">
        {order.orderItems.map((product: Product) => (
          <div className="flex justify-between" key={product.id}>
            <p>{`${product.orderQuantity}x ${product.name}`}</p>
            <p>R$ {product.price}</p>
          </div>
        ))}
      </div>
      <div>
        <p>Total do pedido:</p>
        <p className="font-bold text-2xl">R$ {order.orderTotalAmount}</p>
      </div>
    </div>
  );
}

export default OrderTotals;
