import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import allReducers from './reducers';
import { Provider } from 'react-redux';


const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// //STORE --> GLOBALIZED STATE


// //ACTION --> Describes what to do ie. Increment
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// } 

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// } 


// //REDUCER --> Describes HOW to do Action and modify Store ie. do Increment
// const counter = (state = 0, action)  => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
      
//     case "DECREMENT":
//       return state - 1;

//   }
// }

// let store = createStore(counter);


// //DISPLAY
// store.subscribe(() => console.log(store.getState()));
// // console.log(store.getState());


// //DISPATCH --> Sends Actions to Reducer
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
