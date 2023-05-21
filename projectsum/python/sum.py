#define a function in python
#can't use sum, it's a built-in function
#input gets strings/characters, not numbers
#so, I am casting the params
def mysum(a, b):
    answer = int(a) + int(b)
    return answer

#The program itself
print("A python program to return")
print("the sum of two integers.")
print() #just like a newline

#get input from user as strings
a = input("Enter a number: ")
b = input("Enter another number: ")

#Note the use of comma instead of +
#plus only legal for string to string,
#but we are returning an int
#comma treats these two as separate
#things to print
print("The answer is: ", mysum(a, b))




