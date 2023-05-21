#include <stdio.h>

/* first edabit.com exercise */
/* develop and code a function that returns */
/* the sum of two integers. */

/* in C, one should use a function prototype */
/* at the opening of the program, outside the main() */
int sum(int a, int b);

/* Every C program has a main function */
int main(){

    /* printf prints things */
    printf("And example of a C function that\n");
    printf("the sum of two integers.\n");

    /* always declare and, if possible, initialize vars */
    int a = 0, b = 0;

    /* get two integers from user*/
    printf("Get a number: ");
    scanf("%d", &a);
    printf("Get another number: ");
    scanf("%d", &b);

    /* print sum by calling function */
    printf("The sum of %d and %d is %d\n", a, b, sum(2, 2));
    
    /* end of app */
    return 0;
}

/* The sum function*/
/* declare return type */
/* declare types for parameters */
int sum(int a, int b){
    /* inline the sum in the return */
    return a + b;
}