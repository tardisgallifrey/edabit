#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int addup(int number);

int main(int argc, char *argv[]){

    int num1;

    printf("A C program for the addup challenge.\n");
    printf("Enter a number: ");
    scanf("%d", &num1);

    if( addup(num1) != -1){
        printf("The sum of all the numbers to %d is %d\n", num1, addup(num1));
    } else {
        printf("There was an error.\n");
    }
    return 0;

}

int addup(int number){

    int answer=0;

    if(number > 0 && number < 1001){

        for(int i=1; i <= number; i++){
            answer += i;
        }
        return answer;

    }else{
        return -1;
    }
}