const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        note: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;