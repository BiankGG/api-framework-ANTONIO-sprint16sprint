const config = require('config')

module.exports = function () {
	if (!config.has('jwtSecret')) {
		console.error('jwtPrivateKey is not defined')

		process.exit(1)
	}
}
