(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.viewNote = function() {
    var message = this.note.showText();
    return `<div>${message}</div>`
  }

  exports.SingleNoteView = SingleNoteView;
})(this)
