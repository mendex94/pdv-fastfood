import { CreditCard, Money } from 'phosphor-react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Exchange from '../Exchange/Exchange';

function PaymentOptions() {
  return (
    <div className="py-8">
      <ContentContainer>
        <h2 className="font-bold text-xs">Selecione a forma de pagamento:</h2>
        <form className="space-y-4">
          <div className="flex justify-between border-2 border-gray-400 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <CreditCard size={32} weight="fill" className="text-green-900" />
              <p className="font-bold">Débito</p>
            </div>
            <input type="radio" name="paymentOption" id="debit" value="debit" />
          </div>
          <div className="flex justify-between border-2 border-gray-400 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <CreditCard size={32} weight="fill" className="text-green-900" />
              <p className="font-bold">Crédito</p>
            </div>
            <input
              type="radio"
              name="paymentOption"
              id="debit"
              value="credit"
            />
          </div>
          <div className="flex justify-between border-2 border-gray-400 p-4 rounded-md">
            <div className="flex items-center gap-4">
              <Money size={32} weight="fill" className="text-green-900" />
              <p className="font-bold">Dinheiro</p>
            </div>
            <input type="radio" name="paymentOption" id="debit" value="cash" />
          </div>
        </form>
        <Exchange />
      </ContentContainer>
    </div>
  );
}

export default PaymentOptions;
