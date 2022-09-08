import { Check, X } from 'phosphor-react';

interface Props {
  handleCloseModal: () => void;
  modalState: boolean;
}

function CheckoutModal({ handleCloseModal, modalState }: Props) {
  return (
    <div
      className={
        modalState
          ? 'flex-col z-50 flex fixed inset-0 w-screen bg-[#000000]/40 backdrop-blur-sm gap-8 p-8 transition ease-in-out duration-500 items-center justify-center'
          : 'hidden'
      }
    >
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-end">
          <button type="button" onClick={handleCloseModal}>
            <X size={28} className="text-gray-400" />
          </button>
        </div>
        <Check size={350} weight="fill" className="text-green-900" />
        <p className="font-bold text-center">Pedido finalizado com sucesso!</p>
        <p className="text-sm text-center">
          O pedido foi encaminhado para a cozinha.
        </p>
      </div>
    </div>
  );
}

export default CheckoutModal;
