describe('NoteList', function() {
  var noteList = new NoteList;
  describe('starts with empty array', function() {
    assert.isEmpty(noteList.list);
    assert.isArray(noteList.list);
  });
  describe('can add a note to the list', function() {
    noteList.storeNote("Title1","Body of message");
    assert.isTrue(noteList.list[0].title === "Title1");
    // assert.isEmpty(noteList.list);
    // assert.isArray(noteList.list);
  });



  // describe('can add a note', function() {
  //   let note = new Mock('Note', [["body", "message"]]);
  //   var noteList2 = new NoteList;
  //   noteList2.createAndStoreNote('message', note)
  //   console.log(noteList2.list[0]);
  //   assert.isTrue(noteList2.list[0].body === 'message');
  // })
})
