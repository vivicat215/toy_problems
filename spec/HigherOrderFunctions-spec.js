describe("Higher Order Functions", function() {

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
});
