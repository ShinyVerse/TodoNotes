describe('NoteController', function() {
  describe('#insert', function() {

    function NoteViewDouble() {};

    NoteViewDouble.prototype.viewList = function() {
        return "<ul><li>information</li></ul>"
      }

    var noteList = new NoteList();
    noteList.storeNote("information")
    var noteCon = new NoteController(noteList, NoteViewDouble);

    window.onload = function() {
      var div = document.getElementById('mainContainer');
      var expectedStr = "<ul><li>information</li></ul>"
      noteCon.insertNote();
      assert.isTrue(div.innerHTML === expectedStr);
    }
  })
})
