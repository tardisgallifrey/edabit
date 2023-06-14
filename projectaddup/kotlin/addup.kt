import java.util.Scanner

fun main(){

    var result:Int
    var cin = Scanner(System.`in`)
    println("A Kotlin program for the addup challenge.")
    print("Enter a number between 1 and 1000 below:")
    result = cin.nextInt()
    if( addup(result) != -1){
        println("The sum of all numbers between 1 and ${result} is: ${addup(result)}")
    }else{
        println("There was an error.")
    }
}

fun addup(number :Int):Int {
    var answer = 0

    if(number > 0 && number < 1001){
        for(i in 1..number){
            answer += i
        }
        return answer
    }else{
        return -1
    }
}