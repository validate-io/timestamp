/**
*
*	VALIDATE: timestamp
*
*
*	DESCRIPTION:
*		- Validates if a value is a timestamp.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number' );


// ISTIMESTAMP //

var // Seconds or milliseconds; e.g., Date.now():
	timestamp = /^\d{10}$|^\d{13}$/;

/**
* FUNCTION: isTimestamp( time )
*	Validates whether a time is a Unix timestamp.
*
* @example Example Unix timestamp.
*	// returns true
* timestamp( Date.now() );
*
* @param {Number} time - time to validate
* @returns {Boolean} boolean indicating whether a time is formatted as Unix time.
*/
function isTimestamp( time ) {
	return isNumber( time ) && timestamp.test( time.toString() );
} // end FUNCTION isTimestamp()


// EXPORTS //

module.exports = isTimestamp;
