import {useState} from 'react';
import { MatchHouses } from './matchhouses';


export const InputBox = (props) => {
    //state value to get input from user
    const [value, setValue] = useState();

    //controls rendering and calling of 
    //MatchHouses component
    const [view, setView] = useState(false);

    const MyValue = (event) => {
        //may be important, maybe not
        event.preventDefault();

        //react seems to only work well with
        //text boxes, so we convert to Int
        setValue(parseInt(event.target.value));
    }

    
    //a coditional render not only looks decent,
    //but also controls the passing of props better
    //leave off value="" to keep this controlled,
    //more or less and errors quiet.
    return(
        <div>
            <label>{props.message}</label>
            <input onChange={MyValue}
                    type="text" 
                    placeholder="Enter number" />
            <button onClick={() => setView(!view)}>Calculate matchsticks</button>
            { view ? <MatchHouses steps={value} />: null }
        </div>
    )
}