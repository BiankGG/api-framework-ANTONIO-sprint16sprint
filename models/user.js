const mongoose = require('mongoose')
const { body } = require('express-validator')

const config = require('config')

const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: String,
	isAdmin: Boolean,
})

userSchema.methods.generateJWT = function () {
	return jwt.sign(
		{ username: this.username, isAdmin: this.isAdmin },
		config.get('jwtSecret')
	)
}

const User = mongoose.model('User', userSchema)

const userValidationSchema = [
	body('username')
		.notEmpty()
		.withMessage('the username is empty')
		.isString()
		.withMessage('the username is not string'),
	body('password')
		.notEmpty()
		.withMessage('the password is empty')
		.isString()
		.withMessage('the password is not string'),
]

exports.User = User
exports.userValidationSchema = userValidationSchema
