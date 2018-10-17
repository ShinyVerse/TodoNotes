describe('NoteViewer', function() {
    var doubleNotes = new NoteList;
    doubleNotes.storeNote("Title1","Body of message");
    var noteViewer = new NoteViewer(doubleNotes);

  describe('#viewList -- allows for list to be converted to HTML', function () {
    assert.isTrue(noteViewer.viewList() === "<ol><li><h1>Title1</h1><p>Body of message</p></li></ol>");
  });
  // describe('#viewList -- allows for list to be converted to HTML', function () {
  //   var message = "<li><h1>Title1</h1><p>Body of message</p></li>"
  //   assert.isTrue(noteViewer.viewList() === "<ol>"+ message +"</ol>");
  // })
})
