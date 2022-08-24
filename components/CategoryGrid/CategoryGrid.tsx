import BatataImg from '../../public/batata.png';
import BurgerImg from '../../public/burger.png';
import RefriImg from '../../public/refri.png';
import SobremesaImg from '../../public/sobremesa.png';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

interface Props {
  setFilters: (arg0: string) => void;
}

function CategoryGrid({ setFilters }: Props) {
  return (
    <Grid title="Categorias" subtitle="Navegue por categorias">
      <GridItem
        title="Combos"
        image={BurgerImg}
        setFilters={setFilters}
        type="burger"
      />
      <GridItem
        title="Acompanhamentos"
        image={BatataImg}
        setFilters={setFilters}
        type="sidedish"
      />
      <GridItem
        title="Bebidas"
        image={RefriImg}
        setFilters={setFilters}
        type="drink"
      />
      <GridItem
        title="Sobremesas"
        image={SobremesaImg}
        setFilters={setFilters}
        type="dessert"
      />
    </Grid>
  );
}

export default CategoryGrid;
