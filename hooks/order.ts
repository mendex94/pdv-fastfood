import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../@types/typings';
import { RootStore } from '../store';
import {
  addToOrder,
  cancelOrder,
  decreaseOrderQuantity,
  dispatchOrder,
} from '../store/modules/order';

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

  const order = useSelector((state: RootStore) => state.order);

  const exchangeCalc = (value: number) => {
    const exchange = value - order.orderTotalAmount;
    return exchange;
  };

  const useCancelOrder = () => {
    dispatch(cancelOrder());
    Router.push('/');
  };

  const useDispatchOrder = (name: string) => {
    dispatch(dispatchOrder(name));
  };

  return {
    handleAddToOrder,
    handleDecreaseOrderQuantity,
    useProductQty,
    useCancelOrder,
    exchangeCalc,
    useDispatchOrder,
    order,
  };
}

export default useOrder;
