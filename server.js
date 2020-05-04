const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('TODOLIST'));

app.listen(port, () => {
    console.log(`App running on port ${chalk.green(port)}`)
});
