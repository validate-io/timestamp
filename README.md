Timestamp
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a timestamp.


## Installation

``` bash
$ npm install validate.io-timestamp
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isTimestamp = require( 'validate.io-timestamp' );
```

#### isTimestamp( value )

Validates if a `value` is a timestamp.

``` javascript
var value = Date.now();

var bool = isTimestamp( value );
// returns true
```

A valid `timestamp` may be in either `milliseconds` or `seconds`. 



## Notes

The `value` to be validated should be `numeric`. For any other type, the method returns `false`.


## Examples

``` javascript
var isTimestamp = require( 'validate.io-timestamp' );

console.log( isTimestamp( Date.now() ) );
// returns true

var secs = Math.round( Date.now()/1000 );
console.log( isTimestamp( secs ) );
// returns true

console.log( isTimestamp( 123456 ) );
// returns false

console.log( isTimestamp( new Date() ) );
// returns false
```


To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-timestamp.svg
[npm-url]: https://npmjs.org/package/validate.io-timestamp

[travis-image]: http://img.shields.io/travis/validate-io/timestamp/master.svg
[travis-url]: https://travis-ci.org/validate-io/timestamp

[coveralls-image]: https://img.shields.io/coveralls/validate-io/timestamp/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/timestamp?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/timestamp.svg
[dependencies-url]: https://david-dm.org/validate-io/timestamp

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/timestamp.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/timestamp

[github-issues-image]: http://img.shields.io/github/issues/validate-io/timestamp.svg
[github-issues-url]: https://github.com/validate-io/timestamp/issues
