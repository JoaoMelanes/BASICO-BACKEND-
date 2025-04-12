const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.deleteTask)
router.get('/edit/:id', TaskController.taskEdit)
router.post('/update', TaskController.taskUpdate)
router.get('/', TaskController.showTasks)

module.exports = router