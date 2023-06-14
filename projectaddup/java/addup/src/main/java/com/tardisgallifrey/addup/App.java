package com.tardisgallifrey.addup;

import java.util.Scanner;

public class App{
     public static void main(String args[]){

          var cin = new Scanner(System.in);
          System.out.print("Enter a number between 1 and 1000: ");
          int number = cin.nextInt();
          
          System.out.println("The sum of the numbers between 1 and x is: ");
          System.out.println(addup(number));

          cin.close();

     
     }

     public static int addup(int number){

          int answer=0;

          for(int i = 1; i <= number; i++){
               answer += i;
          }

          return answer;
     }
}


