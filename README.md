# large-numbers

[![Coverage Status](https://coveralls.io/repos/github/Mohsin41/large-numbers/badge.svg)](https://coveralls.io/github/Mohsin41/large-numbers)
[![Build Status](https://travis-ci.com/Mohsin41/large-numbers.svg?branch=main)](https://travis-ci.com/Mohsin41/large-numbers)

An npm library for readable developer-friendly large numbers

## What is it?

It is a simple library that provide some easy methods to get large numbers.

# Installation

```sh
$ npm i large-number
```

# Usage

you just need to import it in a file

```js
require("large-number")();
```

### Core

These methods come bundled with this library :

- [`hundered`]
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

#### [hundered]

> Transform any given number to hundered.

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
Number(15).thousand().hundred();
//=> 1500000
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
