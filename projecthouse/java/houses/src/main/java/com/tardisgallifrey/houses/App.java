package com.tardisgallifrey.houses;
import java.util.Scanner; //required for input task

//Java builds an app
//to run this, first run ./javacompile
//then run ./jar-it
//the result is a jar file that you run with
//java -jar houses.jar
public class App{

     //App must contain a main method
     public static void main(String args[]){

          //build a Scanner input object
          //that gets values from keyboard
          //via System.in
          Scanner input = new Scanner(System.in);

          //need an int variable
          int numHouses = 0;
          
          //System.out.print doesn't add \n
          System.out.print("Enter the number of matchstick houses: ");
          
          //use input to get nextInt(eger) from KB
          numHouses = input.nextInt();

          //Java has NO output string formatting
          //using String.format, is pretty simple
          //and much like C
          String message = String.format("%d houses of matchsticks uses %d matchsticks", numHouses, matchHouses(numHouses));
          
          //send out the message
          System.out.println(message);

          input.close();
     }

     //with an easy App where all our
     //stuff is in one main, public static is fine
     public static int matchHouses(int step){

          if(step == 0){
               return 0;
          }else if(step == 1){
               return 6;
          }else{
               return 6 + ((step -1) * 5);
          }
     }
}
