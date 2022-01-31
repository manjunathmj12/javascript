# day 1

- setting up the vs code
- first small program
  - `hello world`
- brief intro to javscript
- ways to link javascript
  - inside html
  - separate file
    - using `script` tag
- values and variables

# day 5

- data types
  - const ( use most of the time)
  - let
  - var
- basic operators
- operator precedence

# day 6

- template literal
- type conversion and coercion
- number() function
- NAN
- truthy and falsy values
- equality
- prompt
- if
- else if
- logical operators

# day 7

- evolution if javascript
  - different developement in different years
  - babel
- strict mode
  `'use strict';`
- **functions**
  - function are created to perform seom specific task
  - it is used to repeat an set of instruction
- **different types of functions**
  - function declarations
    - normal function
  - function expressions
    - anonymous function which doesn't need name
  - arrow functions
    - drawback is this keyword cannot be used
- calling functions
- nested functions
- **ARRAY**
- declarations of array
  - normal declarations [ ]
  - using new Array();
- retreving elements in an array
- functions of arrays
  - adding elements into the array
    - push () - enters the elements at the end of the array
    - unshift() - enter the elements at the beginning of an array
  - removing elements into the array
    - pop() - it removes last element in an array
    - shift() - it removes beginning element in an array
  - accessiing the elements of an array
    - index of ()
  - includes - check whether the element is present in an list or not.

# day 8

- **objects**
  - a objects is a collection of named values
  - object is a entity with property and value
- retrieving objects
  - using dot operator
    - `{object.property}`
  - using square braket
    - `{object[property]}`
- adding elements into the objects
- objects methods (anonymous function)
- this keyword
  - this keyword is used to refer or access to the current objects variables
  - this basically refers to the object called before the dot opertor`(.)`
- **loops**
- **for loop**
  - executes a block of code until the condition is true
- adding elements into array using for loop
- continue and break
  - continue
    - it exits from the current iterations
  - break
    - it exits from the loop
- reverse a array using for loop
- nested loops(loop inside another loop)
- **while loop**
  - used to repeat a specific block of code an unknown number of times
- random function
- trunc function

# day 9

- prettier setup
- installing node js and setting up
- live server set up
- how to code
- using google and stackoverflow when we got stuck
- debugging with the console

# day 10

- basic html structure
- attributes
- different types of selectors
  - elements
  - classes
  - id
- intro to css
- basic properties of css
- box model

# day 11

- **DOM**
  - (Document Object Model)which allows the javscript to acces n manipulate the html and css
- selecting the elements
  - using the html elements
  - using class name
    - `document.querySelector('.classname');`
  - using id name
    - `document.querySelector('#idname');`
- storing the value in variables
- changing the value and textcontent
- `.addEventListener('events')`
  - used to add events to the elements
- random fucntion
  - `Math.random()*upperLimit + 1`
- manipulating the css

# day 12

- refactoring the code ( DRY principle)
- model window
  - pop up window
- storing the elements into a variables
- `.querySelectorAll(' ');`
- class list
  - it can change the classes of a particular element in html
  - types of class list functions
    - remove()
    - add()
    - contains()
- creating separate functions and calling inside parameter of a listener
- **KEY BOARD EVENTS**
  - its activated whenever the any key is pressed
  - types of key board events are
    - key press
    - key up
    - key down
- `function(e)`

# day 13

### javscript definition

- hign level
  - do not need to manage everything eg:allocating memory
- garbage collected
  - javscript cleans the memory itself no need do manually
- just in time complied or interpreted
  - program is converted into machine code
- multi-paradigm
  - its structuring code which will direct your coding style
- prototype based object oriented
  - its an object(array)which is matched an the functions of array can be used
- first class functions
  - the functins can be passed as an arguement in another function
  - eg: passing function in an `eventListener`
- dynamic
  - no need to define the type of data , can change the type later in the program
- single thread
  - it can do only one thing at a time
- non blocking event loop
  - executes in background after executed puts back into threads

---

- js run time
  - it runs in the browser
  - js engine
  - it contains
    - CALL STACK
    - HEAP
- web APIs
  - dom
  - api
  - timers
- call back queue
- compliation vs interpretation
  - compilation
    - code is converted into machine code n then executed by a computer
  - interpretation
    - code is executed line by line
  - jit
    - code is converted into machine at once and then executed
- call back queue
  - click
  - timer
  - data
- execution context
  - global
  - top level code
  - call back functions
- variable environment
- **CALL STACK**
  - global
  - first
  - second

# day 14

- scope concepts
- scoping
  - how a variable is accessed (visibility) and organized.
- scope
  - its an environment where the variable is declared
  - global scope
  - function scope
  - block scope
- **lexical scoping**
  - its a rule , where we can access the code based on where exactly code or block is written
- global
  - global variables
- function scope
  - local variable
  - var are function scope
- block scope
  - accessible inside an block
  - let and const , functions are also block when we use strict mode
- variable look up
- scope chain
  - it has access to all outer scope
  - its always top wards, calling function does not effect it
- scope chain vs call stack
- hoisting
  - it makes variable accessed before its declared or initialized
  - function hoisting
    - actual function
  - var variables
    - undefined
  - let and const
    - error uninitialized
  - function expressions and arrow
    -it depends on var or let/const
- TDZ (Temporal Dead Zone)
  - let and const accessed before initialized we get error becuse of this tdz
- this keyword
  - it refers to the owner of the method
  - it depend on how the function is called
  - funtion declaration
  - simple function call
  - arrow functions
  - event listener
  - new,call,apply,bind

# day 15

- regular functions vs arrow functions
  - regular - it can have this keyword
  - arrow - it doesnt have this keyword
    - it point to the parent for this keyword
- arguements
  - regular has it
  - arrow doesnt have it
- primitive(primitive types) vs object(reference types)
  - primitive is stored in call stack
    - it creates a separate variable as we change the values
  - reference is stored in heap
    - it points to same values even if we copy and change the copied value
- `object.assign({},copying_object)`
  - it copies the value from one object to another
  - it created a normal copy not in-depth copy
  - it doesnt create a new copy to the nested objects
-
