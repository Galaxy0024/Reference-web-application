const crypto = require('crypto');
const db = require('../../util/database');

module.exports = (req, res) => {

	if (req.session.isUserLoggedIn === true) {
		res.send({
			success: false,
			error: 'Ön már be van jelentkezve'
		});
		return;
	}

	let username = req.body.username;
	let password = req.body.password;

	if (!username || !password || !username.length || !password.length) {
		res.send({
			success: false,
			error: 'Hiányzó paraméterek'
		});
		return;
	}

	db.query('SELECT * FROM user WHERE username = ? AND password = ?', [
		username,
		crypto.createHash('sha512').update(password).digest('hex')
	], (error, results) => {
		if(error){
			console.log(error);
			res.send({
				success: false,
				error: 'Hiba történt a feldolgozás során'
			});
			return;
		}
		if (results.length === 1) {
			req.session.isUserLoggedIn = true;
			req.session.userId = results[0]['id'];
			res.send({
				success: true
			});
		} else {
			res.send({
				success: false,
				error: 'Hibás felhasználónév/jelszó'
			});
		}
	});

};
