---
slug: "/fp-md"
date: "2022-12-01"
title: "fp-md"
---
# **FUNCTIONAL PROGRAMMING**

## What is Functional Programming
- Basic Concept - Divide states and actions clearly
- Functional programming (also called FP) is a way of thinking about software construction by creating pure functions. It avoid concepts of shared state, mutable data observed in Object Oriented Programming.
- Declarative style instead of Imperative style - Declare what it does instead of stating each step by step
- You architect your software out of pure, isolated functions
- You avoid mutability and side-effects
- Taking Input -> Giving Output

## Why Functional Programming
- Intentions are clearly expressed in each code block
- Increased usability
- Easier to execute Unit testing and debug
- Tends to be easier to reuse between applications

# Functional Programming Paradigm

## **a. Pure Functions**

1. Pure function
    1. A pure function is one whose results are dependent only upon the input parameters, and whose operation initiates no side effect (implicit inputs or outputs), that is, makes no external impact besides the return value. The beauty of a pure function is in its architectural simplicity. Because a pure function is reduced to only the arguments and return value (that is, its API), it can be seen as a complexity dead end: Its only interaction with the external system in which it operates is via the defined API.
    
    2. Pure function example
    Pure functions act on their parameters. It is not efficient if not returning anything. Moreover, it offers the same output for the given parameters

        Example:

        ```ts
        // Pure function whose inputs are declared as inputs. Outputs also declared as outputs.

        function add(a,b)
        {
            return a+b;
        }
        ```

    3. Impure functions example (function with side effects)
    Impure functions exactly in the opposite of pure. Impure functions cannot be used or tested in isolation as they have dependencies.

        Example:

        ```ts
        // Impure functions have hidden inputs or outputs

        let globalList = [];
        function appendToList(x)
        {
            globalList.append(x);
        }
        ```


    4. To solve the above impure function, being honest about what the function takes as an input.

        ```ts
        let globalList = [];
        function appendToList(x, someList){
            someList.append(x);
        }

        appendToList(1, globalList);
        appendToList(2, globalList);
        ```

## **b. Higher-order functions**

1. First-class functions
    1. Beyond the pure function ideal, in actual coding practice functional programming hinges on first class functions. A first class function is a function that is treated as a “thing in itself,” capable of standing alone and being treated independently. Functional programming seeks to take advantage of language support in using functions as variables, arguments, and return values to create elegant code.

    2. Another way to describe first class functions is functions as data. That is to say, a first class function can be assigned to a variable like any other data. When you write let myFunc = function(){} you are using a function as data.

    3. functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
    JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

    Example:
    
    ```ts
    const Arithmetics = {
        add:(a, b) => {
            return `${a} + ${b} = ${a+b}`;
        },
        subtract:(a, b) => {
            return `${a} - ${b} = ${a-b}`
        },
        multiply:(a, b) => {
            return `${a} * ${b} = ${a*b}`
        },
        division:(a, b) => {
            if(b!=0) return `${a} / ${b} = ${a/b}`;
            return `Cannot Divide by Zero!!!`;
        }

    }
    console.log(Arithmetics.add(100, 100));
    console.log(Arithmetics.subtract(100, 7));
    console.log(Arithmetics.multiply(5, 5));
    console.log(Arithmetics.division(100, 5));
    ```

2. Higher-class function
    1. Higher-order funtions
        - A function that accepts a function as an argument, or returns a function, is known as a higher-order function — a function that operates upon a function.
        Higher-order functions are only possible because of the First-class function
        

    2. A high order function is a function that can return another function, or you can pass a function as an argument
    Example:

        ```ts
        const greet = function(name){
            return function(m){

                console.log(`Hi!! ${name}, ${m}`);
            }
        }
        ```

    3. JavaScript arrow operator are designed to make it easier to define and use functions, especially inline as anonymous functions. An anonymous function is one that is defined and used without being given a reference variable.
        
        ```ts
        const laser = (intensity: number, f: Function ):string => 
            `${intensity + f()}`
            console.log(laser(2, () => ' volts!' )
        ) 

        // "2 volts!"
        ```

## **c. Map, Reduce, Filter**

To be used instead of for loop or while loop. Allow programmers to write simpler, shorter code without neccessarily needing to bother about intricacies like loops and branching. This is related to "Functional Programming" because these functions tend to be pure functions.

