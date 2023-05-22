module.exports = (req, res, next) => {
	if (!req.session.isUserLoggedIn) {
		res.send({
			success: false,
			error: 'Azonosítatlan felhasználó'
		});
	} else {
		next();
	}
};
