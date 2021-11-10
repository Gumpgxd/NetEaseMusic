import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/store/index"
import { persistor } from "./redux/store";
import {PersistGate} from 'redux-persist/lib/integration/react';
import "./i18n/config"
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor = {persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
