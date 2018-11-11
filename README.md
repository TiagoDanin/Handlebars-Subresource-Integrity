# Handlebars Subresource Integrity [![Build Status](https://travis-ci.org/TiagoDanin/Handlebars-Subresource-Integrity.png?branch=master)](https://travis-ci.org/TiagoDanin/Handlebars-Subresource-Integrity)

Handlebars helper - Generate string with base64-encoded sha384 hash

## How to Use

```
{{subresource-integrity string}}
//
```

**Params**
- string :: String

Example:

```javascript
{{subresource-integrity "console.log('Hello World')"}}
//sha384-EXHKgzTy7fffqwkZW0ajC+yFJtjsW17H9xEq0F+iYwxPO9ec+7jQuULf75UZtXyc
```

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install handlebars-subresource-integrity --save
```

## Dev Dependencies

- [handlebars](https://ghub.io/handlebars): Handlebars provides the power necessary to let you build semantic templates effectively with no frustration
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework

## License

MIT
