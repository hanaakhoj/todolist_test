const express = require('express');
const chalk = require('chalk');
const path = require('path');
//const debug = require('debug')('server');
const bodyParser = require('body-parser');

const tasks = require('./todos/routes');

const app = express();
const port = process.env.PORT || 3000;

// databse
const db = require('./config/database');

// db connection
db.sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.error('Error: ', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('TODOLIST'));
app.use('/api', tasks);

app.listen(port, () => {
    console.log(`App running on port ${chalk.green(port)}`)
});