### MAP() Function: 
1) Replaces for and while loops
```ts
let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
arr[i] = arr[i] * 3;
}

console.log(arr); 
// [9, 12, 15, 18]
```
2) Creates a new array from calling a function for every array element
3) Calls a function once for each element in an array
4) Does not execute the function for empty elements
5) Does not change the original array

Array Sample Code:
```ts
const arr = [3, 4, 5, 6];
function multiply(element) {
    return element*3;
}

const modifiedArr = arr.map(multiply);

console.log(modifiedArr); 
// [9, 12, 15, 18]
```
Array of Object Sample Code:
```ts
const users = [
{firstName : "Susan", lastName: "Steward"},
{firstName : "Daniel", lastName: "Longbottom"},
{firstName : "Jacob", lastName: "Black"}
];

function fullName(element) {
    return `${element.firstName} ${element.lastName}`;
}

const userFullnames = users.map(fullName);

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
```

Syntax: array.map(function(currentValue, index, arr), thisValue)

- function() -> a function to be run for each array element (required)
- currentValue -> value of current element (required)
- index -> index of current element (optional)
- arr -> array of current element (optional)
- thisValue -> default value `undefined`, this value is used as `this` value (optional)

```js
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array) {
    console.log(this) // 80
    console.log(element); //2
    console.log(index); //0
    console.log(array); //[2,3,5,7]
    return element;
}, 80);

//Displaying first iteration
```

Points to note: 
- .map function goes through EVERY 👏 SINGLE 👏 ELEMENT 👏 -> cannot break out of loop
- returns a brand new array with the modified values -> duplicate every single element of array
- if have a huge collection that is memory heavy, use normal loop better
- function referred to can be reusable as several place too


### REDUCE() Function: 
1) Replaces for and while loops
```ts
const numbers = [1, 2, 3];

const sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); 
//6
```
2) Executes a reducer function for array element
3) Returns a single value: the function's accumulated result
4) Does not execute the function for empty array elements
5) Does not change the original array

Array Sample Code: 
```ts
const numbers = [1, 2, 3];

const add(previousValue, currentValue) {
    return previousValue + currentValue;
}

const sum = numbers.reduce(add, 0);

console.log(sum);
//6
```

Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

- function() -> a function to be run for each element of the array (required)
- total -> initialValue or previously returned value of function (required)
- currentValue -> value of current element (required)
- currentIndex -> index of current element (optional)
- arr -> array the current element belongs to (optional)
- initialValue -> value passed to function as initial value (optional)

**Note: reduceRight() goes in the opposite direction (starts from last element and travels backward to the first)

Points to note: 
- .reduce function goes through EVERY 👏 SINGLE 👏 ELEMENT 👏 -> cannot break out of loop
- returns a single element (not whole collection)
- the single element could also be an array, list etc. which means you can achieve `filter()` function with `reduce()`

### FILTER() Function: 
1) Replace for and while loop
2) Creates new array filled with elements that pass a test provided by a function
3) Does not execute function for empty elements
4) Does not change original array

Array Sample Code: 
```js
const ages = [32, 33, 16, 40];

function checkAdult(age) {
return age >= 18;
}

const result = ages.filter(checkAdult);

console.log(result) 
//[32, 33, 40]
```

Syntax: array.filter(function(currentValue, index, arr), thisValue)

- function() -> a function to run for each array element (required)
- currentValue -> value of current element (required) 
- index -> index of current element (optional)
- arr -> array of current element (optional)
- thisValue -> default `undefined`, passed as `this` value (optional)

Points to note: 
- .filter function goes through EVERY 👏 SINGLE 👏 ELEMENT 👏 -> cannot break out of loop
- returns a brand new array with the unfiltered values -> create another array
- if you are going to do heavy computation on every element to keep, use normal loop better

## **d. Immutability**

### Immutability
Minimize side effects through immutability. Straightforward techniques to disallow side effects (mutation):

1. Avoid mutator functions
2. Use `const` declarations instead of `let`
3. Freeze objects
4. Clone objects
5. Use getters and setters // examples to be provided
6. Use lenses to access and set attributes // examples to be provided

#### Avoid mutator functions

JavaScript mutators

1. `copyWithin()` lets you copy elements within the array.
2. `fill()` fills an array with a given value.
3. `push()` and `pop()` let you add or delete elements at the end of an array.
4. `shift()` and `unshift()` work in the same way as `push()` and `pop()`, but at the beginning of the array.
5. `splice()` lets you add or delete elements anywhere within the array.
6. `reverse()` and `sort()` modify the array in place, reversing its elements or ordering them.

