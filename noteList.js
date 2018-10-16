(function(exports) {
  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.createAndStoreNote = function(text, note = new Note("")) {
    note.body = text;
    this.list.push(note);
  }

  // NoteList.prototype.createAndStoreNote = function(text) {
  //   var note = new Note(text)
  //   this.list.push(note);
  // }

  exports.NoteList = NoteList;
})(this);
