describe("DATA STRUCTURES", function() {

  describe("STACKS", function() {

    describe("BALANCED PARENTHESES", function() {

      it("should return a Boolean", function() {
        expect(typeof(balancedParens('[]'))).toEqual('boolean');
      });

      it ('should check for balanced parentheses', function() {
        expect(balancedParens('()')).toEqual(true);
        expect(balancedParens(')(')).toEqual(false);
        expect(balancedParens('())')).toEqual(false);
        expect(balancedParens('(')).toEqual(false);
      });

      it ('should work for brackets', function() {
        expect(balancedParens('{(())')).toEqual(false);
        expect(balancedParens('{(())}')).toEqual(true);
        expect(balancedParens('{[]}')).toEqual(true);
        expect(balancedParens('[]{}()[]')).toEqual(true);
        expect(balancedParens('][')).toEqual(false);
      });

    });
  });
});
