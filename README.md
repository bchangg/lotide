# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Assertion function to see if two arrays are exactly equal to each other
* `assertEqual`: Assertion function to see if two values are equal (primitive type test)
* `assertObjectsEqual`: Assertion function to see if two objects are exactly equal
* `countLetters`: Function returns an object that counts how many times each letter has appeared in a string
* `countOnly`: Function takes in two parameters: one for all items to be checked, and one for what you want to check. Returns an object that counts how many times items in the second array have appeared in the first
* `eqArrays`: Comparison function that returns true if the two arrays given are equal, and false otherwise
* `eqObjects`: Comparison function that returns true if the two objects given are exactly equal, and false otherwise
* `findKey`: Function takes in a value and returns the key of said value
* `findKeyByValue`: Function takes in an object and a value, and returns the key of said value
* `flatten`: Function removes all the arrays inside the given array and returns flattened array
* `head`: Function takes in an array and returns the first item in the array
* `letterPositions`: Function takes in a string and returns an object with how many times each character appears in the string
* `map`: Function takes in an array and a callback function, and returns a mutated array based on the user's given callback function
* `middle`: Function takes in an array and returns an array of values of the index(es) in the middle. [1,2,3] => [2]. [1,2,3,4] => [2,3]
* `tail`: Function takes in an array and returns an array of everything except the first value
* `takeUntil`: Function takes in an array and a callback function, and returns an array filled with the results from the user's given function
* `without`: Function takes in an array to look through and an array of items to exclude, and returns an array filled without the values in the forRemoval array
