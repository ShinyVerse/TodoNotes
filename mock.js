(function(exports) {
  class Mock {
   constructor(name, methods = []) {
     this.name = name
     this.list = {}
     for (var i = 0; i < methods.length; i++) {
       this.list[methods[i][0]] = methods[i][1];
     }
      return this.list;
   }
  }

  exports.Mock = Mock;
})(this)
// To make a new mock
// let a = new Mock('double', [['name1','answer1'],['name2','answer2']])
