## WEEK 4 Memory

#### Hexadecimal
Computer memory uses hexadecimal for each address or location

#### Addresses
- `&`operator : get the address of this variable
- `*`operator : let us "go to" the location that a pointer is pointing to
- Moder computer systems are **64-bit**, meaning that they use 64 bits to address memory
- pointer => 8bytes, integer => 4bytes 

#### Pointers
A variable that stores an address is called a **pointer**

#### Segmentation fault
Is caused by a program trying to read or write an illegal memory location(which wasn't located as a memory before)

#### malloc()
Allocates some number of bytes in memory 

#### valgrind
A command-line tool that we can use to run our program and see if it has any memory leaks, or memory we've allocated without freeing

#### Memory layout
![alt text](https://cs50.harvard.edu/x/2021/notes/4/memory_layout.png)
- machine code
<br>Our compiled program's binary code
- globals
<br>glovbal variables we declare in our program
- heap
<br>an empty area from where `malloc` can get free memory for our program to use
- stack
<br>It is used by function in our program as they are called, and grows upwards

#### Overflow
- heap overflow
<br>If we call `malloc` for too much memory
- stack overflow
<br>If we call too many functions without returning from them, where our stack has too much memory allocated

#### Words
- decimal 십진법의
- octal 팔진법
- hexadecimal 십육진법의 
