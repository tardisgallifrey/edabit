def bitwiseAND(a, b):
    return a & b

def bitwiseOR(a, b):
    return a | b

def bitwiseXOR(a, b):
    return a ^ b


print("A bitwise challenge for Python")

a = int(input("Enter a number: "))
b = int(input("Enter another number: "))

print("bitwise AND results:", bitwiseAND(a, b))
print("bitwise OR results:", bitwiseOR(a, b))
print("bitwiseXOR results:", bitwiseXOR(a, b))