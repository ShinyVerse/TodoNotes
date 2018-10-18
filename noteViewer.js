(function(exports) {
  function NoteViewer(noteList) {
     this.noteList = noteList;
  }

  NoteViewer.prototype.viewList = function() {
    var list = this.noteList.viewAll();
    var htmlStr = "<ul>";
    list.map(item => {
      let message = this.truncate(item.text);
      htmlStr += `<li>${message}</li>`;
    });
    htmlStr += "</ul>"
    return htmlStr;
  }

  NoteViewer.prototype.truncate = function(message) {
    if (message.length > 20) {
      return `${message.slice(0,20)}...`
    } else {
      return message;
    }
  }

  exports.NoteViewer = NoteViewer;
})(this);
