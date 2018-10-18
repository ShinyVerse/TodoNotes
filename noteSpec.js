// function testNoteCreation() {
//   var note = new Note("myTitle", "myMessage");
//   assert.includesKey(note, "title");
//   assert.includesKey(note, "body");
//   assert.includesValue(note, "myTitle");
//   assert.includesValue(note, "NotARealMessage");
// };

describe("Note", function() {
  var note = new Note("myTitle");
  describe("Testing a note can be created with title and message", function() {
    assert.includesKey(note, "text");
    assert.includesValue(note, "myTitle");
  })
})
//
// var describe = function(message, callback) {
//       document.write(message +"</br>" );
//       callback();
// }

//
// describe("Hopefully will group them all", testNoteCreation);
//
// describe("This is a new section too!", testNoteCreation);
// describe("Given in a function of my own", function() {
//   var obj = {dog: "dog"}
//   assert.includesValue(obj,"dog");
//
// })
