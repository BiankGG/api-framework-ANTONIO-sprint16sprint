module.exports = function asyncHandler(routeHandler) {
	return async (req, res, next) => {
		try {
			await routeHandler(req, res)
		} catch (err) {
			next(err)
		}
	}
}
