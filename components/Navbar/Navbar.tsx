import { Hamburger } from 'phosphor-react';
import LinkItem from '../LinkItem/LinkItem';

interface Props {
  path: string;
}

function Navbar(props: Props) {
  const { path } = props;

  return (
    <nav className="bg-green-900 p-2 flex text-md font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Hamburger
            size={25}
            className="bg-white text-green-900 rounded-full p-1"
          />
          <h1 className="text-white">fastfood</h1>
        </div>
        <div className="flex gap-7">
          <LinkItem href="/" path={path}>
            Pedidos
          </LinkItem>
          <LinkItem href="/kitchen" path={path}>
            Kitchen
          </LinkItem>
          <LinkItem href="/status" path={path}>
            Status
          </LinkItem>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
