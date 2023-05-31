import java.util.Scanner //needed for input

//semi-colons are optional in 
//kotlin, except where they aren't allowed.
//So, best to just not use them.

fun main() {
     
     var a: Int
     var b: Int

     println("A Kotlin app for the bitwise challenge.")
     val input = Scanner(System.`in`)
     print("Enter a number: ")
     a = input.nextInt()
     print("Enter another number: ")
     b = input.nextInt()

     println("The result of AND comparison is: ${bitwiseAND(a, b)}")
     println("The result of OR comparison is: ${bitwiseOR(a, b)}")
     println("The result of XOR comparison is: ${bitwiseXOR(a, b)}")

     input.close()
}

fun bitwiseAND(a: Int, b: Int):Int {
    return a and b
}

fun bitwiseOR(a: Int, b: Int):Int {
    return a or b
}

fun bitwiseXOR(a: Int, b: Int):Int {
    return a xor b
}