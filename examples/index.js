var isTimestamp = require( './../lib' );

console.log( isTimestamp( Date.now() ) );
// Returns true

var secs = Math.round( Date.now()/1000 );
console.log( isTimestamp( secs ) );
// Returns true

console.log( isTimestamp( 123456 ) );
// Returns false

console.log( isTimestamp( new Date() ) );
// Returns false