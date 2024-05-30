const mongoose = require('mongoose')
const { body } = require('express-validator')

const taskSchema = new mongoose.Schema({
	title: { type: String, required: true },
})

const Task = mongoose.model('Task', taskSchema)

const taskValidationSchema = body('title')
	.notEmpty()
	.withMessage('the title is empty')
	.isString()
	.withMessage('the title is not string')

exports.Task = Task
exports.taskValidationSchema = taskValidationSchema
