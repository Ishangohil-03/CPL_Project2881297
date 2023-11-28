Progamming Language Used:

Python 
JavaScript

Major Difference in the Programming Languages:

1 - Garbage Colletion Method 

In python :
Python captures garbage by using a cycle detector in conjunction with reference counting.

In python we have 2 methods for garbage collection 

    1. Reference Counting method
    Python keeps track of how many references there are to every object.
    An object can be freed from memory usage as soon as its reference count reaches zero, meaning there are no references pointing to it.

    2. Cycle Detector method
    Python includes a cycle detector in addition to reference counting, which finds and gathers objects that are part of reference cycles, or circular references, that reference one another and keep their reference counts from going to zero.
    Such cycles are recognised by the cycle detector, which then interrupts them to release the related memory.

In JavaScript :
For JavaScript we have also have 2 method however, the main source of dependency is the Mark and sweep method.

    1. Mark-and-Sweep method   
    The two primary stages of the Mark-and-Sweep algorithm are marking and sweeping.
    Marking Phase: All reachable objects are marked by the algorithm as it traverses the object network, beginning with known root objects (global variables, local variables, etc.). Objects that were not marked during the marking phase are dealt with (sweeps) by deallocating (sweeping) the memory that they occupied, meaning that they are unreachable and may be safely reclaimed. This process is known as the sweeping phase.

    2. Generational Garbage Method
    Generational garbage collection, which divides objects into two or more generations (young and old), is a common feature of modern JavaScript engines. Items that make it through several garbage collection cycles are given preference to earlier generations. There is a greater tendency to collect younger generations compared to older generations.

2 - Different Programming Paradigm

Python is an Object Oriented Programming Langugage. 

Object Oriented Programming Langugage organizes code into objects, which are instances of classes that encapsulates both data and methods to operate on that data.

It also supports working with objects and allows polymorphism 

OOP offers information hiding, reusability, and modularity—the division of programmes into smaller, functionally independent modules.  Encourages maintainability and reuse. Reusability has two characteristics:  Pre-made, reusable software created as class libraries; and class templates organised hierarchically Information concealing prevents implementation specifics from being seen. Modules are divided into public and private sections.  Only areas visible to the public

JavaScript is a Functional Programming Paradigm

It treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. 

Functional programming has good support in JavaScript. Functions can be assigned to variables, supplied as arguments, and returned as values because they are first-class citizens. Higher-order functions and closures are essential ideas in JavaScript functional programming.

It also provide in-built functions like 'maps', 'filters', 'reduce' that can be used in arrays.

3 - Parameter Passing Method

Python:

    In python we have the Call by Object Reference method
    Call by Object Reference: Python makes advantage of a feature that is frequently called "call by object reference" or "call by sharing." The references to objects are supplied to a function when it is called. The original objects are impacted by modifications made to the objects inside the method.

JavaScript:

    JavaScript employs two different methods for passing data: pass by reference for objects and pass by value for primitive types like strings and integers. It's crucial to remember that the reference—rather than the actual object—is what is passed by reference. The original reference is unaffected by modifications made to the reference inside the function.

Parameter Passing used in the Code:

Parameter Passing used in code for JavaScript in BinarySearch.js file

BinarySearch function:

Contacts (an array of objects) and targetName (a string) are the parameters.
References to the original array (contacts) and the string (targetName) are supplied when invoking this function.
The array is subjected to a binary search within the function, thus any modifications made there (such as sorting) will have an impact on the original array.

PhoneBookSearch function:

Contacts (an array of objects) and targetName (a string) are the parameters.
The function uses the sort method to sort the array of contacts, which could change the original array.

ReadContactsFromCSV function:

Callback, a function, and file_path, a string, are the parameters.
The contacts array is filled by the function by reading contacts from a CSV file. Next, the callback method (callback(contacts)) receives the array.


Parameters used in Python Code in the BinarySearch.py file

binary_search Method:

Target_name (string) and contacts (list of dictionaries) are the parameters.
The original contact list is referenced by the contacts argument. The original list will be impacted by any changes made to the list within the function.
Since the target_name parameter is an immutable string, it is supplied by value.

Function of phone_book_search:

Target_name (string) and contacts (list of dictionaries) are the parameters.
Once more, the contacts argument refers to the initial list. Due of the mutability of lists, the function modifies the original list while sorting this list in place using the sort method.

The function read_contacts_from_csv

File_path is a parameter (string).
The value is supplied to the file_path parameter.

User Input:

Through the usage of the input function, search_name is acquired from user input. Value is used to pass this variable.