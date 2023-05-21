

export const MatchHouses = (props) => {

    //keeping the calculating as a function
    const calcmatches = (steps) => {
        if(steps < 1){
            return 0;
        }else if(steps === 1){
            return 6;
        }else{
            return 6 + ((steps - 1) * 5);
        }
    }

    return(
        <div>
            <span>{props.steps} matchstick houses uses {calcmatches(props.steps)} matchsticks.</span>
        </div>
    );
}