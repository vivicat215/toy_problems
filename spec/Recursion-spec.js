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

});
