
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`);
    } else {
      console.log(`%c Test passed! ${assertionToCheck} is true`,
                      "color: green");
    }
  },
  isSame: function(item, item2) {
    if (item !== item2) {
      throw new Error(`${item1} is not the same as ${item2}`);
    } else {
      console.log(`%c Test passed! ${item} is same as ${item2}`,
                      "color: green");
    }
  },
  includesValue: function(obj, message) {
    if (Object.values(obj).indexOf(message) > -1) {
      console.log(`%c Test passed! Given Object contains value of ${message}`,
                      "color: green");
    } else  {
      throw new Error(`Finder fail, given Object doesn't contain value of ${message}`);
    }
  },
  includesKey: function(obj, message) {
    if (Object.keys(obj).indexOf(message) > -1) {
      console.log(`%c Test passed! Given Object contains key of ${message}`,
                  "color: green");
      // document.write("%c Test passed! Given Object contains " + message, "color:green");
    } else  {
      console.log(`%c Test failed! Given Object doesn't contains key of ${message}`,
                  "color: red");
      // throw new Error("Finder fail, given Object doesn't contain key of " + message );
    }
  },
  isEmpty: function(item) {
    if (item.length === 0) {
      console.log(`%c Test passed! ${item} is empty`,
                  "color: green");
    } else {
      console.log(`%c Test failed! ${message} is not empty`,
                  "color: red");
    }
  },
  isArray: function(item) {
    if (Array.isArray(item)) {
      console.log(`%c Test passed! ${item} is an Array`,
                  "color: green");
    } else  {
      console.log(`%c Test failed! ${item} isn't an Array`,
                  "color: red");
    }
  }
};


////To write to page example::::

// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error(`Assertion failed: ${assertionToCheck} is not truthy`);
//     } else {
//       document.write(`<font color=\"green\"> Test passed! ${assertionToCheck} is true <\/font>`)
//     }
//   }
// }
