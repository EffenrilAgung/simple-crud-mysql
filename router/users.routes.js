const express = require('express');
const router = express.Router();

const {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
} = require('../controller/handle.users');

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
