(function(exports) {
  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.storeNote = function(text, body) {
    var note = new Note(text, body);
    this.list.push(note);
  }

  NoteList.prototype.viewList = function() {
  var htmlStr = "<ol>";
  this.list.map(item => {
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

  exports.NoteList = NoteList;
})(this);
