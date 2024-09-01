const express = require('express');
const tasksController = require('../controllers/tasksController')
const taskMiddleware = require('../middlewares/tasksMiddleware')
const router = express.Router()



router.get('/tasks', tasksController.getAll);
router.post('/tasks', taskMiddleware.validateBody, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deletTask)
router.put('/tasks/:id', taskMiddleware.validateBody, tasksController.updateTask)
module.exports = router;