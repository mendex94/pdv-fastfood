import { useState } from 'react';
import { Product } from '../@types/typings';

function useModal() {
  const [modalState, setModalState] = useState<boolean>(false);

  const [modalProduct, setModalProduct] = useState<Product>({} as Product);

  const handleOpenModal = (product: Product) => {
    setModalProduct(product);
    setModalState(true);
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
  };
}

export default useModal;
