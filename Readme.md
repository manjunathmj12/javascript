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

# day 4

- data types
  - const ( use most of the time)
  - let
  - var
- basic operators
- operator precedence

# day 5

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

# day 6

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

# day 7

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

# day 8

- prettier setup
- installing node js and setting up
- live server set up
- how to code
- using google and stackoverflow when we got stuck
- debugging with the console

# day 9

- basic html structure
- attributes
- different types of selectors
  - elements
  - classes
  - id
- intro to css
- basic properties of css
- box model

# day 10

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

# day 11

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
