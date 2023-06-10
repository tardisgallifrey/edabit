#include <iostream>

int addup(int number);

int main(int argc, char *argv[]){

    int num1;
    

    std::cout << "A C++ version of the addup challenge." << std::endl;
    std::cout << "Enter a number: ";
    std::cin >> num1;

    if(addup(num1) != -1){
        std::cout << "The sum of numbers to " << num1 << " is " << addup(num1) << std::endl;
    } else {
        std::cout << "There was an error" << std::endl;
    }


    return 0;
}

int addup(int number){

    int answer=0;

    if(number > 0 && number < 1001){
        //do not use i++ or i-- in C++
        //use += or -=
        for(int i = 1; i <= number; i += 1){
            answer += i;
        }
        return answer;
    } else {
        return -1;
    }
}