import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const addup = (num1) => {
  var answer = 0;

  if(num1 > 0 && num1 < 1001){
    for(let i = 1; i <= num1; i++){
      answer += i;
    }
    return answer;
  }else{
    return -1;
  }
}



const App = () => {
  const [result, setResult] = useState();
  
  return(
    <div>
      <h1>A React version of the addup challenge</h1>
      <hr/>
      <input type="text"
              placeholder="Enter number here"
              onChange= { (e) => setResult(e.target.value) }/>
      { result > 0 && addup(result) !== -1 ? <p>The sum of the numbers from 1 to {result} is {addup(result)}</p>: null}
      { addup(result) === -1 && result !== undefined ? <p>There was an error.</p> : null }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

