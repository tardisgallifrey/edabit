#include <iostream>

//must be declared
int matchHouses(int step);

int main(void){

    int numHouses=0;

    //don't put an endl on this string cout
    //could cause probs
    std::cout << "Enter a number of match stick houses: ";
    std::cin >> numHouses;
    std::cout << numHouses << " matchstick houses contains " << matchHouses(numHouses) << " matchsticks." << std::endl;
    return 0;

}

int matchHouses(int step){

    if(step == 0){
        return 0;
    }else if (step == 1)
    {   
        return 6;
    }else{
        return 6 + ((step -1) * 5);
    }
    
}