const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const authMiddleware = require('./util/authmiddleware');

const app = express();

const port = process.env.PORT || 8080;
const sessionSecret = process.env.SESSION_SECRET || 'session_secret';

//Végpontok importja
const getJokes = require('./api/get/getJokes');
const getJoke = require('./api/get/getJoke');
const getRandomJoke = require('./api/get/getRandomJoke');

const postRegister = require('./api/post/register');
const postLogin = require('./api/post/login');
const postLogout = require('./api/post/logout');
const postCheckSession = require('./api/post/checkSession');
const postJoke = require('./api/post/newJoke');

const updateJoke = require('./api/put/updateJoke');

const deleteJoke = require('./api/delete/deleteJoke');

//Adatbázis
const db = require('./util/database');

//Session beállítások
app.use(cookieParser());
app.use(session({secret: sessionSecret}));

//Request-ek elő feldolgozása
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({extended: true})); // application/x-www-form-urlencoded

//Statikus fájlok kiszolgálása
app.use(express.static('public'));

const protectedRoutes = ['/api/newJoke', '/api/updateJoke', '/api/deleteJoke', '/api/logout'];

protectedRoutes.forEach(route => {
	app.use(route, authMiddleware);
});

//Végpontok definiálása
app.get('/api/jokes', getJokes);
app.get('/api/jokes/:id', getJoke);
app.get('/api/randomJoke', getRandomJoke);

app.post('/api/register', postRegister);
app.post('/api/login', postLogin);
app.post('/api/logout', postLogout);
app.post('/api/checksession', postCheckSession);
app.post('/api/newJoke', postJoke);

app.put('/api/updateJoke', updateJoke);

app.delete('/api/deleteJoke', deleteJoke);

//Kiszolgáló elindítása
app.listen(port, () => {
	console.log(`Vicc szerver készen áll a nevettetésre \n http://localhost:${port}`);
});
