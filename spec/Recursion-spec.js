describe("RECURSION, RECURSION, RECURSION", function() {

  describe("REPLACE KEYS", function() {
  	var x = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'}

    it("should replace keys", function() {
      expect(replaceKeysInObj(x, 'e', 'f')).toEqual({'f': {'x': 'y'}, 't':{'r': {'f':'r'}, 'p': {'y':'r'}}, 'y':'e'});
    });
    it("should not replace any keys if no newKey is given", function() {
      expect(replaceKeysInObj(x, 'e')).toEqual(x);
    });
    
  });

  describe("LOCATE", function() {
    
    ray1 = [1,2,3,[4,5,[6,7,'a']]];
    ray2 = [1,[3,['a'],3],6,66,666];
    ray3 = [[[['a'],4]],6];

    it("should return a Boolean", function() {
      expect(typeof(locate(ray1,'a')).toEqual('boolean');
    });

    it("should check whether a value is located in nested array", function() {
      expect(locate(ray1,'a')).toEqual(true);
      expect(locate(ray2,'b')).toEqual(false);
    });
    
  });

  describe("BINARY SEARCH ARRAY", function() {

  	var sortedArray = [39, 41, 42, 43, 44, 45, 50, 52, 53, 63, 74, 77, 78, 83, 93];

    it("should return a number", function() {
      expect(typeof(binarySearchArray([2, 3], 0)).toEqual('number');
    });

    it("should return correct index of number", function() {
      expect(binarySearchArray(sortedArray, 44)).toEqual(4);
      expect(binarySearchArray(sortedArray, 39)).toEqual(0);
    });

    it("should return -1 when number not found", function() {
      expect(binarySearchArray(sortedArray, 10)).toEqual(-1);
      expect(binarySearchArray([]], 10)).toEqual(-1);
    });

  });

});
