const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const path = require('path');

require('./db/mongoose');
const userRouter = require('./routers/userRouter');
const getTasksRouter = require('./routers/getTasks');
const postTasksRouter = require('./routers/postTasks');
const getNotesRouter = require('./routers/getNotes');
const postNotesRouter = require('./routers/postNotes');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../src/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cookieSession({
        keys: [process.env.COOKIE],
    })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(userRouter);
app.use(getTasksRouter);
app.use(postTasksRouter);
app.use(getNotesRouter);
app.use(postNotesRouter);

module.exports = app;
