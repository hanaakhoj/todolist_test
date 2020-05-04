const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// databse
const db = require('./config/database');

// db connection
db.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.error('Error: ', err));

app.get('/', (req, res) => res.send('TODOLIST'));

app.listen(port, () => {
    console.log(`App running on port ${chalk.green(port)}`)
});
