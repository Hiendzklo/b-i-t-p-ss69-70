import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Đảm bảo rằng tệp CSS được nhập đúng cách
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);