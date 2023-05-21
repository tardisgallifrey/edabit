import {useContext} from 'react';
import { SumContext } from '../index';
//useContext is necessary to use Context
//SumContext is necessary to use it in Context

//creates a two box input form
export const InputForm = () => {
  //consume SumContext in two getters
  var {setNum1, setNum2 } = useContext(SumContext);
  var mynum1, mynum2; //Not sure why, but locals are better for this job

  return (
    <div>
      {/*form, input, etc cannot be capitalized */}
      <form>
        <input
          type="text"
          placeholder="Enter a number"
          //value works best with local var, it seems
          value={mynum1}
          //inline anon/lambda function works best
          //with Context, it seems
          onChange={
            //e is event object (even also used)
            //event contains:
            //target (this input box)
            //value (the value above)
            //We set Context var with setNum1
            e => setNum1(e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Enter another number"
          value={mynum2}
          onChange={
            e => setNum2(e.target.value)
          }
        />
      </form>
    </div>
  );
};
