/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var fs = require( 'fs' );
var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var exists = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof exists, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns true if a path exists', opts, function test( t ) {
	t.equal( exists( __filename ), true, 'returns true' );
	t.end();
});

tape( 'the function returns false if a path does not exists', opts, function test( t ) {
	t.equal( exists( 'beepboopbebop' ), false, 'returns false' );
	t.end();
});

tape( 'if `fs.access` is not supported, the function uses `fs.statSync`', opts, function test( t ) {
	var exists = proxyquire( './../lib/sync.js', {
		'fs': {
			'statSync': fs.statSync,
			'accessSync': void 0
		}
	});
	t.equal( exists( __filename ), true, 'returns true' );
	t.end();
});

tape( 'the function should negatively test using `statSync`', opts, function test( t ) {
	var exists = proxyquire( './../lib/sync.js', {
		'fs': {
			'statSync': fs.statSync,
			'accessSync': void 0
		}
	});
	t.equal( exists( 'beepboopbebop' ), false, 'returns false' );
	t.end();
});
