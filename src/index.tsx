import React from 'react';
import ReactDOM from 'react-dom'; // DOM árvore de elementos do HTML
import App from './App';

ReactDOM.render( // injeta o html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
