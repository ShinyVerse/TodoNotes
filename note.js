// var CreateNote = function(heading, text) {
//     return {
//         title: heading,
//         body: text
//     }
// };
//
// module.exports.CreateNote = CreateNote;

(function(exports) {
  function Note(heading, text) {
    this.title = heading;
    this.body = text;
  };

  exports.Note = Note;
})(this);
