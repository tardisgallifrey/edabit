package com.tardisgallifrey.app;

import java.util.Scanner;
import java.util.Vector;

public class App{

    //not necessary without using
    //Game object, 
    //but tired of coding failing Vectors
     static int totalhits = 0;
     static int totalbats = 0;
     static double average = 0.0;

    public static void main(String[] args){

      var cin = new Scanner(System.in);
      var series = new Vector<Game>();
      int numgames = 0;

      System.out.println("Batter's Average Calculator");
      System.out.print("How many games are in the series: ");
      numgames = cin.nextInt();

      // I had a serious problem making the Vector
      //work.  The for(Game game : series) would 
      //only print out data from the final entry
      //into game.hits, game.atbats when 
      //game was istantiated above.
      //
      //game is an object. Each write to hits 
      //and atbats was not overwriting the previous.
      //I needed to RE_instantiate game each time
      //I added a new set of game data.
      //Instantion goes inside the for loop.
      for(int idx = 0; idx < numgames; idx++){
        var game = new Game();
        System.out.print("Enter number of hits: ");
        game.hits = cin.nextInt();
        System.out.print("Enter number of at bats: ");
        game.atbats = cin.nextInt();
        series.add(game);
      }

      for(Game game : series){
        totalhits += game.hits;
        totalbats += game.atbats;
      }

      average = (double)totalhits/(double)totalbats;
      System.out.format("The batter's average over "+numgames+" games is: %.3f\n", average);
            
      cin.close();
    }
  
}
