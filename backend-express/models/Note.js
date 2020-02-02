import mongoose from'mongoose';
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
  title: {type: 'String', required: true },
  content: {type: 'String', required: true},
  dateAdded: {type: 'Date', default: Date.now, required:true }
});

let Note = mongoose.model('Note', NoteSchema);

export default Note;
