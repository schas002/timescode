module.exports = input => (input.split('').map(c => c.charCodeAt(0))
	.reduce((a, n) => a = a * (n + 1) % 9007199254740991, 1));
