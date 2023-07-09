export const CalcAverage = (props) => {
    var totalhits = 0;
    var totalbats = 0;
  
      
      for (let game of props.series){
        totalhits += game.hits;
        totalbats += game.atbats;
        
      }
  
      var avg = (totalhits/totalbats).toFixed(3).toString().replace('0.','.');
      
      return(
        <p>The average of {props.length} games for {props.name} is: {avg}.</p>
      );
      
  }