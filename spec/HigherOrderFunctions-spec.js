describe("FUN WITH HIGHER ORDER FUNCTIONS!", function() {

  describe("ARRAY OF OBJECTS", function() {
    var people = [
      {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, gender:'female', age: 26},
      {name: {first: "Ben", last: "Bitdiddle"}, gender:'male', age: 34},
      {name: {first: "Eva", middle: "Lu", last: "Ator"}, gender:'female', age: 40},
      {name: {first: "Lem", middle: "E.", last: "Tweakit"}, gender:'male', age: 45},
      {name: {first: "Louis", last: "Reasoner"}, gender:'male', age: 21}
    ];

    describe("Average Age", function() {

    });

    describe("Sum of Men", function() {

    });

    describe("Over 35", function() {

    });

    describe("Last Name", function() {

    });

    describe("Feamle Name Length", function() {

    });

    describe("Female Under 37", function() {

    });
  });

  describe("OBJECT SOME", function() {
    var obj1 = [
      { "a": 1, "b": 2 },
      { "a": 1 },
      { "a": 1, "b": 2, "c": 2 }
    ];

    var obj2 = [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ];

    it("should return an array", function() {
      expect(Array.isArray(objectSome(obj1, { "a": 1, "c": 2 }))).toEqual(true);
    });

    it("should return array of all objects with matching key value pairs", function() {
      expect(objectSome(obj1, { "a": 1, "c": 2 })).toEqual([{ "a": 1, "b": 2, "c": 2 }]);
      expect(objectSome(obj2, { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }]);
    });
  });

  describe("LARGEST NUMS", function() {
    it("should return an array of largest numbers per array element", function() {
      expect(largestNums([[4, 5, 1, 3, 10, 100], [13, 27, 18, 26], [32, 35, 37, 50, 39], [1000, 1001]])).toEqual([100, 27, 50, 1001]);
      expect(largestNums([[-2, 5, 6, 9], [2, 3, 1], [0, 5]])).toEqual([9, 3, 5]);
      expect(largestNums([[-2, -5, -1], [-2, -3, -1], [-6, -5]])).toEqual([-1, -1, -5]);
      expect(largestNums([[5], [6], [7], [8]])).toEqual([5, 6, 7, 8]);
    });

    it("should return null for empty arrays", function() {
      expect(largestNums([[], [2, 3, 1], [0]])).toEqual([ null, 3, 0 ]);
      expect(largestNums([])).toEqual(null);
    });
  });

  describe("DESTROYER", function() {
    it("should take any number of arguments and return destroyed array", function() {
      expect(destroyer([5, 0, 5, 1, 2, 10, 6, 6, 3, 5], 5, 6, 10)).toEqual([0, 1, 2, 3]);
      expect(destroyer([1, 2, 3, 1, 2, 3], 3, 2)).toEqual([1, 1]);
      expect(destroyer([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("should return original array if does not contain 'destroyer' numbers", function() {
      expect(destroyer(destroyer([1, 2, 3], 5, 6, 10))).toEqual([1, 2, 3]);
    });

    it("should return empty array if all elements are destroyed", function() {
      expect(destroyer(destroyer([1, 2, 3], 1, 2, 3))).toEqual([]);
    });
  });

});
