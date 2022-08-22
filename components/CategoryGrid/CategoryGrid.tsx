import BatataImg from '../../public/batata.png';
import BurgerImg from '../../public/burger.png';
import RefriImg from '../../public/refri.png';
import SobremesaImg from '../../public/sobremesa.png';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

function CategoryGrid() {
  return (
    <Grid title="Categorias" subtitle="Navegue por categorias">
      <GridItem title="Combos" image={BurgerImg} />
      <GridItem title="Acompanhamentos" image={BatataImg} />
      <GridItem title="Bebidas" image={RefriImg} />
      <GridItem title="Sobremesas" image={SobremesaImg} />
    </Grid>
  );
}

export default CategoryGrid;
