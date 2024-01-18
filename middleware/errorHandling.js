const errorHandling = (err, req, res) => {
	console.log('middleware Error Handling');
	return res.status(500).json({
		message: err.message,
	});
};

module.exports = errorHandling;
