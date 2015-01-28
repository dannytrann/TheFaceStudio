'use strict';

describe('myApp.gallery module', function() {

  beforeEach(module('myApp.gallery'));

  describe('gallery controller', function(){

    it('should display nothing', inject(function($controller) {
      //spec body
        var test = 1
        expect(test).toBe(2);
    }));

  });
});