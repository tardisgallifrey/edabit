//Conversion methods here
#if !defined(STDIO)
#define STDIO

#include <stdio.h>
#include <stdlib.h>

#endif // STDIO

#if !defined(BITWISE)
#define BITWISE

#include "bitwise.h"

#endif // BITWISE



int* intob(int decimal, int* buffer, int num_max_elements);

int* intob(int decimal, int* buffer, int num_max_elements){

    int quotient, remainder;

    //number must not be negative,
    //but we'll add a negative function soon
    quotient = abs(decimal);

    //This sets up cases for 0, 1, and 2
    //These numbers are special cases as 
    //integer division by 2 won't work
    //plus handles beginning everything three and greater
    if(abs(quotient%2)){
        //if decimal is odd, there will be
        //a 1 on the right
        push(1, buffer, num_max_elements);

    }else{
        //if decimal is even, there will be a
        //zero on the right
        push(0, buffer, num_max_elements);
    }

    //main loop
    //as long as there is a leftover quotient,
    //we keep going
    //every time there is a remainder, we push 1
    //else 0.
    //Seems wrong, but it does work, probably
    //because of the initial calc done above.
    while(quotient > 0){
        quotient = quotient/2;
        remainder = quotient%2;
        
        if(remainder){
            push(1, buffer, num_max_elements);
        }else{
            push(0, buffer, num_max_elements);
        }
    }

    return buffer;
}



