module.exports = (req, res, next) => {
	if (!req.user.isAdmin)
		return res
			.status(403)
			.json({ message: 'SE QUIEN ERES Y NO PUEDES ENTRAR AQUI' })

	next()
}
