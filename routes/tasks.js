const express = require('express')

const { taskValidationSchema } = require('../models/task')

const auth = require('../middleware/auth')
const admin = require('../middleware/admin')

const {
	getAll,
	getById,
	create,
	update,
	remove,
} = require('../controllers/tasks')

const validate = require('../middleware/validate')

const idValidationFromParam = require('../middleware/idValidationFromParam')

const router = express.Router()

router.get('/', getAll)

router.get(
	'/:taskId',
	idValidationFromParam('taskId'),
	validate,
	getById
)

router.post('/', [auth], taskValidationSchema, validate, create)

router.put(
	'/:taskId',
	[auth, admin],
	idValidationFromParam('taskId'),
	taskValidationSchema,
	validate,
	update
)

router.delete(
	'/:taskId',
	[auth, admin],
	idValidationFromParam('taskId'),
	validate,
	remove
)

module.exports = router
