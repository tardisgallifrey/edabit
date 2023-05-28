#include <stdio.h>
#include <stdlib.h>

#if !defined(BITWISE)
#define BITWISE

#include "bitwise.h"

#endif // BITWISE

#include "conversions.h"

int main()
{
    //malloc and pointers rehash:
    //this: *p points to what is located at &p
    //this: p is &p (address of p)
    //malloc *p points to first element stored at &p
    //p + 1 is next address

 
    // This pointer will hold the
    // base address of the block created
    int* ptr;
    int n, i;
 
    // Get the number of elements for the array
    printf("Enter a decimal number:");
    scanf("%d",&n);
    if(n >= MAX_ELEMENTS){
        printf("Your requested array size is too large.\n");
        exit(0);
    }
 
    // Dynamically allocate memory using malloc()
    //This says:
    // ptr now points to a block of integers
    //that is 2kilobytes in size.
    //contents are unknown
    ptr = (int*)malloc(MAX_ELEMENTS * sizeof(int));
    array_init(ptr);

    // Check if the memory has been successfully
    // allocated by malloc or not
    if (ptr == NULL) {
        printf("Memory not allocated.\n");
        exit(0);
    }else {
        //convert to binary
        intob(n, ptr, MAX_ELEMENTS);

        //print it out
        print_array(ptr);
        
    }
    
    free(ptr);
    return 0;
}

