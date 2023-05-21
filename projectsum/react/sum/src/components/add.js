import {useState} from 'react';
import { sum } from "../functions/sum"
import { useContext } from "react";
import { SumContext } from '../index';
//useState is necessary
//import the sum function
//useContext is necessary to consume Context
//and SumContext is needed as well.

export const Add = () => {
    //create an answer state var
    const [answer, setAnswer] = useState(0);
    //consume values from our Context
    const {num1, num2} = useContext(SumContext);

    return(
        <div>
            <button onClick={(e)=>{
                //using an inline Click function
                //first, prevent normal ops or 
                //this doesn't work
                e.preventDefault();
                //set result with return from
                //sum function
                setAnswer(sum(num1, num2));
                    }
                }>Calculate</button>
            <div>
                {/*conditionally render result */}
                {/*conditional test must be an expression */}
                { answer > 0 ? <p>This is the answer: {answer}</p> : "" }
            </div>
        </div>
    )
}