const express = require('express');
const Task = require('../model/tasks');

const router = express.Router();

// Get all tasks
router.get('/tasks', (req, res, next) => {
    Task.findAll()
        .then(tasks => res.json(tasks))
        .catch(err => res.send('Error: ' + err));
});
// Create a new Task
router.post('/tasks', (req, res, next) => {
    if (!req.body.task) {
        res.status(400);
        res.json({
            error: 'Bad data'
        });
    } else {
        Task.create(req.body)
            .then(() => res.send('Task added successfully!'))
            .catch(err => res.send('error: ' + err));
    }
});
// Update an existing Task
router.put('/tasks/:id', (req, res, next) => {
    if (!req.body.task) {
        res.status(400);
        res.json({
            error: 'Bad data'
        });
    } else {
        Task.update(
            { task: req.body.task },
            { where: { id: req.params.id } }
        )
            .then(() => res.send('Task updated successfully!'))
            .error(err => handleError(err));
    }
});
//Delete a task
router.delete('/tasks/:id', (req, res, next) => {
    Task.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => res.send('Task deleted successfully!'))
        .catch(err => res.send('Error: ' + err));
});

module.exports = router