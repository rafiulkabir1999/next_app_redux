// reduxWrapper.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js'; // Import your Redux store

export const withRedux = (Component) => {


  const WithRedux = ({ ...pageProps }) => (
    <Provider store = {store}>
      <Component {...pageProps} />
    </Provider>
  );

  return WithRedux;
};