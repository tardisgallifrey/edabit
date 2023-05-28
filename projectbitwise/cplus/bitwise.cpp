#include <iostream>

int bitwiseAND(int a, int b);
int bitwiseOR(int a, int b);
int bitwiseXOR(int a, int b);

int main(void){

    int a, b;
    std::cout << "A project to create bitwise functions" << std::endl;
    std::cout << "Enter a number: ";
    std::cin >> a;
    std::cout << "\nEnter another number: ";
    std::cin >> b;

    std::cout << "bitwise AND: " << bitwiseAND(a, b) << std::endl;
    std::cout << "bitwise OR: " << bitwiseOR(a, b) << std::endl;
    std::cout << "bitwise XOR: " << bitwiseXOR(a, b) << std::endl;

}

int bitwiseAND(int a, int b){
    return a & b;
}

int bitwiseOR(int a, int b){
    return a|b;
}

int bitwiseXOR(int a, int b){
    return a^b;
}