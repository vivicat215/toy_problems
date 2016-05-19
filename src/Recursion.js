
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// REPLACE KEYS IN OBJECT
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Tags: objects, recursion, higher order functions

// Write a function which takes an object and returns the same object with newKey
// replacing each instance of key in the object.

var replaceKeysInObj = function (obj, key, newKey) {

}

// var x = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'}
// replaceKeysInObj(x, 'e', 'f') => {'f': {'x': 'y'}, 't':{'r': {'f':'r'}, 'p': {'y':'r'}}, 'y':'e'}


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// LOCATE
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Write a function locate() that takes a value and an array and returns a Boolean 
// value indicating whether it can be found in a multi-dimentional array.

function locate(array, value){


}

// ray1 = [1,2,3,[4,5,[6,7,'a']]];
// ray2 = [1,[3,['a'],3],6,66,666];
// ray3 = [[[['a'],4]],6];

// locate(ray1,'a'));  =>  true
// locate(ray2,'b'); =>  false


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// BINARY SEARCH ARRAY
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Given a sorted array of numbers in ascending order
// Return index of 2nd argument num
// If num is not in array, return -1
// Implement using binary search and recursion

var binarySearchArray = function(array, num) {
/// YOUR CODE HERE

};


var sortedArray = [39, 41, 42, 43, 44, 45, 50, 52, 53, 63, 74, 77, 78, 83, 93];

// sorted(sortedArray, 63);
// => 9

// sorted(sortedArray, 10);
// => -1


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
////// CHESS BOARD
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Write a program that creates a string which represents
// a grid, given a row/column size.  There are alternating 
// spaces and "#" characters at each position of the grid 
// to form a chess board. If size isn't provided, assume a 
// standard chess board (8x8). Invalid entries return -1.

var chessBoard = function(size) {
/// YOUR CODE HERE

};


var board = chessBoard(8);
// board === ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n'
// console.log(board) 
// => (see below)

