//contains all functions needed for conversion,
//creation, display

#if !defined(STDIO)
#define STDIO

#include <stdio.h>
#include <stdlib.h>

#endif // STDIO

#define MAX_ELEMENTS 2048

void array_init(int* buffer);
int* push(int a, int* buffer, int num_max_elements);
void print_array(int* buffer);


void array_init(int* buffer){
    //pretty simple, set first element to end value
    buffer[0] = -1;
}

//push to stack method
//in an effort to keep memory safe,
//I am requiring a max element number
//be passed in as a value to a push.
int* push(int a, int* buffer, int num_max_elements){

    int i, last_i;

    //get index of last element in array
    for(i=0; i < num_max_elements - 1; i++){
        if(buffer[i] == -1){
            last_i = i;
        }
        if(buffer[i] == -1){
            //move -1 up 1 element
            //before leaving
            buffer[i + 1] == -1;
            break;
        }
    }

    //we now know last element number
    //so we start at one past that,
    //move each element up 1 and
    //set element 0 to appended value
    for(i = last_i + 1; i > 0; i--){
        buffer[i] = buffer[i - 1];
    }
    buffer[0] = a;

    return buffer;
}


//print stack method
void print_array(int* buffer){
    int i;
    
    //there is no method to know the 
    //true length of a basic malloc'ed 
    //array.  My marker for this, since
    //i am not writing any negative numbers
    //to the array, is to add a -1 at the
    //end of the array.
    //finding -1 one means i am at the end.
    for (i = 0; buffer[i] != -1; i++) {
            printf("%d", buffer[i]);
        }
        printf("%c", '\n');
}

