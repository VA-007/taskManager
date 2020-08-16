const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./db/mongoose');
const userRouter = require('./routers/userRouter');
const taskRouter = require('./routers/taskRouter');

const app = express();
const port = process.env.PORT;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../src/views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + process.env.PORT);
});
