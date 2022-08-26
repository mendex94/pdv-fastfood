import Image from 'next/image';
import { Product } from '../../@types/typings';
import useOrder from '../../hooks/order';
import QuantityButton from '../QuantityButton/QuantityButton';

interface ModalProductProps {
  product: Product;
}

function ModalProduct({ product }: ModalProductProps) {
  const { handleAddToOrder, useProductQty, handleDecreaseOrderQuantity } =
    useOrder();

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Image
            src={product?.image}
            width={150}
            height={150}
            objectFit="contain"
            className="rounded-t-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold">{product.name}</h2>
              <p className="w-52">{product.description}</p>
            </div>
            <QuantityButton
              handleAddToOrder={handleAddToOrder}
              handleDecreaseOrderQuantity={handleDecreaseOrderQuantity}
              product={product}
              useOrderQty={useProductQty}
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">R${product.price}</h2>
        </div>
      </div>
      <h2 className="font-bold">Observações</h2>
      <form>
        <textarea
          name="notes"
          id="notes"
          cols={30}
          rows={5}
          placeholder="Adicione uma observação ao produto"
          className="w-full p-4 resize-none"
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
          onClick={() => handleAddToOrder(product)}
        >
          Adicionar ao pedido
        </button>
      </div>
    </>
  );
}

export default ModalProduct;
