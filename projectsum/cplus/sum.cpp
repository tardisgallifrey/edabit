#include <iostream>

int sum( int a, int b); //define prototype

//every C++ program has a main, just like C
int main(){
    //declare variables, just like C
    int a = 0, b = 0;

    //print stuff with cout
    //std namespace is required
    //endl takes the place of \n
    std::cout << "A C++ program to return the sum" << std::endl;
    std::cout << "of two numbers in a function" << std::endl;

    //Get two numbers
    std::cout << "Enter a number: " << std::endl;
    //no 'address of' operator needed
    std::cin >> a;
    std::cin.ignore();
    std::cout << "Enter another number: " << std::endl;
    std::cin >> b;
    std::cin.ignore();
    std::cout << "The answer is: " << sum(2, 2) << std::endl;
    return 0;
}


//function to return sum same as in C
int sum(int a, int b){
    return a + b;
}