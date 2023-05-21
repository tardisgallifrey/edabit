import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { InputBox } from './components/inputbox';

//InputBox isn't completely independent.  
//But, it was quicker
//passing message as a prop is prob overkill,
//but, OK.

const App = () => {
  return(
    <div>
      <h1>How many matches to how many houses.</h1>
      <InputBox message="Enter number of matchstick houses:" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


