const jwt = require('jsonwebtoken')

const config = require('config')

module.exports = async function (req, res, next) {
	const token = req.headers['x-auth-token']

	if (!token)
		return res
			.status(401)
			.json({ message: 'Mira a ver si se te olvidado hacer login' })

	try {
		const decoded = await jwt.verify(token, config.get('jwtSecret'))

		req.user = decoded

		next()
	} catch (err) {
		res.status(400).send('invalid token')
	}
}
