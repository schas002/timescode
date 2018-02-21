module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError('input must be a string');
	}

	return (input.split('').map(c => c.charCodeAt(0))
		.reduce((a, n) => a = a * (n + 1) % 9007199254740991, 1));
};
