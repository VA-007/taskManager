const Task = require('../models/task');
const User = require('../models/user');
const Note = require('../models/note');
const auth = require('../middleware/auth');

const express = require('express');

const router = new express.Router();

router.post('/home/notes', auth, async (req, res) => {
    const user = await User.findById({ _id: req.query.name });
    if (req.body.note.length < 1 || req.body.note == undefined) {
        req.body.note = 'Nothing Was Entered.';
    }
    const note = new Note({
        note: req.body.note,
        author: user._id,
    });
    await note.save();
    const tasks = await Task.find({ author: user._id });
    const notes = await Note.find({ author: user._id });

    if (tasks[7] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskIdd8: tasks[7]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[6] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[5] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[4] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[3] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[2] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[1] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[0] && tasks[7]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[7]) || (tasks == undefined && notes[7])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                note8: notes[7].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                noteId8: notes[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[7]) || (notes == undefined && tasks[7])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                task8: tasks[7].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                taskId8: tasks[7]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (notes[6] && tasks[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[6]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[6] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[6]) || (notes == undefined && tasks[6])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                task7: tasks[6].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                taskId7: tasks[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[6]) || (tasks == undefined && notes[6])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                note7: notes[6].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                noteId7: notes[6]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[5]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[5] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[5]) || (notes == undefined && tasks[5])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                task6: tasks[5].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                taskId6: tasks[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[5]) || (tasks == undefined && notes[5])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                note6: notes[5].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                noteId6: notes[5]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[4]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[4] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[4]) || (notes == undefined && tasks[4])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                task5: tasks[4].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                taskId5: tasks[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[4]) || (tasks == undefined && notes[4])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                note5: notes[4].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                noteId5: notes[4]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[3]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[3] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[3]) || (notes == undefined && tasks[3])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                task4: tasks[3].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                taskId4: tasks[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[3]) || (tasks == undefined && notes[3])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                note4: notes[3].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                noteId4: notes[3]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[2]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[2] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[2]) || (notes == undefined && tasks[2])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                task3: tasks[2].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                taskId3: tasks[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[2]) || (tasks == undefined && notes[2])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                note3: notes[2].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                noteId3: notes[2]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[1]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[1] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[1]) || (notes == undefined && tasks[1])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                task2: tasks[1].description,
                taskId1: tasks[0]._id,
                taskId2: tasks[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[1]) || (tasks == undefined && notes[1])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                note2: notes[1].note,
                noteId1: notes[0]._id,
                noteId2: notes[1]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (tasks[0] && notes[0]) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((notes.length < 1 && tasks[0]) || (notes == undefined && tasks[0])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                task1: tasks[0].description,
                taskId1: tasks[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if ((tasks.length < 1 && notes[0]) || (tasks == undefined && notes[0])) {
        try {
            return res.render('notemanager', {
                name: user.name,
                note1: notes[0].note,
                noteId1: notes[0]._id,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }

    if (
        (tasks.length < 1 && notes.length < 1) ||
        (tasks == undefined && notes == undefined)
    ) {
        try {
            return res.render('notemanager', {
                name: user.name,
                user: user._id,
            });
        } catch (err) {
            return res.render('error', {
                info: err,
            });
        }
    }
});

module.exports = router;
