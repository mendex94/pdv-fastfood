import { Product } from '../../@types/typings';
import Grid from '../Grid/Grid';
import ProductItem from '../Product';

interface Props {
  products: Product[];
  handleOpenModal: (arg0: Product) => void;
}

function ProductsGrid({ products, handleOpenModal }: Props) {
  return (
    <Grid
      title="Produtos"
      subtitle="Selecione um produto para adicionar ao seu pedido"
    >
      {products.map(product => (
        <ProductItem
          product={product}
          key={product.id}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </Grid>
  );
}

export default ProductsGrid;
