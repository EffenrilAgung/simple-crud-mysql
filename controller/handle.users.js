const { Users } = require('../db/models');
const { hashPassword } = require('../util/passwordHash');

const admin = (req, res, next) => {
	res.send('This Is Admin');
};
const getAllUsers = async (req, res, next) => {
	try {
		const result = await Users.findAll();
		return res.status(200).json({
			message: 'Data has been found',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const createUser = async (req, res, next) => {
	try {
		const body = req.body;
		const result = await Users.create({
			fullName: body.fullName,
			email: body.email,
			password: await hashPassword(body.password),
			role: body.role ? body.role : 'user',
		});
		return res.status(201).json({
			message: 'Data has been created',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const body = req.body;
		const result = await Users.update(body, {
			where: {
				id: req.params.id,
			},
		});

		if (!result) {
			return res.status(404).json({
				message: 'Data not found',
			});
		}
		return res.status(200).json({
			message: 'Data has been updated',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		const result = await Users.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!result) {
			return res.status(404).json({
				message: 'Data not found',
			});
		}

		return res.status(200).json({
			message: 'Data has been deleted',
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	admin,
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
};
