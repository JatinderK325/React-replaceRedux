import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import productReducer from './store/reducers/products';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/products-context';
import './index.css';
import App from './App';

/* const rootReducer = combineReducers({
  shop: productReducer
}); 
//
const store = createStore(rootReducer); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ProductsProvider>
);

// ReactDOM.render(
//   // <Provider store={store}>
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsProvider>,
//   // </Provider>,
//   document.getElementById('root')
// );
