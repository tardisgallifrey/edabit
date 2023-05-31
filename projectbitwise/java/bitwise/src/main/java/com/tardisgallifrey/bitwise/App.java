package com.tardisgallifrey.bitwise;

import java.util.Scanner;

public class App{
     public static void main(String args[]){

          
          Scanner java_in = new Scanner(System.in);
          System.out.println("A Java app for bitwise functions");
          System.out.print("Enter a number: ");
          int a = java_in.nextInt();
          System.out.print("Enter another number: ");
          int b = java_in.nextInt();

          String result1 = "The bitwise AND compare of " + a + " and " + b + " is " + bitwiseAND(a, b);
          System.out.println(result1);

          result1 = "The bitwise OR compare of " + a + " and " + b + " is " + bitwiseOR(a, b);
          System.out.println(result1);

          result1 = "The bitwise XOR compare of " + a + " and " + b + " is " + bitwiseXOR(a, b);
          System.out.println(result1);

          java_in.close();
     }

     //main() is a method in App
     //Other functions go outside of main(),
     //but inside the class
     public static int bitwiseAND(int a, int b){
          return a & b;
     }

     //To use these in main() by its own name,
     //they have to be static functions
     public static int bitwiseOR(int a, int b){
          return a | b;
     }

     public static int bitwiseXOR(int a, int b){
          return a ^ b;
     }
}
