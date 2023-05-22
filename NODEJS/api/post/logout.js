module.exports = (req, res) => {

	req.session.destroy(error => {

		if (error) {
			console.log(error);
			res.send({
				success: false
			});
			return;
		}

		res.send({
			success: true
		});

	});
};
