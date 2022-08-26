/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/layouts/Main';
import store from '../store';
import '../styles/globals.css';

function MyApp({ Component, router, pageProps }: AppProps) {
  return (
    <Layout router={router}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
