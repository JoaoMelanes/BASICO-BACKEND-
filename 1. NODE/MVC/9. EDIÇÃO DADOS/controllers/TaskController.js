const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave (req, res) {
        
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async deleteTask (req, res) {

            const id = req.body.id

            await Task.destroy({where: {id : id}})

            res.redirect('/tasks')
    }

    static async taskEdit (req, res) {

        const id = req.params.id

        const task = await Task.findOne({raw: true, where: {id:id}})

        res.render('tasks/edit', {task})
    }

    static async taskUpdate(req, res) {

        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.title,
        }

        await Task.update(task, {where: {id: id}})
        
        res.redirect('/tasks')
    }
    
    static async showTasks(req, res) {

        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})

    }

   }