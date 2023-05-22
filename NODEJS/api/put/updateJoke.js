const db = require('../../util/database');

module.exports = (req, res) => {

	let title = req.body.title;
	let content = req.body.content;
	let jokeId = req.body.id;

	if (!title || !content || !jokeId || title.length < 3 || content.length < 3 || isNaN(jokeId)) {
		res.send({
			success: false,
			error: 'Hiányzó/hibás paraméterek'
		});
		return;
	}

	db.query('UPDATE jokes SET title = ?, content = ? WHERE id = ?', [
		title,
		content,
		jokeId
	], (error) => {

		if (error) {
			console.log(error);
			res.send({
				success: false,
				error: 'Sikertelen szerkesztés.'
			});
			return;
		}

		res.send({
			success: true,
			content: 'Sikeres szerkesztés.'
		});

	});

};
