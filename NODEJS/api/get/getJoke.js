const db = require('../../util/database');

module.exports = (req, res) => {

	let id = req.params.id;

	db.query('SELECT jokes.id, created_at, title, content, username FROM jokes ' +
		'INNER JOIN user ON user.id = jokes.creator ' +
		'WHERE jokes.id = ?', [id], (error, result) => {
		if (error) {
			console.log(error);
			res.send({
				success: false,
				error: 'Hiba a feldolgozás során'
			});
			return;
		}
		res.send({
			success: true,
			content: result
		});
	});
};
