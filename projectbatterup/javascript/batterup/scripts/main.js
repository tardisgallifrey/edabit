//Add all JavaScript here
//battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) ➞ ".350 player1 = [[1,2], [2,2], [0,4,], [3,3], [1,2], [0,1], [1,1], [2,3], [0,3], [2,4]];
let series = [];
let game = [];

const addGame = () => {
    
    game=[0,0];

    //even though type="number"
    //you get text back anyway
    //because JavaScript, 
    //parseInt() doesn't screw
    //up division.
    
    //Don't know why this works
    //when all other published methods don't
    //Just remember it.
    game[0] = parseInt(document.getElementById("hits").value);
    game[1] = parseInt(document.getElementById("atbats").value);
    series.push(game);

    document.getElementById("display").innerHTML = `<p>The number of games in this series is: ${series.length}</p>`;

    if(series.length === 10){
        document.getElementById("display").innerHTML = `<h5>Batting average is: ${battingAvg(series)}</h5>`
    }
    
}


//batting average takes in an array
//of game arrays [hits, at_bats]
const battingAvg = (arr) => {
    //variables needed
    let atbats = 0;
    let hits = 0;

    //I remembered how to use the 
    //map function
    arr.map((item) => {hits += item[0];
                        atbats += item[1]} );
    
    //make average 3 character long, exactly
    //and convert to string with leading
    //zero removed.
    return (hits/atbats).toFixed(3).toString().replace("0.", ".");
}

