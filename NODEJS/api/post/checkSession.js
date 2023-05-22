module.exports = (req, res) => {
	res.send(
		req.session.isUserLoggedIn === true
	);
};
