
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isTimestamp = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-timestamp', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isTimestamp ).to.be.a( 'function' );
	});

	it( 'should negatively validate', function test() {
		var values = [
				'5',
				123456,
				[],
				{},
				true,
				null,
				undefined,
				NaN,
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isTimestamp( values[i] ) );
		}
	});

	it( 'should positively validate', function test() {
		assert.ok( isTimestamp( Date.now() ) );
		assert.ok( isTimestamp( Math.round( Date.now()/1000 ) ) ); // seconds
	});

});