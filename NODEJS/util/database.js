const mysql = require('mysql');

let connection = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_PORT
});

connection.connect(function (err) {
	if (err) throw new Error(err);
});

module.exports = connection;