```typescript
/* Example of how .sort() and .pop() mutates original array */
const array_1 = [4, 2, 1, 5, 3];

const array_2 = array_1.sort().pop();

console.log("array_1", array_1); // [1,2,3,4]
console.log("array_2", array_2); // 5
```

```typescript
/* Using .slice() or spread operator to create copies of array */
const array_1 = [4, 2, 1, 5, 3];

const array_3 = array_1.slice().sort().pop();
const array_4 = [...array_1].sort().pop();

console.log("array_1", array_1); // [4,2,1,5,3]
console.log("array_3", array_3); // 5
console.log("array_4", array_4); // 5
```

#### Use `const` declarations instead of `let`

In JavaScript, a const definition means that the reference to the object or array cannot change (you cannot assign a
different object to it) but you can still modify the properties of the object itself.

```typescript
const obj_1 = {alpha: 1, beta: 99};
console.log(obj_1); // {alpha: 1, beta: 99}

obj_1 = {alpha: 12, beta: 4}; // Uncaught TypeError: Assignment to constant variable.

obj_1.alpha = 121; // but this is fine
obj_1.beta = 7;
console.log(obj_1); // {alpha: 121, beta: 7}
```

Safe against direct assignment to objects and arrays, but changing an attribute or array element is not prevented.

#### Freeze objects

After an object has been frozen, any attempts at modifying it will silently fail — JavaScript won't report an error or
throw an exception, but it won't alter the object either. Unless written in TypeScript / "use strict", then it will
throw exception

```typescript
const obj_2 = {omega: 22, theta: 9};
Object.freeze(obj_2);

obj_2.omega = 12; // TypeError: Cannot assign to read only property 'omega' of object '#<Object>'
obj_2.theta = 4;

```

Problem: .freeze() is a _shallow_ operation that freezes the attributes. If any attributes are objects or arrays
themselves, they can still be modified.

```typescript
const obj_2 = {omega: {a: 1, b: 5}, theta: [1]};
Object.freeze(obj_2);

obj_2.omega.a = 222; // opps, this works
obj_2.theta[0] = 777; // opps this works

console.log(obj_2); // {"omega": {"a": 222, "b": 5}, "theta": 777} 
```

To make object truly immutable, recursively freeze each property which is of type object (array is also an object in JS)
. Use this on case-by-case basis.

- Avoid using on object that references itself to avoid endless loop
- Avoid using on object that shouldn't be frozen, such as [window]

```typescript
function deepFreeze(object: any) {
    const propNames = Object.getOwnPropertyNames(object);

    for (const name of propNames) {
        const value = object[name];
        if (value && typeof value === "object") {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}

const obj_2 = {omega: {a: 1, b: 5}, theta: [1]};
deepFreeze(obj_2);

obj_2.omega.a = 222; // Throw exception
obj_2.theta[0] = 777; // Throw exception
```

#### Clone objects

If mutating an object is not allowed, we can create a new object.

```typescript
/* Cloning by hand */
const oldObject = {
    d: 22,
    o: {c: "MVD", f: {a: 56}}
};

const newObject = {
    d: oldObject.d,
    o: {c: oldObject.o.c, f: {a: oldObject.o.f.a}}
};
```

```typescript
/* Shallow copy of object - lower attributes are still mutable*/
const oldObject = {
    d: 22,
    o: {c: "MVD", f: {a: 56}}
};
const newObject1 = Object.assign({}, oldObject);
const newObject2 = {...oldObject};

/* Shallow copy of array */
const oldArray = [1, 2, 3, 4];
const newArray_1 = oldArray.slice();
const newArray_2 = [...oldArray];
```

```typescript
/* Deep copy method 1 */
const oldObject = ["noodles", {"list": ["eggs", "flour", "water"]}];
const object_deepcopy_1 = JSON.parse(JSON.stringify(oldObject));
const object_deepcopy_2 = structuredClone(oldObject);

/* Deep copy method 2 */
// write custom function.....

/* Deep copy method 3 */
// Use libraries such as lodash cloneDeep, AngularJS copy, just-clone etc.
```

### More Notes

Immutable objects are objects whose state cannot be changed after declaration. If a state is changed, it makes a copy of the object then update the new one.

You can rely on triple equal “===“ to compare the memory addresses of 2 objects. If === evaluates to TRUE, then the objects are the same.

### Why Immutability

**Thread-Safety**

- In order to take advantage of your multi core CPU for fast processing, you need to parallelize your code to run it in a distributed fashion. Having immutable fields means you need not worry about parallel thread interacting with each other and changing the state of other fields.

