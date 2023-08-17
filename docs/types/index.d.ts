/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection, ArrayLike } from '@stdlib/types/array';

/**
* Returns accessed values.
*
* @returns accessed values
*/
type Nullary = () => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @returns accessed values
*/
type Unary<T, U> = ( values: [ T, U ] ) => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @returns accessed values
*/
type Binary<T, U> = ( values: [ T, U ], idx: number ) => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed values
*/
type Ternary<T, U> = ( values: [ T, U ], idx: number, indices: Array<number> ) => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Quaternary<T, U, V> = ( values: [ T, U ], idx: number, indices: Array<number>, arrays: [ Collection<T>, Collection<U>, Collection<V> ] ) => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Callback<T, U, V> = Nullary | Unary<T, U> | Binary<T, U> | Ternary<T, U> | Quaternary<T, U, V>;

/**
* Interface describing `addBy`.
*/
interface Routine {
	/**
	* Performs element-wise addition of two strided arrays via a callback function and assigns each result to an element in an output strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* addBy( x.length, x, 1, y, 1, z, 1, accessor );
	* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
	*/
	<T = unknown, U = unknown, V = unknown>( N: number, x: Collection<T>, strideX: number, y: Collection<U>, strideY: number, z: Collection<V>, strideZ: number, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<V | number>;

	/**
	* Performs element-wise addition of two strided arrays via a callback function and assigns each result to an element in an output strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* addBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
	*/
	ndarray<T = unknown, U = unknown, V = unknown>( N: number, x: Collection<T>, strideX: number, offsetX: number, y: Collection<U>, strideY: number, offsetY: number, z: Collection<V>, strideZ: number, offsetZ: number, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<V | number>;
}

/**
* Performs element-wise addition of two strided arrays via a callback function and assigns each result to an element in an output strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - input array
* @param strideY - `y` stride length
* @param z - destination array
* @param strideZ - `z` stride length
* @param clbk - callback function which returns an array-like object containing two values
* @param thisArg - callback execution context
* @returns `z`
*
* @example
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* addBy( x.length, x, 1, y, 1, z, 1, accessor );
* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
* @example
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* addBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
* // z => [ 12.0, 14.0, 16.0, 18.0, 20.0 ]
*/
declare var addBy: Routine;


// EXPORTS //

export = addBy;
