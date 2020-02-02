import mongoose from'mongoose';
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: {type: 'String', required: true },
  content: {type: 'String', required: true},
},{ timestamps: true });

let Note = mongoose.model('Note', NoteSchema);

export default Note;
