#!/usr/bin/python

#I want these declared beforehand
totalhits = 0
totalbats = 0

#required to be declared, don't know why
idx = 0

print("Project Batter's Average Calculator")
numgames = input("Enter the number of games: ")

#input returns a string, not a number
while idx < int(numgames):
    #can't print numbers, only strings
    #which game are we entering for?
    print("Game: "+str(idx+1))

    #Get hits from user
    hits = input("Enter number of hits: ")

    #make sure we didn't get an empty string
    #before doing math
    if hits != "":
        totalhits += int(hits)
    else:
        #if we did, use 0 and warn user
        totalhits += 0
        print("Input problem, average might be wrong")
    
    #get at bats, check the same things
    atbats = input("Enter number of at bats: ")
    
    if atbats != "":
        totalbats += int(atbats)
    else:
        totalbats += 0
        print("Input problem, average might be wrong.")

    #add 1 to index cause 
    #python don't got a real for loop
    idx += 1

#if we get here and any totals are zero,
#don't do the math
if totalhits == 0 or totalbats == 0:
    print("Can't calculate average")
else:
    #if this worked,
    #the f'{ }' construct ensures 3 decimal places
    #for a batter's average,
    #the replace skims leading 0
    print("The batter's average from "+numgames+" games is: "+str(f'{float(totalhits)/float(totalbats):.3f}').replace("0.","."))
