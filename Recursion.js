var each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

var reduce = function(collection, iterator, accumulator) {
    var initializer = arguments.length === 2;

    each(collection, function(value, idxOrKey) {
      if (initializer) {
        accumulator = value;
        initializer = false;
      } else {
        accumulator = iterator(accumulator, value, idxOrKey);
      }
    });

    return accumulator;
  };


  // printOdds
// var x = {a: 6, b: 33, c: 12, d: 3};
// // => [33, 3]

function printOdds(obj) {
  return reduce(obj, function(prev, cur) {
     (cur % 2 !== 0) ? prev.push(cur) : prev
     return prev;
  }, []);
}



var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
replaceKeysInObj(input, 'e', 'f');
var output2 = replaceKeysInObj(output1, 'e', 'f');
expect(tallyKeys(input)).to.equal(8);
expect(tallyKeys(output1)).to.equal(8);
expect(tallyKeys(output2)).to.equal(8);
*/

var replaceKeysInObj = function (obj, key, newKey) {
  return reduce(obj, function(memo, cur, curKey) {
    
    if (curKey === key) {
      var placeholder = newKey;
      
      (typeof cur === 'object') ?
        memo[placeholder] = replaceKeysInObj(cur, key, newKey); :
        memo[placeholder] = cur
      
    }
    else {
      (typeof cur === 'object') ?
        memo[curKey] = replaceKeysInObj(cur, key, newKey) : 
        memo[curKey] = cur
    }
  return memo;
  }, {});
}








