#function to calculate matchsticks
def matchhouses(step):
    if step < 1:
        return 0
    elif step == 1:
        return 6
    else:
        return 6 + ((step - 1) * 5)

#get number of matchstick houses 
numHouses = input("Enter a number of matchstick houses: ")

#python print has issues
# input only gets strings
# so wrapping numHouses with int(), gets us the integer
# print cannot concat int and str wit +
# it thinks you are trying to add, so it errors
# wrapping function that returns an int with
# str() turns it back into a string to concat
print(numHouses + " of matchstick houses requires " + str(matchhouses(int(numHouses)))+ " of matches.")

