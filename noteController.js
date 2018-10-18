(function(exports) {
  function NoteController(noteList = new NoteList(), noteViewer = NoteViewer) {
    noteList.storeNote("Information");
    this.noteListViewer = new noteViewer(noteList);
  }

  NoteController.prototype.insertNote = function() {
    var main = document.getElementById('mainContainer');
    main.innerHTML = this.noteListViewer.viewList();
  }

  exports.NoteController = NoteController;

})(this);
