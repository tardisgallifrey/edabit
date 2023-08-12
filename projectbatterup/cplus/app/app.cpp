#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>

#define EOL std::cout << std::endl;

class Game {
     public:
          int hits;
          int atbats;

};
     
//beginning of program
int main(int argc, char *arg[]){

     Game game;
     std::vector<Game> series = {};
     int numgames = 0;
     int totalhits = 0;
     int totalbats = 0;
     float average = 0.0000000000;

     std::cout << "PLease enter the length of the series: ";
     std::cin >> numgames;

     for(int i=0; i < numgames; i++){
          std::cout << "Game: " << i + 1 << std::endl;
          std::cout << "Please enter the number of hits: ";
          std::cin >> game.hits;

          std::cout << "Please enter the number of at bats: ";
          std::cin >> game.atbats;

          series.push_back(game);
     }

     EOL
     std::cout << "Series hits and at bats";
     EOL

     for(auto el : series){

          totalhits += el.hits;
          totalbats += el.atbats;
          
          std::cout << "Hits: " << el.hits << " At bats: " << el.atbats;
          EOL
     }
     EOL
     std::cout.precision(3);
     std::cout << std::fixed;
     std::cout << "The average is: " << (float)totalhits/(float)totalbats << std::endl;

     
     return 0;
} //end of program
