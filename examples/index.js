'use strict';

var isTimestamp = require( './../lib' );

console.log( isTimestamp( Date.now() ) );
// returns true

var secs = Math.round( Date.now()/1000 );
console.log( isTimestamp( secs ) );
// returns true

console.log( isTimestamp( 123456 ) );
// returns false

console.log( isTimestamp( new Date() ) );
// returns false