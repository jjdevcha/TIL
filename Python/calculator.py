def is_number(inp):
    if inp.replace(".", "").isnumeric():
        return True
    else:
        return False

num1 = ""
op = ""
num2 = ""

while not(is_number(num1)):
    num1 = input("Enter the first number: ")

while op != "+" and op != "-" and op != "*" and op != "/":
    op = input("Enter an operator: ")

while not(is_number(num2)):
    num2 = input("Enter the second number: ")

num1 = float(num1)
num2 = float(num2)

if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    print(num1 / num2)
else:
    print("Invalid operator")



