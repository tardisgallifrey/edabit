#include <stdio.h>
#include <stdlib.h>

//declare batting average function
void battingAvg(int *series, int length);

int main(int argc, char *argv[]){

    //initialize series at three
    int length = 3;

    //initialize pointer to array area of mem for series
    //length is times six, because strange things happened
    //at length * 2, which was logical
    int *series = (int*)malloc( (length * 6) * sizeof(int));
    
    //convert argv string to pointer to arg character
    //If I'm using argv, which is a pointer,
    //then I have to make numgames a pointer.
    //Might could cast it someway, but why?
    //One prob, this clamps you to 9 games
    //because it snags only character zero in the string.
    char *numgames = argv[1];

    //If there is a command line value of games,
    //convert it to a number
    if(argc > 1){
        
        //This converts the char to an int
        length = *numgames - '0';
    }

    printf("C version of batting average\n");

    //get inital input for game/hits series
    //I could do more input checking, but that 
    //would require getting the input and converting
    //If user enters a char, the program stops.
    for(int i = 0; i < length; i++ ){
        printf("Enter hits for game %d: ", i + 1);
        scanf("%d", &series[i]);
        printf("Enter at bats for game %d: ", i + 1);
        scanf("%d", &series[i + length]);
    }

    //With our array full, call the function
    //Because we made our array of variable size,
    //length is needed.
    battingAvg(series, length);

    //Free the allocated memory
    free(series);


}


//The batting average function
//The only difference is I don't convert
//the average to a string; not easy in C
void battingAvg(int *series, int length){

    //initialize variables needed
    int hits=0;
    int atbats=0;
    float average = 0.0;

    //read the array for hits and at bats
    //create a total for each
    for(int i = 0; i < length; i++){
        
        hits += series[i];
        atbats += series[i + length];
        //printf("%d, %d\n", series[i],series[i+length]);
        
    }
    
    //print average, hits and at bats.
    //convert ints to floats before calculating
    //C is really picky about that.
    printf("Average: %.3f, %d hits, %d at bats.\n", (float)hits/(float)atbats, hits, atbats);
}