import {useState} from 'react';
import {CalcAverage} from './calculate';

export const DisplaySomething = (props) => {
    const [toggle, setToggle] = useState(false);
  
    const list = props.series.map((item, index)=><li key={index}>Game: {index + 1}, {item.hits} for {item.atbats}</li>);
  
    
    return(
      <div>
      { props.toggle ? 
        <div>
          <h3>for player: {props.name}</h3>
          <p>for game: {props.length}</p>
          <p>Hits: {props.hits}</p>
          <p>At Bats: {props.atbats}</p>
          <ul>
            {list}
          </ul>
          <label>Click for last game: </label>
          <button onClick={()=>setToggle(true)}>Yes</button>
        </div> : null }
        {toggle ? <CalcAverage series={props.series} name={props.name} length={props.length}/> : null}
      </div>
      
    )
  }