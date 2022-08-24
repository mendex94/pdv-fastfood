import { Product } from '../../@types/typings';
import Grid from '../Grid/Grid';
import ProductItem from '../Product';

interface Props {
  products: Product[];
}

function ProductsGrid({ products }: Props) {
  return (
    <Grid
      title="Produtos"
      subtitle="Selecione um produto para adicionar ao seu pedido"
    >
      {products.map(product => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Grid>
  );
}

export default ProductsGrid;
