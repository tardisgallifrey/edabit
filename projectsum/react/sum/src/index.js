import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {InputForm} from './components/input';
import { Add } from './components/add';
import './index.css';
//useState needed for state variables;
//    required in Context, I think
//InputForm and Add are self created components

//Our tree:
//        /src
//            index.js
//            index.css
//          /components
//            add.js
//            input.js
//          /functions
//            sum.js


//create a context and export it for 
//other components
export const SumContext = createContext();

//main app and entry point
const App = () => {
  //create two state variables, default to 0
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  //render everything
  return(
    <div>
      {/*create a Context Provider */}
      {/*give it the vars and setters from */}
      {/*state variables above as values */}
      {/*these are now available to all children */}
      <SumContext.Provider 
        value={{ num1, setNum1, num2, setNum2 }} >
        <h2>Return a sum from a function</h2>
        {/*Call the Input form to get nums */}
        <InputForm />
        {/*Call the add component to perform */}
        {/*function and render results  */}
        <Add />
      </SumContext.Provider>
    </div>
  );
}

//Do the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

