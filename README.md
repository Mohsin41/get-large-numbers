# get-large-numbers

[![Coverage Status](https://coveralls.io/repos/github/Mohsin41/get-large-numbers/badge.svg?branch=main)](https://coveralls.io/github/Mohsin41/get-large-numbers?branch=main)
[![Build Status](https://travis-ci.com/Mohsin41/get-large-numbers.svg?branch=main)](https://travis-ci.com/Mohsin41/get-large-numbers)

An npm library for readable developer-friendly large numbers

## What is it?

It is a simple library that provide some easy methods to get large numbers.library is inspired by [this code war kata](https://www.codewars.com/kata/5b57a9bec19d96c0b80000c9/discuss/javascript).

# Installation

```sh
$ npm i get-large-numbers
```

# Usage

you just need to import it in a file

```js
require("get-large-numbers");
```

### Core

These methods come bundled with this library :

- [`hundred`]
- [`thousand`]
- [`million`]
- [`billion`]
- [`trillion`]
- [`quadrillion`]
- [`quintillion`]
- [`sextillion`]
- [`septillion`]
- [`octillion`]
- [`nonillion`]

#### [hundred]

> Transform any given number to hundred.

```js
Number(2).hundred();
//=> 200
```

#### [thousand]

> Transform any given number to thousnad.

```js
Number(2).thousand();
//=> 2000
```

#### [million]

> Transform any given number to million.

```js
Number(2).million();
//=> 2000000
```

#### [billion]

> Transform any given number to billion .

```js
Number(2).billion();
//=> 2000000000
```

#### [trillion]

> Transform any given number to trillion

```js
Number(2).trillion();
//=> 2000000000000
```

#### [quadrillion]

> Transform any given number to quadrillion.

```js
Number(2).quadrillion();
//=> 2000000000000000
```

#### [ quintillion]

> Transform any given number to quintillion.

```js
Number(2).quintillion();
//=> 2000000000000000000
```

#### [How to chain ]

> methods can be chained but currently dont accept any parameter.

```js
Number(13).thousand().hundred();
//=> 1300000
```

#### [Alternative Syntax]

These are two other syntaxes this library supported:

```js
(2).thousand();
//=> 2000

2..thousand();
//=> 2000

```

# LICENSE

MIT License

Copyright (c) 2021 Mohsin Afzal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
