import Image from 'next/image';
import { Product } from '../../@types/typings';

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  return (
    <button
      type="button"
      className="flex flex-col items-center hover:scale-110 transition duration-500 mb-5"
    >
      <Image
        src={product?.image}
        width={150}
        height={150}
        objectFit="contain"
        className="rounded-t-lg"
      />
      <p className="font-bold">{product.name}</p>
      <span className="text-xs w-28">{product.description}</span>
      <p>R$ {product.price}</p>
    </button>
  );
}

export default ProductItem;
