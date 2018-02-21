const ava = require('ava');
const timescode = require('./timescode');

ava.test('timescode', t => {
	t.is(timescode(''), 1, 'should have a prime of 1');
	t.is(timescode('a'), 98, 'should work for single-char values');
	t.is(timescode('abcd'), 97990200, 'should work for longer values');
	t.is(timescode('❤'), 10085, 'should work for non-ASCII chars');
});
