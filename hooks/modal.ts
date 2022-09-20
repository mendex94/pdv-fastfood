import Router from 'next/router';
import { useState } from 'react';
import { Product } from '../@types/typings';
import useOrder from './order';

function useModal() {
  const { useDispatchOrder, useCancelOrder } = useOrder();

  const [modalState, setModalState] = useState<boolean>(false);

  const [modalProduct, setModalProduct] = useState<Product>({} as Product);

  const handleOpenModal = (product: Product) => {
    setModalProduct(product);
    setModalState(true);
  };

  const HandleCheckoutModalOpen = (clientName: string) => {
    setModalState(true);
    useDispatchOrder(clientName);
  };

  const HandleCheckoutModalClose = () => {
    setModalState(false);
    useCancelOrder();
    Router.push('/');
  };

  const handleCloseModal = () => {
    setModalProduct({} as Product);
    setModalState(false);
  };

  return {
    modalState,
    modalProduct,
    handleOpenModal,
    handleCloseModal,
    HandleCheckoutModalOpen,
    HandleCheckoutModalClose,
  };
}

export default useModal;
