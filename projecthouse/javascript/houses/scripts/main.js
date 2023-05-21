function matchHouses(step) {
    //the first house has 6 matchsticks
	const onehouse = 6;

    //the other houses (step - 1) have 5 matchsticks
	const otherhouse = 5;
	
	if(step < 1){
        //num of houses is zero
		return 0;
	}else if( step > 1){
        //num of houses is greater than one

        //decrement step (first is six)
		step--;

        //return 6 + ((step - 1) * 5)
		return onehouse + (step * otherhouse);
	}else{
        //num of houses is 1
		return onehouse;
	}
	
}

const showHouses = () => {
	numHouses = document.getElementById("box").value;
	document.getElementById("root").innerHTML = `<h3>${numHouses} houses of matchsticks has ${matchHouses(numHouses)} matchsticks</h3>`;
}
