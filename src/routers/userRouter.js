const User = require('../models/user');
const Task = require('../models/task');
const Note = require('../models/note');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const { sendWelcome, sendGoodbye } = require('../emails/accounts');

const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', async (req, res) => {
    delete req.body.button;
    const duplicate = await User.find({ email: req.body.email });

    try {
        if (duplicate == undefined || duplicate.length < 1) {
            const user = new User(req.body);
            const cookie = await user.generateAuthToken();
            await user.save();
            const id = user._id;
            req.session.userId = cookie;
            sendWelcome(req.body.email, req.body.name);
            res.redirect(`/home/tasks/?name=${id}`);
        } else if (duplicate.length > 0) {
            return res.render('signup', {
                msg2: 'Email is already in use.',
            });
        }
    } catch (err) {
        if (err.errors.password) {
            res.render('signup', {
                msg3: 'Password is too short.',
            });
        } else if (err.errors.email) {
            res.render('signup', {
                msg2: 'Email is required.',
            });
        } else if (err.errors.name) {
            res.render('signup', {
                msg1: 'Name is required.',
            });
        }
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        const cookie = await user.generateAuthToken();
        const id = user._id;
        req.session.userId = cookie;
        res.redirect(`/home/tasks/?name=${id}`);
    } catch (err) {
        if (err == 'Error: Unable to find user.') {
            res.render('login', {
                Error1: err,
            });
        } else if (err == 'Error: Password does not match.') {
            res.render('login', {
                Error2: err,
            });
        }
    }
});

router.get('/deletetask', auth, async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.query.id });
        return res.redirect(`/home/tasks/?name=${req.query.name}`);
    } catch (err) {
        return res.render('error', {
            info: err,
        });
    }
});

router.get('/deletenote', auth, async (req, res) => {
    try {
        await Note.deleteOne({ _id: req.query.id });
        return res.redirect(`/home/tasks/?name=${req.query.name}`);
    } catch (err) {
        return res.render('error', {
            info: err,
        });
    }
});

router.get('/deleteuser', auth, async (req, res) => {
    const user = await User.find({ _id: req.query.name });
    try {
        sendGoodbye(user[0].email, user[0].name);
        await User.deleteOne({ _id: req.query.name });
        return res.redirect('/');
    } catch (err) {
        return res.render('error', {
            info: err,
        });
    }
});

router.get('/update', (req, res) => {
    res.render('forgotpassword');
});

router.post('/update', async (req, res) => {
    try {
        const update = await User.find({ email: req.body.email });

        if (update.length < 1 || update == undefined) {
            throw new Error('Could not find user.');
        }

        const id = update[0]._id;
        if (
            req.body.password.length >= 7 &&
            !req.body.password.includes('password')
        ) {
            const password = await bcrypt.hash(req.body.password, 8);
            const user = await User.findByIdAndUpdate(
                id,
                {
                    password,
                },
                { new: true }
            );

            const cookie = await user.generateAuthToken();
            await user.save();
            req.session.userId = cookie;
            return res.redirect(`/home/tasks/?name=${id}`);
        } else {
            return res.render('forgotpassword', {
                Error1:
                    'Password must be greater than 6 characters long and not include the phrase "password".',
            });
        }
    } catch (err) {
        return res.render('forgotpassword', {
            Error: `${err} Please enter a valid email or signup to create a new account.`,
        });
    }
});

router.get('/signout', async (req, res) => {
    const id = req.query.name;
    await User.findByIdAndUpdate(
        id,
        {
            tokens: [],
        },
        { new: true }
    );

    req.session = null;

    res.render('signout');
});

module.exports = router;
