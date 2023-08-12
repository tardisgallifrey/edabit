package com.tardisgallifrey.app;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Vector;



public class App{

    //not necessary without using
    //Game object, 
    //but tired of coding failing Vectors
     static int totalhits = 0;
     static int totalbats = 0;
     static double average = 0.0;

    public static void main(String[] args)
        throws IOException
    {
       
      BufferedReader cin = new BufferedReader(
            new InputStreamReader(System.in));

      System.out.println("Batter's average calculator");
      System.out.println("Enter number of games in series...");
      int numgames = Integer.parseInt(cin.readLine());
 
      for(int idx = 0; idx < numgames; idx++){
        System.out.println("Enter hits...");
        totalhits += Integer.parseInt(cin.readLine());
        System.out.println("Enter at bats...");
        totalbats += Integer.parseInt(cin.readLine());
      }

      average = (double)totalhits/(double)totalbats;
      System.out.format("Batter's average for "+numgames+"games is: %.3f\n", average);  
 
      cin.close();
 
    }
}
