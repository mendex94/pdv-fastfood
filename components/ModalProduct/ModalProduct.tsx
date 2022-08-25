import Image from 'next/image';
import { Product } from '../../@types/typings';
import QuantityButton from '../QuantityButton/QuantityButton';

interface ModalProductProps {
  product: Product;
}

function ModalProduct({ product }: ModalProductProps) {
  return (
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
          <QuantityButton />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl">R${product.price}</h2>
      </div>
    </div>
  );
}

export default ModalProduct;
