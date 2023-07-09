import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {DisplaySomething} from './components/displaysomething';
import './index.css';

const App = () => {
  const [name, setName] = useState("");
  const [hits, setHits] = useState(0);
  const [atbats, setBats] = useState(0);
  const [length, setLength] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [series] = useState([]);

  
  
  const addGame = () => {
    let game = {
      hits: parseInt(hits),
      atbats: parseInt(atbats)
    }

    setLength(series.push(game));
    setToggle(true);

  }

  return(
    <div>
      <h1>Batter Up!</h1>
      <hr/>
      <input type="text"
              placeholder="Enter name here"
              onChange={(e)=>setName(e.target.value)}
              /><br/>
      <label>Enter number of hits here: </label>
      <input type="number"
              onChange={(e)=>setHits(e.target.value)}
              /><br/>
      <label>Enter at bats for game here: </label>
      <input type="number"
              onChange={(e)=>setBats(e.target.value)}
              /><br/>
      <button onClick={()=>addGame()}>Add</button>
      <DisplaySomething name={name} 
                        hits={hits} 
                        atbats={atbats} 
                        length={length}
                        toggle={toggle}
                        series={series} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

