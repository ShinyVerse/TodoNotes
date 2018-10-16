
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      return true;
    }
  },
  isSame: function(item, item2) {
    if (item !== item2) {
      throw new Error("THAT IS NOT THE SAME!!!");
    } else {
      return true;
    }
  },
  includes: function(obj, message) {
    if (Object.values(obj).indexOf(message) > -1) {
      return true;
    } else  {
      return false;
    }
  }
};
