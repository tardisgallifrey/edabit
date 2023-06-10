//Add up from 1, with number from 1 to 1000
//perform validation checks and error checks

const addup = (num) => {
    var answer = 0;

    if(num > 0 && num < 1001){
        for( let i=1; i <= num; i++){
            answer += i;
        }
        return answer;
    } else {
        return -1;
    }
}

const calculate = () => {
	num1 = document.getElementById("number").value;
	document.getElementById("answer").innerHTML = `<h3>Sum of numbers to ${num1} is ${ addup(num1) > -1 ? addup(num1) : 'error' }</h3>`;
}

