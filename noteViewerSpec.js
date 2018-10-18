describe('NoteViewer', function() {
    var doubleNotes = new NoteList;
    doubleNotes.storeNote("Title1");
    var noteViewer = new NoteViewer(doubleNotes);

  describe('#viewList -- allows for list to be converted to HTML', function () {
    assert.isTrue(noteViewer.viewList(doubleNotes) === "<ul><li>Title1</li></ul>");
  });

  describe('#truncate', function() {
    var message = "I am more than 20 letters, look as I go on and on and on."
    assert.isTrue(noteViewer.truncate(message) === "I am more than 20 le..." );
  })
  // describe('#viewList -- allows for list to be converted to HTML', function () {
  //   var message = "<li><h1>Title1</h1><p>Body of message</p></li>"
  //   assert.isTrue(noteViewer.viewList() === "<ol>"+ message +"</ol>");
  // })
})