**Time Travel Debugging**

- TTD is the process of stepping back in time through code and Immutability enhance it to have states to reason about in that process.

**No hidden side effects**

- Data won’t change behind our backs. Once verified, it will be valid indefinitely.

**Performance Boost**

- If you have an object and change one of its properties, it takes a long time to recognise that property has been changed. It needs to check all of the object properties. By Immutability, it already knows what updates are applied by a way more cheaper comparison between versions of states. 

**Isolating Failure**

- Failure can be easily identified when thread running in a critical section that access to shared state goes wrong. In the immutable state if you lose some process you just lose the state of that particular process, all other processes are not affected by.

## **e. Recursion**
- Calling the function within the function itself
- Recursion prevents mutation of state variables, so it is align with Functional Programming's "avoiding mutability"
- "Thinking" in Recursive is a good way of learning how to breakdown code logically because you are forced to trace every stack
- In real world applications however, Recursion tends to be avoided because:
    - any problem that can be solved recursively can also be solved by iteration
    - it creates substantial memory overhead as copy of variables and parameters are created
    - while it tends to be "lesser code" and more elegant, it can be difficult to understand and update

- **Concepts**:
    - **Base Case** - is the state where the program’s solution has been reached.
    - **Call Stack** - is an integrated, hidden data structure within all modern programing languages.
    - **Tail recursion** - is when the recursive call for the next cycle is the final statement in a method.

- **Code Samples**:
    <details> 
    <summary> Countdown </summary>
        
    ```ts
    function countDown(number) {

        // display the number
        console.log(number);

        // decrease the number value
        const newNumber = number - 1;

        // base case
        if (newNumber > 0) {
            countDown(newNumber);
        }
    }

    countDown(4);

    // 4
    // 3
    // 2
    // 1
    ```

    </details>
    <details> 
    <summary> Find Factorial </summary>
        
    ```ts
    // program to find the factorial of a number
    function factorial(x) {

        // if number is 0
        if (x === 0) {
            return 1;
        }

        // if number is positive
        else {
            return x * factorial(x - 1);
        }
    }

    const num = 3;

    // calling factorial() if num is non-negative
    if (num > 0) {
        let result = factorial(num);
        console.log(`The factorial of ${num} is ${result}`);
    }

    // The factorial of 3 is 6
    ```

    </details>

- **Common Use Cases**
    - Sort (MergeSort, QuickSort)
    - Search (Binary Search)

- **Relevant Topics**
    - **Time Complexity** - Time complexity is defined as the amount of time taken by an algorithm to run, as a function of the length of the input
    - **Space Complexity** - Space complexity refers to the total amount of memory space used by an algorithm/program, including the space of input values for execution.

## **f. Currying**

Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

Let’s see an example first, to better understand what we’re talking about, and then practical applications.

We’ll create a helper function curry(f) that performs currying for a two-argument f. In other words, curry(f) for two-argument f(a, b) translates it into a function that runs as f(a)(b):

```javascript
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}


let curriedSum = curry(sum);

console.log( curriedSum(1)(2) ); // 3
```

As you can see, the implementation is straightforward: it’s just two wrappers.

The result of curry(func) is a wrapper function(a).
When it is called like curriedSum(1), the argument is saved in the Lexical Environment, and a new wrapper is returned function(b).
Then this wrapper is called with 2 as an argument, and it passes the call to the original sum.

More advanced implementations of currying, such as _.curry from lodash library, return a wrapper that allows a function to be called both normally and partially:

```javascript
function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // using _.curry from lodash library

console.log( curriedSum(1, 2) ); // 3, still callable normally
console.log( curriedSum(1)(2) ); // 3, called partially
```

## Why Curry

To understand the benefits we need a worthy real-life example.

For instance, we have the logging function log(date, importance, message) that formats and outputs the information. In real projects such functions have many useful features like sending logs over the network, here we’ll just use alert:

```javascript
function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}
```

Let’s curry it!

```javascript
log = _.curry(log);
```

After that log works normally:

```javascript
log(new Date(), "DEBUG", "some debug"); // log(a, b, c)
```

…But also works in the curried form:

```javascript
log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)
```

Now we can easily make a convenience function for current logs:

```javascript
// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message
```

Now logNow is log with fixed first argument, in other words “partially applied function” or “partial” for short.

We can go further and make a convenience function for current debug logs:

```javascript
let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message
```

So:

We didn’t lose anything after currying: log is still callable normally.

We can easily generate partial functions such as for today’s logs