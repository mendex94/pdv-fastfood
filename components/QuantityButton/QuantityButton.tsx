import { Product } from '../../@types/typings';

interface Props {
  handleAddToOrder: (args0: Product) => void;
  product: Product;
  useOrderQty: (args0: Product) => number;
  handleDecreaseOrderQuantity: (args0: Product) => void;
}

function QuantityButton({
  handleAddToOrder,
  product,
  useOrderQty,
  handleDecreaseOrderQuantity,
}: Props) {
  const orderQty = useOrderQty(product);

  return (
    <div className="border-2 border-green-900 rounded-full flex items-center justify-between w-20 hover:cursor-pointer">
      <button
        type="button"
        className="bg-green-900 rounded-full w-6 text-white"
        onClick={() => handleDecreaseOrderQuantity(product)}
      >
        -
      </button>
      <p>{orderQty > 0 ? orderQty : product.orderQuantity}</p>
      <button
        type="button"
        className="bg-green-900 rounded-full w-6 text-white"
        onClick={() => handleAddToOrder(product)}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
