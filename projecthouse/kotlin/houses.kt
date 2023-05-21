import java.util.Scanner //guess what?  needed here

//must have a main function
fun main(){

    //All kt variables must be val or var
    //val is like constant
    //var is like let
    //Type is sometimes optional,
    //but, if needed, like here,
    //It goes after with a colon
    var numHouses:Int;
    var numMatches:Int;

    //Wow, just like Java, but different
    //even an object needs val or var
    //backticks on in are required,
    //not sure why
    val input = Scanner(System.`in`);
    print("Enter number of matchstick houses: ");
    numHouses = input.nextInt();

    //kotlin var interpolation is handy, but
    //didn't like function call
    numMatches = matchHouses(numHouses);
    println("$numHouses matchstick houses have $numMatches matchsticks");
    input.close();


}

//functions don't need declarations
//same type rules apply with function
//type going after params
fun matchHouses(step: Int): Int {

    if(step < 1){
        return 0;

    }else if(step == 1){
        return 6;
    }else{
        return 6 + ((step -1) * 5);
    }
}