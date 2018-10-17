(function(exports) {
  function NoteViewer(noteList) {
    this.noteList = noteList;
  }

  NoteViewer.prototype.viewList = function() {
  var htmlStr = "<ol>";
  this.noteList.list.map(item => {
    htmlStr += "<li><h1>";
    htmlStr += item.title;
    htmlStr += "</h1><p>";
    htmlStr += item.body;
    htmlStr += "</p></li>"
  })
    // console.log(item.title, item.body)})
  htmlStr += "</ol>"
  return htmlStr;
  }

  exports.NoteViewer = NoteViewer;
})(this);
