package com.tardisgallifrey.sum;

import java.util.Scanner; //needed for user input

public class App{
     public static void main(String args[]){

          Scanner myObj = new Scanner(System.in);  // Create a Scanner object
          
          System.out.println("A program to return a sum of");
          System.out.println("two integers.");

          System.out.println("Enter a number: ");
          int a = myObj.nextInt();

          System.out.println("Enter another number: ");
          int b = myObj.nextInt();

          //call function
          System.out.println("The answer is: "+sum(a, b));

          //close the scanner
          myObj.close();

     }

     //App is a class, so our function is 
     //inside the class, but outside of main()
     static int sum(int a, int b){
          return a + b;
     }
}
