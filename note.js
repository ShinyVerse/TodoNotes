// var CreateNote = function(heading, text) {
//     return {
//         title: heading,
//         body: text
//     }
// };
//
// module.exports.CreateNote = CreateNote;
(function(exports) {
  function Note(info) {
    this.text = info;
  };

  Note.prototype.showText = function () {
    return this.text;
  };

  exports.Note = Note;

})(this);
