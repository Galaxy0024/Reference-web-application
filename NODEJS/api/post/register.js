const crypto = require('crypto');
const db = require('../../util/database');

module.exports = (req, res) => {

	let username = req.body.username;
	let password = req.body.password;

	if (!username || !password || !username.length || !password.length) {
		res.send({
			success: false,
			error: 'Hiányzó paraméterek'
		});
		return;
	}

	if (!(username.length >= 3)) {
		res.send({
			success: false,
			error: 'A felhasználónév túl rövid (minimum 3 karakter)'
		});
		return;
	}

	if (!(password.length >= 5)) {
		res.send({
			success: false,
			error: 'A jelszó túl gyenge (minimum 5 karakter)'
		});
		return;
	}

	db.query('SELECT * FROM user WHERE username = ?', [
		username
	], (error, results) => {

		if (error) {
			console.log(error);
			res.send({
				success: false,
				error: 'Hiba történt a feldolgozás során'
			});
			return;
		}

		if (results.length === 1) {
			res.send({
				success: false,
				error: 'Már létezik felhasználó ezzel a névvel.'
			});
			return;
		}

		db.query('INSERT INTO user SET username = ?, password = ?', [
			username,
			crypto.createHash('sha512').update(password).digest('hex')
		], error => {

			if (error) {
				console.log(error);
				res.send({
					success: false,
					error: 'Sikertelen regisztráció.'
				});
				return;
			}

			res.send({
				success: true,
				content: 'Sikeres regisztráció.'
			});

		});
	});
};
