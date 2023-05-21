#include <stdio.h>

int matchHouses(int step);

int main(void){

	int numHouses=0;
	printf("Enter a number of matchstick houses: ");
	scanf("%d", &numHouses);
    printf("Matches for 4 houses: %d\n", matchHouses(numHouses));

    return 0;
}

int matchHouses(int step) {
	/* first house has six matches*/
	int firsthouse = 6;

	/* all other houses have five */
	int otherhouse = 5;
	if(step < 1){
		return 0;
	} else if (step == 1)
	{
		return firsthouse;
	}else{
		int others = (step - 1) * 5;
		return others + firsthouse;
	}
}