// circle.js

(function(exports) {
  function Circle() {
    this.radius = 10;
  };

  exports.Circle = Circle;
})(this);
//
//
// (function(exports) {
//   function assert() {
//     return {
//       isTrue: function(assertionToCheck) {
//         if (!assertionToCheck) {
//           throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//         } else {
//           return true;
//         }
//       }
//     }
//   };
//
//   exports.assert = assert
// })(this);
//
// var Note = (function(title, body) {
//   return function(){
//   return {
//     title: title,
//     body: body
//     }
//   }
// } )()
