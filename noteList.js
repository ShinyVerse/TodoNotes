(function(exports) {
  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.viewAll = function() {
    return this.list;
  }

  NoteList.prototype.storeNote = function(text) {
    var note = new Note(text);
    this.list.push(note);
  }

  // NoteList.prototype.viewList = function() {
  // var htmlStr = "<ul>";
  // this.list.map(item => {
  //   htmlStr += '<li>${item.text}</li>'
  // })
  // htmlStr += "</ul>"
  // return htmlStr;
  // }

  exports.NoteList = NoteList;
})(this);
