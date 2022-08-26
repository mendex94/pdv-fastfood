import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../@types/typings';
import { RootStore } from '../store';
import { addToOrder, decreaseOrderQuantity } from '../store/modules/order';

function useOrder() {
  const dispatch = useDispatch();
  const handleAddToOrder = (product: Product) => {
    dispatch(addToOrder(product));
  };
  const handleDecreaseOrderQuantity = (product: Product) => {
    dispatch(decreaseOrderQuantity(product));
  };

  const useProductQty = (product: Product) => {
    const order = useSelector((state: RootStore) => state.order);
    const itemIndex = order.orderItems.findIndex(
      (item: Product) => item.id === product.id,
    );
    return order.orderItems[itemIndex]?.orderQuantity;
  };

  return {
    handleAddToOrder,
    handleDecreaseOrderQuantity,
    useProductQty,
  };
}

export default useOrder;
