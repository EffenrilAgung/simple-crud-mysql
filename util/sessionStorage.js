const session = require('express-session');
const SequalizeStore = require('connect-session-sequelize')(session.Store);
const { Sequelize } = require('sequelize');
const database = require('../config/database');
const crypto = require('node:crypto');

const sessionStorage = async (store) => {
	return session({
		secret: 'keyboard cat',
		store: store,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
			secure: true,
			httpOnly: true,
		},
	});
};

module.exports = sessionStorage;
