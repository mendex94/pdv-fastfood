import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Main';
import '../styles/globals.css';

function MyApp({ Component, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component />
    </Layout>
  );
}

export default MyApp;
