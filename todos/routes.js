const express = require('express')
const Task = require('../model/Task')

var router = express.Router();

// Get all Tasks
router.get('/tasks', (req, res, next) => {
  Task.findAll()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('Error: ' + err)
    });
});
// Get a task by id
router.get('/task/:id', (req, res, next) => {
  Task.findByPk(req.params.id)
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('Error: ' + err)
    });
});
// Add a new Task
router.post('/task', (req, res, next) => {
  if (!req.body.task_name) {
    res.status(400)
    res.json({
      error: 'Bad data'
    })
  } else {
    Task.create(req.body)
      .then(() => {
        res.send('Task added successfully!')
      })
      .catch(err => {
        res.send('Error: ' + err)
      })
  }
})
// Update an existing Task
router.put('/task/:id', (req, res, next) => {
  if (!req.body.task_name) {
    res.status(400)
    res.json({
      error: 'Bad data'
    })
  } else {
    Task.update(
      { task_name: req.body.task_name },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.send('Task updated successfully!')
      })
      .error(err => handleError(err))
  }
});
//Delete a task
router.delete('/task/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.send('Task deleted successfully!')
    })
    .catch(err => {
      res.send('Error: ' + err)
    })
});

module.exports = router