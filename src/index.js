import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import Main from './Main';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {/*<App />*/}
    <Main />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
