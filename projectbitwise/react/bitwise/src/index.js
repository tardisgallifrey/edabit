import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import './index.css';

//So, here is the semi-simple method
//No other components
//No special hooks or use...
//useState is required.

//input cannot really be a component by itself
//It is part of other components that need it.

const bitwiseAND = (a, b) => { 
  return parseInt(a) & parseInt(b);
}

const bitwiseOR = (a, b) => {
  return parseInt(a) | parseInt(b);
}

const bitwiseXOR = (a, b) => {
  return parseInt(a) ^ parseInt(b);
}

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [view, setView] = useState(false);

 

    return(
      <div>
        <h1>React bitwise challenge</h1>
        <input type="text"
                placeholder="Enter a number"
                onChange={(e) => setNum1(e.target.value)} />
        <input type="text"
                placeholder="Enter a number"
                onChange={(e) => setNum2(e.target.value)} />
        <button onClick={() => setView(true)} >View results</button>
        {view ? <div>
                <p>The AND result is: {bitwiseAND(num1, num2)}</p>
                <p>The OR result is: {bitwiseOR(num1, num2)}</p>
                <p>The XOR result is: {bitwiseXOR(num1, num2)}</p>
                <button onClick={() => { setView(false);
                                          setNum1(null);
                                          setNum2(null);
                                          }}>Reset</button>
                </div> : null}
        
      </div>
    );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

