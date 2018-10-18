describe('Single Note View', function() {
  describe('puts a note on a page', function() {
    function MockNote() {
      return {
        showText: function(){
          return "Something";
        }
      }
    }

    var mock = new MockNote();
    var singleNote = new SingleNoteView(mock);
    assert.isTrue(singleNote instanceof SingleNoteView);

    assert.isTrue(singleNote.viewNote() === "<div>Something</div>");

  });
});
