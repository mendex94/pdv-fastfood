import Head from 'next/head';
import { NextRouter } from 'next/router';
import Navbar from '../Navbar/Navbar';

interface Props {
  router: NextRouter;
  children: JSX.Element;
}

function Main({ router, children }: Props) {
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PDV - Fastfood</title>
      </Head>
      <Navbar path={router.asPath} />
      {children}
    </div>
  );
}

export default Main;
