const express = require('express');
const app = express();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Sequelize } = require('sequelize');
require('dotenv').config();

const router = require('./router');

const errorHandling = require('./middleware/errorHandling');
const checkDatabases = require('./util/checkDatabases');
const database = require('./config/database');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const sequelize = new Sequelize(database.development);
const sessionStored = new SequelizeStore({
	db: sequelize,
});

app.use(
	session({
		secret: process.env.secret,
		resave: false,
		saveUninitialized: true,
		store: sessionStored,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
			secure: true,
			httpOnly: true,
			secure: process.env.node_env === 'production',
			sameSite: 'strict',
		},
	})
);

// sessionStored.sync();

app.use(router);
app.use(errorHandling);

app.listen(9001, () => {
	console.log(`server runnnig on http://localhost:9001`);
	checkDatabases;
});
