import { X } from 'phosphor-react';
import { Product } from '../../@types/typings';
import ModalProduct from '../ModalProduct/ModalProduct';

interface ModalProps {
  product: Product;
  modalState: boolean;
  handleCloseModal: () => void;
}

function ProductModal({ product, modalState, handleCloseModal }: ModalProps) {
  return (
    <div
      className={
        modalState
          ? 'flex-col z-50 flex fixed inset-0 w-screen h-screen bg-[#000000]/40 backdrop-blur-sm gap-8 p-8 transition ease-in-out duration-500'
          : 'hidden transition-all duration-500'
      }
    >
      <div className="w-3/5 mx-auto bg-white rounded-lg p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Revise seu pedido!</h1>
          <button type="button" onClick={() => handleCloseModal()}>
            <X size={28} className="text-gray-400" />
          </button>
        </div>
        <ModalProduct product={product} />
        <h2 className="font-bold">Observações</h2>
        <form>
          <textarea
            name="notes"
            id="notes"
            cols={30}
            rows={5}
            placeholder="Adicione uma observação ao produto"
            className="w-full p-4"
          />
        </form>
        <div className="w-full flex justify-end gap-8">
          <button
            type="button"
            className="bg-white border-2 border-green-900 text-green-900 px-6 py-2 font-bold rounded-md"
          >
            Continuar comprando
          </button>
          <button
            type="button"
            className="bg-green-900 text-white px-6 py-2 font-bold rounded-md"
          >
            Adicionar ao pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
