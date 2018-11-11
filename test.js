const handlebars = require('handlebars')
const assert = require('assert');
const helper = require('.')

handlebars.registerHelper('integrity', helper)

describe('Handlebars Subresource Integrity', () => {
	it('{{integrity "console.log(\'Hello World\')"}}', () => {
		assert.equal(
			(handlebars.compile('{{integrity "console.log(\'Hello World\')"}}'))({}),
			'sha384-EXHKgzTy7fffqwkZW0ajC+yFJtjsW17H9xEq0F+iYwxPO9ec+7jQuULf75UZtXyc'
			//echo -n "console.log('Hello World')" | openssl dgst -sha384 -binary | openssl base64 -A
		)
	})
})
