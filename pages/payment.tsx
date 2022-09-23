import { Cardholder } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import OrderTotals from '../components/OderTotals/OrderTotals';
import PaymentOptions from '../components/PaymentOptions/PaymentOptions';
import useModal from '../hooks/modal';
import useOrder from '../hooks/order';
import { dispatchOrder } from '../store/modules/order';

function Payment() {
  const { order, useCancelOrder } = useOrder();
  const dispatch = useDispatch();

  const { HandleCheckoutModalOpen, HandleCheckoutModalClose, modalState } =
    useModal();

  const setName = (name: string) => {
    dispatch(dispatchOrder(name));
  };

  return (
    <ContentContainer>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="flex items-center gap-4 font-bold">
            <Cardholder size={32} className="text-green-900" weight="fill" />
            Pagamento
          </h1>
          <div className="p-4">
            <h2 className="font-bold text-xs">Resumo da compra</h2>
            <OrderTotals order={order} />
            <form action="submit" className="p-2">
              <h2>Nome do cliente</h2>
              <input
                type="text"
                placeholder="Primeiro nome"
                onKeyUp={e => setName((e.target as HTMLInputElement).value)}
              />
            </form>
          </div>
        </div>
        <div>
          <PaymentOptions />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="text-gray-400 bg-white border-2 border-gray-400 font-bold px-6 py-2 rounded-md"
          onClick={useCancelOrder}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="text-white bg-green-900 font-bold px-6 py-2 rounded-md"
          onClick={() => HandleCheckoutModalOpen(order.clientName)}
        >
          Finalizar pedido
        </button>
      </div>
      <CheckoutModal
        handleCloseModal={HandleCheckoutModalClose}
        modalState={modalState}
      />
    </ContentContainer>
  );
}

export default Payment;
