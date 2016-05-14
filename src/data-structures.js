

///--------------------------------------------------------
///--------------------------------------------------------
/// BALANCED PARENTHESES (USING STACKS)
///--------------------------------------------------------
///-------------------------------------------------------
/// Tags: Data structures, stacks, arrays
///
/// Description: Given a string of parentheses and brackets, determine if the parentheses are balanced
/// Balanced is having both an open '(' and closing ')' parentheses.
/// Assume first paren is open.
/// Must use Stack class implementation to solve - do not use array methods
///
// balancedParens('{(())'); // false
// balancedParens('{(())}'); // true
// balancedParens('))(('); // false
// balancedParens('[][](())'); // true
///
///--------------------------------------------------------
/// ABSTRACT IMPLEMENTATION OF A STACK W/O ARRAY METHODS
///--------------------------------------------------------
///
/// Use to solve Balanced Parens

var Stack = function() {
  this.dataStore = [];
  this.top = 0;
};

Stack.prototype = (function(){
  var push = function(element) {
  	this.dataStore[this.top++] = element;
  };

  var pop = function() {
  	var popped = null;
  	if (this.top > 0) {
  	  popped = this.dataStore[--this.top];
  	  delete this.dataStore[this.top];
  	}
  	return popped;
  };

  var peek = function() {
    return this.top > 0 ? this.dataStore[this.top-1] : null;
  };

  var length = function() {
  	return this.top;
  };

  var clear = function() {
  	this.top = 0;
  	this.dataStore = [];
  };

  var isEmpty = function() {
    return this.top < 1;
  };

  return {
    constructor: Stack,
    push: push,
    pop: pop,
    peek: peek,
    length: length,
    clear: clear,
    isEmpty: isEmpty
  };
})();

///--------------------------------------------------------
/// START HERE: Use Stack class to solve balancedParens()
///--------------------------------------------------------

var balancedParens = function(parenString) {
/// YOUR CODE HERE

};
