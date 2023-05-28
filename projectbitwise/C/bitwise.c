#include <stdio.h>
#include <stdlib.h>

//write three bitwise functions
//that return the result of bitwise
//comparisons of integers.
//C has operators for doing so.
int bitwiseAND(int a, int b);
int bitwiseOR(int a, int b);
int bitwiseXOR(int a, int b);

int main(){

    int a, b;

    printf("Three bitwise functions, AND, OR, XOR\n\n");

    printf("Enter an integer: ");
    scanf("%d", &a);
    printf("\nNow, enter another integer: ");
    scanf("%d", &b);

    printf("\nThe comparison as a bitwiseAND: %d", bitwiseAND(a, b));
    printf("\nThe comparison as a bitwiseOR: %d", bitwiseOR(a, b));
    printf("\nThe comparison as a bitwisexOR: %d", bitwiseXOR(a, b));
    printf("\n");
    
    return 0;
}


int bitwiseAND(int a, int b){
    //bitwise AND operator
    return a & b;
}

int bitwiseOR(int a, int b){
    //bitwise OR operator
    return a | b;
}

int bitwiseXOR(int a, int b){
    //bitwise XOR operator
    return a ^ b;
}